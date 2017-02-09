<template>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="small">
        <el-form ref="form" label-width="110px" :model="form" :rules="rules">
            <el-col :span="24">
                <el-form-item label="类别名称：" required prop="materialTypeName">
                    <el-input v-model.trim="form.materialTypeName" placeholder="请输入类别名称" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="类别简拼：" required prop="materialTypeShortName">
                    <el-input v-model.trim="form.materialTypeShortName" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '修改类别'" type="primary" @click="onSubmit(true)">保存</el-button>
                    <el-button v-if="title == '新增类别'" type="primary" @click="onSubmit(false)">完成</el-button>
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
                    materialTypeName:'',
                    materialTypeShortName:'',
                },
                rules: {//验证规则
                    materialTypeName: [
                        { required: true, message: '请输入类别名称', trigger: 'blur' }
                    ],
                    materialTypeShortName: [
                        { required: true, message: '请输入类别简拼', trigger: 'blur' }
                    ],
                }
            }
        },
        watch:{
            /*简拼*/
            "form.materialTypeName"(word){
                let materialTypeShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for(let i=0;i<result.length;i++){
                    materialTypeShortName += result[i]
                }
                this.form.materialTypeShortName = materialTypeShortName;
            },
            name(e){
                switch (e){
                    case 'add':
                        this.title='新增类别';
                        break;
                    case 'edit':
                        this.title='修改类别';
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
                    this.$router.push('/settings/handleType/index')
                }
            },
            onSubmit(materialId) {
                this.$refs.form.validate((valid) => {
                    if(valid){
                        if(materialId){
                            /*修改类别*/
                            this.form.materialId=this.$route.query.materialId;
                            utils.post(urls.materialTypeEdit,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '修改操作成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/settings/handleType/index');
                                }
                            });
                        }else{
                            /*新增类别*/
                            utils.post(urls.materialTypeAdd,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '添加操作成功',
                                        type: 'success'
                                    });
                                    if(this.$route.query.type=="materiel"){
                                        this.$router.push({
                                            path:'/settings/handleMateriel/add/index',
                                            query:{
                                                materialTypeId:data.result
                                            }
                                        });
                                    }else{
                                        this.$router.push('/settings/handleType/index');
                                    }
                                }
                            });
                        }
                    }
                })

            },
            showInfo(){
                let requestData = {"materialTypeId":this.$route.query.materialTypeId};
                utils.post(urls.materialTypeShow,requestData,this).then(function(data){
                    if (data.code == 200) {
                        this.form = data.result.pmsMaterialType
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
                    this.title="新增类别";
                    this.ifDisabled = false;
                    break;
                case 'edit':
                    this.title="修改类别";
                    this.ifDisabled = false;
                    this.showInfo();
                    break;
            }
        },
        computed: mapState({user: state => state.user}),
    }
</script>