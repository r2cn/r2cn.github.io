<style lang="less" scoped>
    .paddingLeft {
        padding-left: 10px;
        padding-top: 6px;
    }

    .linkRoleName {
        line-height: 36px;
        text-align: center;
        display: block;
        width: 100%;
    }
    .btncon_right{
        padding-top: 80px;
        float: right;
    }
</style>
<template>
    <el-dialog v-model="dialogVisible" :title="title" @close="close" size="large">
        <el-form ref="form" label-width="100px" :model="form" :rules="rules">
            <el-col :span="12">
                <el-form-item label="岗位名称：" required prop="roleName">
                    <el-input v-model.trim="form.roleName" placeholder="请输入岗位名称" :disabled="ifDisabled" :maxlength="12"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="岗位说明：">
                    <el-input v-model.trim="form.roleDesc" placeholder="请输入岗位说明" :disabled="ifDisabled"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="岗位职能：">
                    <el-checkbox v-model="roleNo" label="采购员" name="type" :disabled="ifDisabled"></el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="分配权限：" prop="type">
                    <!--<el-checkbox-group>
                        <el-checkbox label="全部选中" name="type"></el-checkbox>
                    </el-checkbox-group>-->
                        <el-checkbox
                                v-for="el in pmsModuleList"
                                :label="el.moduleName"
                                v-model="el.checkedFlag"
                                name="type"
                                :disabled="ifDisabled"
                        ></el-checkbox>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item class="btncon_right">
                    <el-button @click="close">取消</el-button>
                    <el-button v-if="title == '查看岗位'" type="primary" @click="goEdit">修改</el-button>
                    <el-button v-if="title == '修改岗位'" type="primary" @click="onSubmit(false,true)">保存</el-button>
                    <el-button v-if="title == '新增岗位'" type="primary" @click="onSubmit(true)">保存并新增</el-button>
                    <el-button v-if="title == '新增岗位'" type="primary" @click="onSubmit(false)">完成</el-button>
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
                name: "",
                title: "",
                ifDisabled: false,
                pmsModuleList:[],
                pmsRoleList: [],
                allChoose:false,
                roleNo:false,
                form: {
                    "orgId":"",
                    "roleDesc": "",
                    "roleId": "",
                    "roleName": "",
                    "roleNo": "",
                    "pmsModuleCodeStr":""
                },
                rules: {//验证规则
                    roleName: [
                        {required: true, message: '请输入岗位名称', trigger: 'blur'}
                    ]
                }
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
                        this.title = '新增岗位';
                        break;
                    case 'info':
                        this.title = '查看岗位';
                        break;
                    case 'edit':
                        this.title = '修改岗位';
                        break;
                    default:
                        this.title = ''
                }
            },
            pmsModuleList:{
                handler(e){
                    var array=[];
                    for(let i=0;i<e.length;i++){
                        if(e[i].checkedFlag){
                            array.push(e[i].pmsModuleCode)
                        }else{}
                    }
                    this.form.pmsModuleCodeStr = array.toString();
                },
                deep:true
            }
        },
        methods: {
            close () {
                this.$router.push('/settings/handleRole/index')
            },
            goEdit(){
                this.name = 'edit';
                this.ifDisabled = false;
                this.$router.push({
                    path: '/settings/handleRole/add/index',
                    query: {
                        name: 'edit',
                        roleId: this.$route.query.roleId
                    }
                })
            },
            onSubmit(ifContinue, materialId) {
                this.$refs.form.validate((valid) => {
                  if(valid){
                      if(this.roleNo){
                          this.form.roleNo = "PMS_R004"
                      }
                      if (materialId) {
                          /*修改岗位*/
                          this.form.roleId = this.$route.query.roleId;
                          utils.postJSON(urls.roleEdit, this.form, this).then(function (data) {
                              if (data.code == 200) {
                                  this.$message({
                                      message: '修改操作成功',
                                      type: 'success'
                                  });
                                  this.$router.push('/settings/handleRole/index');
                              }
                          });
                      } else {
                          /*新增岗位*/
                          utils.postJSON(urls.roleAdd, this.form, this).then(function (data) {
                              if (data.code == 200) {
                                  this.$message({
                                      message: '添加操作成功',
                                      type: 'success'
                                  });
                                  if (ifContinue) {
                                      this.form.orgId = "";
                                      this.form.roleId = "";
                                      this.form.roleName = "";
                                      this.form.roleNo = "";
                                      this.form.pmsModuleCodeStr = "";
                                  } else {
                                      this.$router.push('/settings/handleRole/index');
                                  }
                              }
                          });
                      }
                  }
                })

            },
            showInfo(){
                let requestData = {"roleId": this.$route.query.roleId};
                utils.postJSON(urls.roleEditView, requestData, this).then(function (data) {
                    if (data.code == 200) {
                        var role = data.result.pmsRole;
                        var pmsModuleList = data.result.pmsModuleList;
                        for(let i=0;i<pmsModuleList.length;i++){
                            if(pmsModuleList[i].checkedFlag == 0){
                                pmsModuleList[i].checkedFlag = false;
                            }
                            if(pmsModuleList[i].checkedFlag == 1){
                                pmsModuleList[i].checkedFlag = true;
                            }
                        }
                        if(data.result.pmsRole.roleNo == "PMS_R004"){
                            this.roleNo = true;
                        }
                        this.pmsModuleList = pmsModuleList;
                        this.form.orgId = role.orgId;
                        this.form.roleDesc = role.roleDesc;
                        this.form.roleId = role.roleId;
                        this.form.roleName = role.roleName;
                        this.form.pmsModuleCodeStr = "";
                    }
                });
            },
            initData(){
                utils.postJSON(urls.roleAddView, null, this).then(function (data) {
                    if (data.code == 200) {
                        this.pmsModuleList = data.result.pmsModuleList;
                    }
                });
            }
        },
        created(){
            this.name = this.$route.query.name;
            switch (this.$route.query.name) {
                case 'add':
                    this.title = "新增岗位";
                    this.ifDisabled = false;
                    this.initData();
                    break;
                case 'info':
                    this.title = "查看岗位";
                    this.ifDisabled = true;
                    this.showInfo();
                    break;
                case 'edit':
                    this.title = "修改岗位";
                    this.ifDisabled = false;
                    this.showInfo();
                    break;
            }
        },
        computed: mapState({user: state => state.user}),
    }
</script>