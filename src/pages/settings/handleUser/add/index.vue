<style lang="less" scoped>
    .paddingLeft {
        padding-left: 10px;
        padding-top: 6px;
    }

    .linkUserName {
        line-height: 36px;
        text-align: center;
    }
    .item-inline{
        display: inline-block;
    }
    .middle{
        width: 70px;
        display: inline-block;
    }
    .small{
        width: 70px;
        display: inline-block;
    }
    .btncon_right{
        padding-top: 80px;
        float: right;
    }
</style>
<template>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="large">
        <el-form ref="form" :model="form" :rules="rules">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="登录账号：" required label-width="100px" prop="userName">
                        <el-input v-model.trim="form.userName" placeholder="请输入登录账号" :disabled="ifDisabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="员工账号：" required label-width="100px" class="item-inline">
                        <el-input class="middle" :value="this.user.orgNo" :disabled=true></el-input>
                        <span class="linkUserName">--</span>
                    </el-form-item>
                    <el-form-item prop="userNo"  class="item-inline">
                        <el-input class="small" v-model.trim="form.userNo"  :disabled="ifDisabled" :maxlength="3"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-col :span="12" v-if="ifPassword" >
                <el-form-item label="输入密码：" required label-width="100px" prop="userPassword">
                    <el-input v-model.trim="form.userPassword" placeholder="请输入密码" :disabled="ifDisabled"
                              type="password"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12" v-if="ifPassword">
                <el-form-item label="确认密码：" required label-width="100px" prop="userRePassword">
                    <el-input v-model.trim="form.userRePassword" placeholder="请再次输入密码" :disabled="ifDisabled"
                              type="password"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="真实姓名：" required label-width="100px" prop="userRealname">
                    <el-input v-model.trim="form.userRealname" placeholder="请输入真实姓名" :disabled="ifDisabled"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="手机号码：" required label-width="100px" prop="userPhone">
                    <el-input v-model.trim="form.userPhone" placeholder="请输入手机号码" :disabled="ifDisabled"
                              :maxlength=11></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="员工岗位：" required label-width="100px" prop="roleId">
                    <el-select placeholder="--请选择--" v-model="form.roleId" :disabled="ifDisabled">
                        <el-option v-for="el in pmsRoleList" :label="el.roleName" :value="el.roleId"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '查看员工'" type="primary" @click="goEdit">修改</el-button>
                    <el-button v-if="title == '修改员工'" type="primary" @click="onSubmit(false,true)">保存</el-button>
                    <el-button v-if="title == '新增员工'" type="primary" @click="onSubmit(true)">保存并新增</el-button>
                    <el-button v-if="title == '新增员工'" type="primary" @click="onSubmit(false)">完成</el-button>
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
            //验证用户输入值 将来考虑实现一个check.js库 如何复用?
            let checkNumber = (rule, value, callback) => {
                if (value ==='') {
                    return callback(new Error('不能为空'));
                }
                if (isNaN(value)) {
                    callback(new Error('请输入数字'));
                } else {
                    if(parseFloat(value) < 0){
                        callback(new Error('不能小于0'));
                    }else if(value.length !==3){
                        callback(new Error('请输入001-999的数字'));
                    }else{
                        callback();
                    }
                }
            };
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
            let checkRePwd = (rule, value, callback) => {
                if (value ==='') {
                    return callback(new Error('确认密码不能为空'));
                }
                if (this.form.userPassword !=value) {
                    callback(new Error('确认密码与密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                dialogVisible: true,
                name: "",
                title: "",
                ifDisabled: false,
                ifPassword: true,
                pmsRoleList: [],
                form: {
                    roleId: "",
                    userName: "",
                    userNo: "",
                    userPassword: "",
                    userRePassword: "",
                    userPhone: "",
                    userRealname: ""
                },
                rules: {//验证规则
                    userName: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    userNo: [
                        { validator: checkNumber, trigger: 'blur' }
                    ],
                    userPassword: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    userRePassword: [
                        { validator: checkRePwd, trigger: 'blur' }
                    ],
                    userPhone: [
                        { validator: checkMobile, trigger: 'blur' }
                    ],
                    userRealname: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    roleId: [
                        { required: true, message: '请选择岗位', trigger: 'change,blur' }
                    ]
                },
            }
        },
        watch: {
            /*简拼*/
            "form.materialName"(word){
                let materialShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for (let i = 0; i < result.length; i++) {
                    materialShortName += result[i]
                }
                this.form.materialShortName = materialShortName;
            },
            name(e){
                switch (e) {
                    case 'add':
                        this.title = '新增员工';
                        break;
                    case 'info':
                        this.title = '查看员工';
                        break;
                    case 'edit':
                        this.title = '修改员工';
                        break;
                    default:
                        this.title = ''
                }
            }
        },
        methods: {
            close () {
                this.$router.push('/settings/handleUser/index')
            },
            goEdit(){
                this.name = 'edit';
                this.ifDisabled = false;
                this.$router.push({
                    path: '/settings/handleUser/add/index',
                    query: {
                        name: 'edit',
                        userId: this.$route.query.userId
                    }
                })
            },
            onSubmit(ifContinue, materialId) {
                this.$refs.form.validate((valid) => {
                        if(valid){
                            if (materialId) {
                                /*修改员工*/
                                this.form.userId = this.$route.query.userId;
                                utils.postJSON(urls.userEdit, this.form, this).then(function (data) {
                                    if (data.code == 200) {
                                        this.$message({
                                            message: '修改操作成功',
                                            type: 'success'
                                        });
                                        this.$router.push('/settings/handleUser/index');
                                    }
                                });
                            } else {
                                /*新增员工*/
                                utils.postJSON(urls.userAdd, this.form, this).then(function (data) {
                                    if (data.code == 200) {
                                        this.$message({
                                            message: '添加操作成功',
                                            type: 'success'
                                        });
                                        if (ifContinue) {
                                            this.form.roleId = "";
                                            this.form.userName = "";
                                            this.form.userNo = "";
                                            this.form.userPassword = "";
                                            this.form.userRePassword = "";
                                            this.form.userPhone = "";
                                            this.form.userRealname = "";
                                        } else {
                                            this.$router.push('/settings/handleUser/index');
                                        }
                                    }
                                });
                            }
                        }
                })

            },
            showInfo(){
                let requestData = {"userId": this.$route.query.userId};
                utils.postJSON(urls.userEditView, requestData, this).then(function (data) {
                    if (data.code == 200) {
                        var user = data.result.user;
                        this.form.roleId = user.roleId;
                        this.form.userName = user.userName;
                        this.form.userNo = user.userNo.toString().replace(this.user.orgNo,'');
                        this.form.userPhone = user.userPhone;
                        this.form.userRealname = user.userRealname;
                        this.form.userPassword = '';
                    }
                });
            }
        },
        created(){
            this.name = this.$route.query.name;
            switch (this.$route.query.name) {
                case 'add':
                    this.title = "新增员工";
                    this.ifDisabled = false;
                    this.ifPassword = true;
                    break;
                case 'info':
                    this.title = "查看员工";
                    this.ifDisabled = true;
                    this.ifPassword = false;
                    this.showInfo();
                    break;
                case 'edit':
                    this.title = "修改员工";
                    this.ifDisabled = false;
                    this.ifPassword = false;
                    this.showInfo();
                    break;
            }
            utils.postJSON(urls.userAddView, null, this).then(function (data) {
                if (data.code == 200) {
                    this.pmsRoleList = data.result.pmsRoleList
                }
            });
        },
        computed: mapState({user: state => state.user}),
    }
</script>