<template>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="small">
        <el-form ref="form" label-width="110px" :model="form" :rules="rules">
            <el-col :span="24">
                <el-form-item label="单位名称：" required prop="materialUnitName">
                    <el-input v-model.trim="form.materialUnitName" placeholder="请输入单位名称" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="单位简拼：" required prop="materialUnitShortName">
                    <el-input v-model.trim="form.materialUnitShortName" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '修改单位'" type="primary" @click="onSubmit(true)">保存</el-button>
                    <el-button v-if="title == '新增单位'" type="primary" @click="onSubmit(false)">完成</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </el-dialog>
</template>
<script>
    import {mapState} from 'vuex';
    import pinyin from 'pinyin';
    export default {
        data() {
            return {
                dialogVisible: true,
                name:"",
                title:"",
                ifDisabled:false,
                form:{
                    materialUnitName:'',
                    materialUnitShortName:'',
                },
                rules: {//验证规则
                    materialUnitName: [
                        { required: true, message: '请输入单位名称', trigger: 'blur' }
                    ],
                    materialUnitShortName: [
                        { required: true, message: '请输入单位简拼', trigger: 'blur' }
                    ],
                }
            }
        },
        watch:{
            /*简拼*/
            "form.materialUnitName"(word){
                let materialUnitShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for(let i=0;i<result.length;i++){
                    materialUnitShortName += result[i]
                }
                this.form.materialUnitShortName = materialUnitShortName;
            },
            name(e){
                switch (e){
                    case 'add':
                        this.title='新增单位';
                        break;
                    case 'edit':
                        this.title='修改单位';
                        break;
                    default:
                        this.title=''
                }
            }
        },
        methods: {
            close () {
                if(this.$route.query.type=="materiel"){
                    this.$router.push({
                        path:'/settings/handleMateriel/add/index',
                    });
                }else{
                    this.$router.push('/settings/handleUnit/index');
                }
            },
            onSubmit(materialId) {
                this.$refs.form.validate((valid) => {
                    if(valid){
                        if(materialId){
                            /*修改单位*/
                            this.form.materialId=this.$route.query.materialId;
                            utils.post(urls.materialUnitEdit,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '修改操作成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/settings/handleUnit/index');
                                }
                            });
                        }else{
                            /*新增单位*/
                            utils.post(urls.materialUnitAdd,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '添加操作成功',
                                        type: 'success'
                                    });
                                    if(this.$route.query.type=="materiel"){
                                        this.$router.push({
                                            path:'/settings/handleMateriel/add/index',
                                            query:{
                                                materialUnitId:data.result
                                            }
                                        });
                                    }else{
                                        this.$router.push('/settings/handleUnit/index');
                                    }
                                }
                            });
                        }
                    }
                })

            },
            showInfo(){
                let requestData = {"materialUnitId":this.$route.query.materialUnitId};
                utils.post(urls.materialUnitShow,requestData,this).then(function(data){
                    if (data.code == 200) {
                        this.form = data.result.pmsMaterialUnit
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                });
            },
        },
        created(){
            this.name = this.$route.query.name;
            switch(this.$route.query.name){
                case 'add':
                    this.title="新增单位";
                    this.ifDisabled = false;
                    break;
                case 'edit':
                    this.title="修改单位";
                    this.ifDisabled = false;
                    this.showInfo();
                    break;
            }
        },
        computed: mapState({user: state => state.user}),
    }
</script>