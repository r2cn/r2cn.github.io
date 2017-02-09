<style lang="less" scoped>
    .paddingLeft {
        padding-left: 10px;
        padding-top: 6px;
    }
    .btncon_right{
        padding-top: 200px;
        float: right;
    }
    .w100{
        width:100%;
    }
</style>
<template>
<div>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="large">
        <el-form ref="form" label-width="110px" :model="form" :rules="rules">
            <el-col :span="12">
                <el-form-item label="物料名称：" required prop="materialName">
                    <el-input v-model.trim="form.materialName" placeholder="请输入物料名称" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="物料简拼：" required prop="materialShortName">
                    <el-input v-model.trim="form.materialShortName" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="物料类别：" required prop="materialTypeId">
                    <el-select class="w100" placeholder="物料类别" v-model="form.materialTypeId">
                        <el-option v-for="el in pmsMaterialTypeVos" :label="el.materialTypeName" :value="el.materialTypeId"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="1" class="paddingLeft">
                <el-button  @click="clickShowType" type="primary" icon="edit" size="mini" title="新增物料类别"></el-button>
            </el-col>
            <el-col :span="11">
                <el-form-item label="进货单位：" required prop="materialUnitId">
                    <el-select class="w100" placeholder="进货单位" v-model="form.materialUnitId">
                        <el-option v-for="el in pmsMaterialUnitVos" :label="el.materialUnitName" :value="el.materialUnitId"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="1" class="paddingLeft">
                <el-button @click="clickShowUnit" type="primary" icon="edit" size="mini" title="新增进货单位"></el-button>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '查看物料'" type="primary" @click="goEdit">修改</el-button>
                    <el-button v-if="title == '修改物料'" type="primary" @click="onSubmit(false,true)">保存</el-button>
                    <el-button v-if="title == '新增物料'" type="primary" @click="onSubmit(true)">保存并新增</el-button>
                    <el-button v-if="title == '新增物料'" type="primary" @click="onSubmit(false)">完成</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </el-dialog>
    <transition v-on:leave = "refresh">
        <router-view></router-view>
    </transition>
</div>
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
                pmsMaterialTypeVos:[],
                pmsMaterialUnitVos:[],
                materialTypeAdd:'',
                materialUnitAdd:'',
                form:{
                    materialName:'',
                    materialShortName:'',
                    materialTypeId:'',
                    materialUnitId:''
                },
                rules: {//验证规则
                    materialName: [
                        { required: true, message: '请输入物料名称', trigger: 'blur' }
                    ],
                    materialShortName: [
                        { required: true, message: '请输入物料简拼', trigger: 'blur' }
                    ],
                    materialTypeId: [
                        { required: true, message: '请选择物料类别', trigger: 'change,blur' }
                    ],
                    materialUnitId: [
                        { required: true, message: '请选择物料单位', trigger: 'change,blur' }
                    ]
                }
            }
        },
        watch:{
            /*简拼*/
            "form.materialName"(word){
                let materialShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for(let i=0;i<result.length;i++){
                    materialShortName += result[i]
                }
                this.form.materialShortName = materialShortName;
            },
            name(e){
                switch (e){
                    case 'add':
                        this.title='新增物料';
                        break;
                    case 'info':
                        this.title='查看物料';
                        break;
                    case 'edit':
                        this.title='修改物料';
                        break;
                    default:
                        this.title=''
                }
            }
        },
        methods: {
            clickShowType(){
                this.$router.push({
                    path:'/settings/handleMateriel/type/add/index',
                    query:{
                        name:'add',
                        type:"materiel",
                    }
                })
            },
            clickShowUnit(){
                this.$router.push({
                    path:'/settings/handleMateriel/unit/add/index',
                    query:{
                        name:'add',
                        type:"materiel",
                    }
                })
            },
            close () {
                this.$router.push('/settings/handleMateriel/index')
            },
            goEdit(){
                this.name = 'edit';
                this.ifDisabled = false;
                this.$router.push({
                    path:'/settings/handleMateriel/add/index',
                    query:{
                        name:'edit',
                        supplierId:this.$route.query.supplierId
                    }
                })
            },
            onSubmit(ifContinue,materialId) {
                this.$refs.form.validate((valid) => {
                    if(valid){
                        if(materialId){
                            /*修改物料*/
                            this.form.materialId=this.$route.query.materialId;
                            utils.post(urls.materialEdit,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '修改操作成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/settings/handleMateriel/index');
                                }
                            });
                        }else{
                            /*新增物料*/
                            utils.post(urls.materialAdd,this.form,this).then(function(data){
                                if (data.code == 200) {
                                    this.$message({
                                        message: '添加操作成功',
                                        type: 'success'
                                    });
                                    if(ifContinue){
                                        this.form.materialName ='';
                                        this.form.materialShortName ='';
                                        this.form.materialTypeId ='';
                                        this.form.materialUnitId ='';
                                    }else{
                                        this.$router.push('/settings/handleMateriel/index');
                                    }
                                }
                            });
                        }
                    }
                })

            },
            showInfo(){
                let requestData = {"materialId":this.$route.query.materialId};
                utils.post(urls.materialShow,requestData,this).then(function(data){
                    if (data.code == 200) {
                        this.form = data.result.pmsMaterial
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                });
            },
            refresh(){
                utils.post(urls.materialUnitAndTypeList,null,this).then(function (data) {
                    if (data.code == 200) {
                        this.pmsMaterialTypeVos = data.result.pmsMaterialTypeVos;
                        this.pmsMaterialUnitVos = data.result.pmsMaterialUnitVos;
                        //添加完毕后回到此页面吧新加的类型放进去
                        if(this.$route.query.materialTypeId){
                            this.form.materialTypeId = this.$route.query.materialTypeId;
                        }
                        if(this.$route.query.materialUnitId){
                            this.form.materialUnitId = this.$route.query.materialUnitId;
                        }
                    }
                });
            }
        },
        created(){
            this.name = this.$route.query.name;
            switch(this.$route.query.name){
                case 'add':
                    this.title="新增物料";
                    this.ifDisabled = false;
                    break;
                case 'info':
                    this.title="查看物料";
                    this.ifDisabled = true;
                    this.showInfo();
                    break;
                case 'edit':
                    this.title="修改物料";
                    this.ifDisabled = false;
                    this.showInfo();
                    break;
            }
            this.refresh();
        },
        computed: mapState({user: state => state.user}),
    }
</script>