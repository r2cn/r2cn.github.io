<style lang="less" scoped>
    .po-dialog {

    .el-upload {
        margin: 0 auto;
    }

    .el-alert {
        width: 360px;
        margin: 0 auto;
        margin-top: 10px;
    }

    }
</style>
<template>
    <el-dialog title="导入物料" v-model="dialogVisible" size="small" class="po-dialog" @close="close">
        <el-upload
                action="/pms/import/material/template.do"
                type="drag"
                :multiple="false"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :on-error="handleError">
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text">将Excel文件拖到此处，或<em>点击上传</em><p>每次导入最多200条</p></div>
            <div class="el-upload__tip" slot="tip">
                <div class="upload-tips" v-if="showTemplateLoading"><i class="el-icon-loading"></i>正在生成导入模板...</div>
                <div class="upload-tips" v-if="!showTemplateLoading">仅支持Excel格式，首次使用请先<a :href="templateUrl">下载模板</a>
                </div>
            </div>
        </el-upload>
        <el-alert
                v-if="uploadDescShow"
                title="导入完成"
                type="success"
                :description="uploadDesc"
                show-icon>
        </el-alert>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancelUpload">取 消</el-button>
            <el-button type="primary" @click="handleConfirmUpload">确认导入</el-button>
        </div>
    </el-dialog>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                importedData:[],//导入内容
                dialogVisible: '',
                showTemplateLoading: true,
                templateUrl: '',
                uploadDescShow: false,
                uploadDesc: ''
            }
        },
        methods: {
            close(){
                this.$router.push('/settings/handleMateriel/index')
            },
            /*导入相关*/
            handleRemove(file, fileList){
                //importedData.clear()
                this.importedData =[];
            },
            handleSuccess(response, file, fileList){
                if (response.code == 200) {
                    //here array concat/append to importedData
                    utils.postJSON('/pms/import/material/template/query.do',{uploadId:response.result},this).then(function (data) {
                        this.uploadDescShow = true;
                        this.uploadDesc = `本次导入物料${data.result.pmsUpload.totalNum}个，其中成功${data.result.pmsUpload.successNum}个，失败${data.result.pmsUpload.errorNum}个`;
                    });
                } else {
                    this.$message({
                        message: response.message,
                        type: 'warning'
                    });
                }

            },
            handleError(err, response, file){
                this.$message({
                    message: err,
                    type: 'warning'
                });
                console.log(err);
            },
            handleCancelUpload(){
                this.dialogVisible = false;
                this.uploadDescShow = false;
                //remove all importedData
                this.importedData = [];
            },
            handleConfirmUpload(){
                this.dialogVisible = false;
                this.uploadDescShow = false;
                //concat all importedData to tableData
            },
            loadTemplate(){//加载导入模板地址
                this.$http({
                    url:'/pms/download/material/template/export.do',
                    method:'POST'
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.showTemplateLoading=false;
                        this.templateUrl=data.result;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            },
        },
        created(){
            this.loadTemplate();
        },
        computed: mapState({user: state => state.user}),
    }
</script>