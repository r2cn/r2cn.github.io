<style lang="less" scoped>
    .checkType {
        display: block;
        height: 45px;
    }

    .checkType .el-col.paddingLeft {
        padding-left: 10px;
    }
    .btncon_right{
        padding-top: 10px;
        float: right;
    }
</style>
<template>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="large" top="8%">
        <el-form :rules="rules" ref="form" label-width="110px" :model="form" >
            <el-col :span="12">
                <el-form-item prop="supplierName" label="供应商名称：" required>
                    <el-input v-model.trim="form.supplierName" placeholder="请输入供应商名称" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="简拼：" required prop="supplierShortName">
                    <el-input v-model.trim="form.supplierShortName" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="supplierContact" label="联系人：" required >
                    <el-input v-model.trim="form.supplierContact" placeholder="请输入联系人姓名" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item prop="supplierMobile" label="联系电话：" required>
                    <el-input v-model.trim="form.supplierMobile" placeholder="请输入联系方式" :disabled="ifDisabled" :maxlength="16"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item prop="supplierAddress" label="供应商地址：">
                    <el-input v-model.trim="form.supplierAddress" placeholder="请输入供应商地址（选填）" :disabled="ifDisabled"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="结算方式：">
                    <div class="checkType" v-for="(el,index) in form.pmsSettlementTypeVos">
                        <el-col :span="1">
                            <el-checkbox v-model="el.settlementStatus" name="type" :disabled="ifDisabled"></el-checkbox>
                        </el-col>
                        <el-col :span="6">
                            <el-input :disabled="index>3?false:true" v-model="el.settlementName"></el-input>
                        </el-col>
                        <el-col :span="5" class="paddingLeft">
                            <el-input placeholder="户名" v-model="el.settlementAccountName" :disabled="ifDisabled"></el-input>
                        </el-col>
                        <el-col :span="7" class="paddingLeft">
                            <el-input placeholder="账号信息（选填）" v-model="el.settlementAccountNumber" :disabled="ifDisabled"></el-input>
                        </el-col>
                        <el-col :span="2" class="paddingLeft" v-if="index>3?true:false">
                            <el-button type="primary" @click="deleteCheckType(el.settlementOrder)" icon="delete" size="mini" :disabled="ifDisabled"></el-button>
                        </el-col>
                    </div>
                    <el-button type="primary" size="mini" @click="addCheckType" :disabled="ifDisabled">继续添加</el-button>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item prop="supplierUseStatus" label="是否启用：">
                    <el-switch on-text="" off-text="" v-model="form.supplierUseStatus" :disabled="ifDisabled"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item prop="supplierRemark" label="备注：">
                    <el-input type="textarea" v-model="form.supplierRemark" placeholder="（选填）" :disabled="ifDisabled"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '查看供应商'" type="primary" @click="goEdit">修改</el-button>
                    <el-button v-if="title == '修改供应商'" type="primary" @click="onSubmit(false,true)">保存</el-button>
                    <el-button v-if="title == '新增供应商'" type="primary" @click="onSubmit(true)">保存并新增</el-button>
                    <el-button v-if="title == '新增供应商'" type="primary" @click="onSubmit(false)">完成</el-button>
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
            let checkMobile = (rule, value, callback) => {
                let mobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if (value ==='') {
                    return callback(new Error('手机号不能为空'));
                }
                if (!mobile.test(value)) {
                    callback(new Error('请输入正确的手机号'));
                } else {
                    callback();
                }
            };
            return {
                dialogVisible: true,
                name:"",
                title:"",
                ifDisabled:false,
                form:{
                    "pmsSettlementTypeVos":[],
                    "supplierAddress": "",
                    "supplierContact": "",
                    "supplierMobile": "",
                    "supplierName": "",
                    "supplierRemark": "",
                    "supplierShortName": "",
                    "supplierUseStatus":true,
                },
                rules: {//验证规则
                    supplierName: [
                        { required: true, message: '请输入供应商名称', trigger: 'blur' }
                    ],
                    supplierShortName: [
                        { required: true, message: '请输入供应商简拼', trigger: 'blur' }
                    ],
                    supplierMobile: [
                        { validator:checkMobile, trigger: 'blur' }
                    ],
                    supplierContact: [
                        { required: true, message: '请输入联系人', trigger: 'blur' }
                    ]
                }
            }
        },
        watch:{
            /*简拼*/
            "form.supplierName"(word){
                let supplierShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for(let i=0;i<result.length;i++){
                    supplierShortName += result[i]
                }
                this.form.supplierShortName = supplierShortName;
            },
            name(e){
                switch (e){
                    case 'add':
                        this.title='新增供应商';
                        break;
                    case 'info':
                        this.title='查看供应商';
                        break;
                    case 'edit':
                        this.title='修改供应商';
                        break;
                    default:
                        this.title=''
                }
            }
        },
        methods: {
            close () {
                this.$router.push('/settings/handlePurchase/index')
            },
            goEdit(){
                this.name = 'edit';
                this.ifDisabled = false;
                this.$router.push({
                    path:'/settings/handlePurchase/add/index',
                    query:{
                        name:'edit',
                        supplierId:this.$route.query.supplierId
                    }
                })
            },
            addCheckType(){
                var len = this.form.pmsSettlementTypeVos.length+1;
                this.form.pmsSettlementTypeVos.push({
                    settlementAccountName: "",
                    settlementAccountNumber:"",
                    settlementName:"",
                    settlementStatus:1,
                    settlementOrder:len
                })
            },
            deleteCheckType(settlementOrder){
                var arr = this.form.pmsSettlementTypeVos;
                for(let i=0;i<arr.length;i++){
                    if(arr[i].settlementOrder == settlementOrder){
                        arr.splice(i, 1);
                        break;
                    }
                }
            },
            onSubmit(ifContinue,supplierId) {
                this.$refs.form.validate((valid) => {
                    if(valid){
                        var form = {
                            "pmsSettlementTypeVos":this.form.pmsSettlementTypeVos,
                            "supplierAddress": this.form.supplierAddress,
                            "supplierContact": this.form.supplierContact,
                            "supplierMobile": this.form.supplierMobile,
                            "supplierName": this.form.supplierName,
                            "supplierRemark": this.form.supplierRemark,
                            "supplierShortName": this.form.supplierShortName,
                            "supplierUseStatus":this.form.supplierUseStatus?1:0
                        };
                        for(let i=0;i<form.pmsSettlementTypeVos.length;i++){
                            if(form.pmsSettlementTypeVos[i].settlementStatus === true){
                                form.pmsSettlementTypeVos[i].settlementStatus = 1
                            }
                            if(form.pmsSettlementTypeVos[i].settlementStatus === false){
                                form.pmsSettlementTypeVos[i].settlementStatus = 0
                            }
                        }
                        if(supplierId){
                            /*修改供应商*/
                            form.supplierId=this.$route.query.supplierId;
                            utils.post(urls.supplierEdit,form,this).then(function (data) {
                                if (data.code == 200) {
                                    this.$message({
                                        message: '修改操作成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/settings/handlePurchase/index');
                                }
                            });
                        }else{
                            /*新增供应商*/
                            utils.post(urls.supplierAdd,form,this).then(function (data) {
                                if (data.code == 200) {
                                    this.$message({
                                        message: '添加操作成功',
                                        type: 'success'
                                    });
                                    if(ifContinue){
                                        this.form.supplierAddress="";
                                        this.form.supplierContact="";
                                        this.form.supplierMobile="";
                                        this.form.supplierName="";
                                        this.form.supplierRemark="";
                                        this.form.supplierShortName="";
                                        this.form.supplierUseStatus=true
                                    }else{
                                        this.$router.push('/settings/handlePurchase/index');
                                    }
                                }
                            });
                        }
                    }
                })

            },
            showInfo(){
                let requestData = {"supplierId":this.$route.query.supplierId};
                utils.post(urls.supplierShow,requestData,this).then(function (data) {
                    if (data.code == 200) {
                        var form = data.result.pmsSupplierDetailVo;
                        for(let i=0;i<form.pmsSettlementTypeVos.length;i++){
                            form.pmsSettlementTypeVos[i].settlementStatus = !!form.pmsSettlementTypeVos[i].settlementStatus
                        }
                        this.form = form;
                        this.form.supplierUseStatus = !!this.form.supplierUseStatus
                    }
                });
            },
            initData(){
                utils.post(urls.materialSettleTypeList,null,this).then(function (data) {
                    if (data.code == 200) {
                        this.form.pmsSettlementTypeVos = data.result.pmsSettlementTypeVos
                    }
                });
            }
        },
        created(){
            this.name = this.$route.query.name;
            switch(this.$route.query.name){
                case 'add':
                    this.title="新增供应商";
                    this.ifDisabled = false;
                    this.initData()
                    break;
                case 'info':
                    this.title="查看供应商";
                    this.ifDisabled = true;
                    this.showInfo();
                    break;
                case 'edit':
                    this.title="修改供应商";
                    this.ifDisabled = false;
                    this.showInfo();
                    break;
            }
        },
        computed: mapState({user: state => state.user}),
    }
</script>