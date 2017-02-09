<style lang="less" scoped>
	.el-table .el-input-con{
		padding: 8px 0;
		.small-input{
			width: 180px;
		}
		.el-input-number{
			width: 120px;
			display: block;
		}
		.el-form-item{
			margin: 10px 0;
		}
	}
	.remark-con{
		padding: 20px 0;
		padding-bottom:80px;
	}
	.submit-con{
		border-top: 1px solid #e5e5e5;
		padding: 20px 10px;
		color: #475669;
		position: fixed;
		left: 110px;
		bottom: 0;
		right: 0;
		/* width: 100%; */
		background-color: #fff;
		z-index: 888;
		color: #475669;
		.orange{
			color: #ff6600;
		}
		.left,.middle{
			line-height: 36px;
			height: 36px;
		}
		.middle{
			text-align: center;
		}
	    .right{
			.tooltips{
				padding-left: 6px;
				padding-right: 20px;
			}
		    text-align: right;
	    }
	}
	.po-dialog{
		.el-upload{
			margin: 0 auto;
		}
	    .el-alert{
		    width: 360px;
		    margin: 0 auto;
			margin-top: 10px;
	    }
	}
	.upload-tips{
		i.el-icon-loading{
			font-size: 14px;
		}
	    a{
		    color: #20a0ff;
	    }
	}
</style>
<style lang="less">
	.el-table_add__purchase .el-table__empty-block{
		display: none;
	}
	.ma-dialog{
		.dialog-body{
			.el-table .el-table__body-wrapper{
				overflow-x: hidden;
			}
		}
		.dialog-form{
			float:right;
			.el-select{
				width: 110px;
			}
		}
		.dialog-footer{
			.left{
				float: left;
			}
		}
		.btncon_right{
			padding-top: 100px;
			float: right;
		}
		.paddingLeft {
			padding-left: 10px;
			padding-top: 6px;
		}
	}
</style>
<template>
	<div>
		<common-layout :crumbs=crumbs>
			<div class="content" slot="content">
				<div class="table-content">
					<div class="button-bar">
						<el-button type="primary" @click="dialogVisible = true">导入</el-button>
						<el-button type="primary" icon="plus" @click="openDialogMaterials">添加物料</el-button>
					</div>
					<el-table :data="tableData"  border style="width:100%" class="el-table_add__purchase" empty-text="请选择物料">
						<el-table-column type="index" label="序" width="65"></el-table-column>
						<el-table-column inline-template :context="_self" label="物料名称" min-width="150">
							<div class="el-input-con">
								{{row.materialName}}
								<!--<el-form :model="row"  :ref="'row'+ $index" :rules="rules">
									<el-form-item prop="materialId">
										<el-select v-model="row.materialId" clearable filterable placeholder="物料名称" @change="handleChangeMaterial(row)">
											<el-option
													v-for="item in materials"
													:label="item.materialName"
													:value="item.materialId">
											</el-option>
										</el-select>
									</el-form-item>
								</el-form>-->
							</div>
						</el-table-column>
						<el-table-column prop="materialTypeName" label="物料类别" min-width="130"></el-table-column>
						<el-table-column inline-template :context="_self" label="采购数量" min-width="200">
							<div class="el-input-con">
								<el-form :model="row"  :ref="'row'+ $index+'a'" :rules="rules">
									<el-form-item prop="purchaseCount">
										<el-input-number v-model="row.purchaseCount" placeholder="采购数量" :min="0" :max="9999"></el-input-number>
									</el-form-item>
								</el-form>
							</div>
						</el-table-column>
						<el-table-column prop="materialUnitName" label="进货单位" min-width="120"></el-table-column>
						<el-table-column inline-template :context="_self" label="操作" min-width="100">
						<span>
							<el-button type="primary" size="small" @click="removeItem(row)">删除</el-button>
						</span>
						</el-table-column>
					</el-table>
					<el-table :data="newTableData" height="240" border :show-header="false" style="width:100%;border-top: none">
						<el-table-column inline-template :context="_self" label="序" width="65">
							<span>{{tableData.length+1}}</span>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="物料名称" min-width="150">
							<div class="el-input-con">
								<el-form :model="row"  >
									<el-form-item prop="materialId">
										<el-select v-model="row.materialId" clearable filterable placeholder="物料名称" @change="handleChangeMaterial(row)">
											<el-option
													v-for="item in materials"
													:label="item.materialName"
													:value="item.materialId">
											</el-option>
										</el-select>
									</el-form-item>
								</el-form>
							</div>
						</el-table-column>
						<el-table-column prop="materialTypeName" label="物料类别" min-width="130"></el-table-column>
						<el-table-column inline-template :context="_self" label="采购数量" min-width="200">
							<div class="el-input-con">
								<el-input class="small-input" v-model="row.purchaseCount" placeholder="采购数量" :minlength="1" :maxlength="6" @blur="handleBlur(row)"  @click="handleBlur(row)"></el-input>
							</div>
						</el-table-column>
						<el-table-column prop="materialUnitName" label="进货单位" min-width="120"></el-table-column>
						<el-table-column inline-template :context="_self"  label="操作" min-width="100">
							<span>
								<!--<el-button v-if="showAdd" type="primary" size="small">添加</el-button>-->
							</span>
						</el-table-column>
					</el-table>
					<div class="remark-con">
						<el-input
								type="textarea"
								:autosize="{ minRows: 3, maxRows: 5}"
								placeholder="填写备注（选填，最多150字）"
								v-model.trim="remark" maxlength="150">
						</el-input>
					</div>
					<div class="submit-con">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="8">
								<div class="grid-content left">
									数量：<span class="orange">{{tableData.length}}</span>项
								</div>
							</el-col>
							<el-col :span="16">
								<div class="grid-content right">
									<el-checkbox v-model="isInternal" v-show="false">由内部配送</el-checkbox>
									<!--<el-tooltip class="tooltips" effect="dark" placement="top">
										<div slot="content">“由内部配送”主要服务于连锁餐厅或配送管理而用；<br/>勾选此项，便于发货部门接收订单</div>
										<i class="el-icon-warning"></i>
									</el-tooltip>-->
									<el-button @click="handleBackToList">取消</el-button>
									<el-button type="orange" @click="handleSubmitPO" :loading="user.lock">完成开单</el-button>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</div>
		</common-layout>
		<el-dialog title="请选择物料" v-model="dialogMaterials" size="large" class="ma-dialog" @close="handleMaterialsClose()">
			<div class="dialog-body" v-show="dialogMaterialsFlag">
				<el-form :inline="true" :model="dialogForm" class="dialog-form">
					<el-form-item>
						<el-select v-model="dialogForm.materialType" clearable placeholder="物料类别" @change="handleSearchMaterial">
							<el-option v-for="item in pmsMaterialTypeVos" :label="item.materialTypeName" :value="item.materialTypeId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-input v-model="dialogForm.materialName" placeholder="请输入物料名称/简拼" @change="handleSearchMaterial"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleSearchMaterial">查询</el-button>
					</el-form-item>
				</el-form>
				<el-table :data="materialsArr" ref="materials"  height="200" border style="width:100%" @selection-change="handleCheckAll">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column type="index" label="序" width="65"></el-table-column>
					<el-table-column prop="materialName"  label="物料名称" min-width="100"></el-table-column>
					<el-table-column prop="materialShortName"  label="物料简拼" min-width="100"></el-table-column>
					<el-table-column prop="materialTypeName" label="物料类别" min-width="100"></el-table-column>
					<el-table-column prop="materialUnitName" label="进货单位" min-width="100"></el-table-column>
				</el-table>
			</div>
			<div slot="footer" class="dialog-footer" v-show="dialogMaterialsFlag">
				<el-button @click="handleGoAddMaterials" class="left">新增物料</el-button>
				<el-button @click="handleCancelDialogMaterials">取消</el-button>
				<el-button type="orange" @click="handleConfirmDialogMaterials">选入</el-button>
			</div>
			<el-form ref="formAddMaterial" label-width="120px" v-show="!dialogMaterialsFlag">
				<el-col :span="12">
					<el-form-item label="物料名称" required>
						<el-input v-model="formAddMaterial.materialName" placeholder="请输入物料名称" ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="物料简拼" required>
						<el-input v-model="formAddMaterial.materialShortName" ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="11">
					<el-form-item label="物料类别" required>
						<el-select v-if="!ifShowType" placeholder="物料类别" v-model="formAddMaterial.materialTypeId">
							<el-option v-for="el in pmsMaterialTypeVos" :label="el.materialTypeName" :value="el.materialTypeId"></el-option>
						</el-select>
						<el-input v-if="ifShowType" v-model="materialTypeAdd" placeholder="请添加物料类别" ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="1" class="paddingLeft">
					<el-button v-if="!ifShowType" @click="clickShowType" type="primary" icon="edit" size="mini"></el-button>
					<el-button v-if="ifShowType" @click="addMaterialType" type="primary" icon="plus" size="mini"></el-button>
				</el-col>
				<el-col :span="11">
					<el-form-item label="进货单位" required>
						<el-select v-if="!ifShowUnit" placeholder="进货单位" v-model="formAddMaterial.materialUnitId">
							<el-option v-for="el in pmsMaterialUnitVos" :label="el.materialUnitName" :value="el.materialUnitId"></el-option>
						</el-select>
						<el-input v-if="ifShowUnit" v-model="materialUnitAdd" placeholder="请添加进货单位" ></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="1" class="paddingLeft">
					<el-button v-if="!ifShowUnit" @click="clickShowUnit" type="primary" icon="edit" size="mini"></el-button>
					<el-button v-if="ifShowUnit" @click="addMaterialUnit" type="primary" icon="plus" size="mini"></el-button>
				</el-col>
				<el-col :span="24">
					<el-form-item class="btncon_right">
						<el-button @click="close">返回</el-button>
						<el-button type="orange" @click="onSubmit(false)">保存</el-button>
						<el-button type="orange" @click="onSubmit(true)">保存并新增</el-button>
					</el-form-item>
				</el-col>
			</el-form>
		</el-dialog>
		<el-dialog title="导入采购单" v-model="dialogVisible" size="small" class="po-dialog">
			<el-upload
					action="/pms/import/purchase/template.do"
					type="drag"
					:multiple="false"
					:on-remove="handleRemove"
					:on-success="handleSuccess"
					:on-error="handleError">
				<i class="el-icon-upload"></i>
				<div class="el-dragger__text">将Excel文件拖到此处，或<em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">
					<div class="upload-tips" v-if="showTemplateLoading"><i class="el-icon-loading"></i>正在生成导入模板...</div>
					<div class="upload-tips" v-if="!showTemplateLoading">仅支持Excel格式，首次使用请先<a :href="templateUrl">下载模板</a></div>
				</div>
			</el-upload>
			<el-alert
					v-if="uploadDescShow"
					title="导入完成"
					:type="uploadStatus"
					:render-content="renderUploadDesc"
					show-icon :closable="false">
			</el-alert>
			<div slot="footer" class="dialog-footer">
				<el-button @click="handleCancelUpload">取 消</el-button>
				<el-button type="orange" @click="handleConfirmUpload">确认导入</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
    import { mapState } from 'vuex';
    import pinyin from 'pinyin';
    export default {
		data() {
			var crumbs = [
			  {path:'/',name: '首页'},
			  {path:'/purchase',name: '开采购单'},
			  {path:'/purchase/create',name: '开单'},
			];
			var tableData =[];
			var newTableData=[
                {
                    materialId:'',
                    materialName:'',
                    materialUnitName: '--',
                    purchaseCount: '',
                    materialTypeName: '--'
                }
			];
			var materials = [];
			var remark = '';
			var isInternal = false;
			var dialogVisible = false;
			var purchaseId='';
			var showTemplateLoading=true;//正在加载导入模板
			var templateUrl='';//导入模板地址
			var importedData=[];//导入内容
            var dialogMaterials = false;//选择物料弹窗
            //验证用户输入值 将来考虑实现一个check.js库 如何复用?
            var checkNumber = (rule, value, callback) => {
                if (value ==='') {
                    return callback(new Error('该值不能为空'));
                }
                if (isNaN(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if(parseFloat(value) <= 0){
                        callback(new Error('采购数量必须大于0'));
                    }else{
                        callback();
                    }
                }
            };
			return {
				crumbs,
				tableData,
                newTableData,
                materials,
                remark,
                isInternal,
                dialogVisible,
                dialogMaterials,
                purchaseId,
                showTemplateLoading,
                templateUrl,
                importedData,
                uploadDescShow:false,
                uploadStatus:'success',
                uploadDesc:'',
                checkedMaterials:[],//选择物料弹窗
                materialsArr:[],
                dialogForm:{
                    materialType:"",
                    materialName:""
                },
                pmsMaterialTypeVos:[],//物料类别列表
                rules: {//验证规则
                    materialId: [
                        { required:true,message:'必须选择一个物料',trigger: 'change' }
                    ],
                    purchaseCount: [
                        { validator: checkNumber, trigger: 'blur,change' }
                    ]
                },
				/*2016 12 28 新增物料 start*/
                dialogMaterialsFlag:true,
                pmsMaterialTypeVos:[],
                pmsMaterialUnitVos:[],
                ifShowType:false,
                materialTypeAdd:'',
                ifShowUnit:false,
                materialUnitAdd:'',
                formAddMaterial:{
                    materialName:'',
                    materialShortName:'',
                    materialTypeId:'',
                    materialUnitId:''
                }
				/*2016 12 28 新增物料 end*/
			}
		},
		methods: {
            removeItem:function (item) {
	            this.tableData.remove(item)
            },
            handleCheckAll(val) {//选择物料弹窗
                this.checkedMaterials = val;
            },
            loadAll() {//获取所有物料
                this.$http({
                    url:'/pms/purchase/material/list.do',
                    method:'POST',
                    body:{requestData:JSON.stringify({"materialName":""} )},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.materials=data.result;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                });
                this.$http({
	                    url:'/pms/management/materialUnitAndType/list.do',
	                    method:'POST'
	                }).then((res)=>res.body).then((data)=> {
	                    if (data.code == 200) {
	                    this.pmsMaterialTypeVos=data.result.pmsMaterialTypeVos;
	                }else{
	                    this.$message({
	                        message: data.message,
	                        type: 'warning'
	                    });
	                }
	            });
            },
            loadTemplate(){//加载导入模板地址
                this.$http({
                    url:'/pms/download/purchase/template/export.do',
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
			fetchData(){//获取的信息
                let purchaseId =this.$route.params.id
                let requestData =  { "purchaseId":purchaseId} ;
                this.$http({
                    url:'/pms/purchase/order/show.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsPurchaseVo.pmsPurchaseDetailVos;
                        this.remark = data.result.pmsPurchaseVo.purchaseRemark;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
			},
            handleChangeMaterial(item) {
                if(item.materialId !=undefined && item.materialId !=''){
                    var index =this.materials.findIndex(function(el, index, arr) {
                        return el.materialId == item.materialId;
                    })
                    if(index > -1){
                        item.materialTypeName=this.materials[index].materialTypeName;
                        //here id
                        item.materialUnitName=this.materials[index].materialUnitName;
                        //here id
                        item.materialName=this.materials[index].materialName;
                    }
                }

            },
            handleBlur(item){
                if(item.materialName !=undefined && item.materialName !='' && !isNaN(item.purchaseCount) &&item.purchaseCount >0){
                    this.tableData.push({
                        materialName:item.materialName,
                        materialTypeName: item.materialTypeName,
                        purchaseCount: item.purchaseCount,
                        materialUnitName: item.materialUnitName,
                        materialId: item.materialId
                    });
                    item.materialName ='';
                    item.materialTypeName ='--';
                    item.materialUnitName ='--';
                    item.purchaseCount ='';
                    item.materialId ='';
                }
            },
            handleBackToList(){
                this.$router.push({ path: '/purchase' });
            },
            handleSubmitPO(){
	            /*奇葩的验证 start*/
                let that =this;
                let pass= true;
                this.tableData.forEach(function (n,key) {
                    let field1 ='row'+key+'a';
                    that.$refs[field1].validate((valid) => {
                        if(!valid){
                            pass =false;
                        }
                    })
                })
                if(!pass){
                    return false;
                }
	            /*奇葩的验证 end*/
                let requestData = {};
                let requestUrl = '/pms/purchase/order/create.do';
                let retMsg = '添加采购单成功';
                requestData.pmsPurchaseDetailVos = [];
                this.tableData.forEach(function(n,key){
                    let obj ={};
                    obj.materialId= n.materialId;
                    obj.purchaseCount= n.purchaseCount;
                    requestData.pmsPurchaseDetailVos.push(obj);
	            })
                requestData.purchaseRemark =this.remark;
                if(this.purchaseId !=''){//mode =Edit
                    requestUrl ='/pms/purchase/order/edit.do';
                    retMsg='更新采购单成功';
                    requestData.purchaseId =this.purchaseId;
                }
                this.$http({
                    url:requestUrl,
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.$message({
                            message: retMsg,
                            type: 'success'
                        });
                        this.$router.push('/purchase');
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            },
            //选入物料弹窗
            openDialogMaterials(){
                this.dialogMaterials =true;
                this.materialsArr=this.materials;
            },
            handleSearchMaterial(){
                let that =this;
                this.materialsArr  = this.materials.filter(function (item) {
                    return (!that.dialogForm.materialType || that.dialogForm.materialType =='' || item.materialTypeId ==that.dialogForm.materialType) && (that.dialogForm.materialName =='' || item.materialName.indexOf(that.dialogForm.materialName) > -1 || item.materialShortName.indexOf(that.dialogForm.materialName) > -1) ;
                });
            },
            handleGoAddMaterials(){
                this.dialogMaterialsFlag =false;
                //this.$router.push('/settings/handleMateriel/add/index?name=add');
            },
            handleCancelDialogMaterials(){
                this.checkedMaterials=[];
                this.$refs.materials.clearSelection();
                this.dialogMaterials = false;
            },
            handleMaterialsClose(){
				this.dialogForm.materialType='';
				this.dialogForm.materialName ='';
                this.dialogMaterialsFlag = true;
            },
            handleConfirmDialogMaterials(){
                let that = this;
                this.checkedMaterials.forEach(function(n,key){
                    let arr = [{
                        "materialId":n.materialId,
                        "materialName": n.materialName,
                        "materialTypeId": n.materialTypeId,
                        "materialTypeName": n.materialTypeName,
                        "materialUnitId": n.materialUnitId,
                        "materialUnitName": n.materialUnitName,
                        "no": that.tableData.length+1,
                        "payStatus": 0,
                        "purchaseCount": 0,
                        "purchaseId": "",
                        "purchasePrice": 0,
                        "purchaserId": n.purchaserId,
                        "purchaserName": n.purchaserName,
                        "receiptDetailId": "",
                        "receivedCount": 0,
                        "supplierId": n.supplierId,
                        "supplierName": n.supplierName,
                        "totalFee": 0
                    }]
                    that.tableData = that.tableData.concat(arr);
                })
                this.checkedMaterials=[];
                this.$refs.materials.clearSelection();
                this.dialogMaterials = false;
            },
            //2016 12 28 新增物料
            clickShowType(){
                this.ifShowType = true;
            },
            addMaterialType(){
                var params = {materialTypeName:this.materialTypeAdd};
                utils.post(urls.materialTypeAdd,params,this).then(function (data) {
                    if(data.code == 200){
                        this.$message({
                            message: '新增物料类别成功',
                            type: 'success'
                        });
                        this.formAddMaterial.materialTypeId=data.result;
                        this.refresh();
                    }
                });
                this.ifShowType = false
            },
            clickShowUnit(){
                this.ifShowUnit = true;
            },
            addMaterialUnit(){
                var params = {materialUnitName:this.materialUnitAdd};
                utils.post(urls.materialUnitAdd,params,this).then(function (data) {
                    if(data.code == 200){
                        this.$message({
                            message: '新增进货单位成功',
                            type: 'success'
                        });
                        this.formAddMaterial.materialUnitId=data.result;
                        this.refresh();
                    }
                });
                this.ifShowUnit = false
            },
            close () {
               this.dialogMaterialsFlag =true;//显示选择物料
            },
            onSubmit(ifContinue) {
				/*新增物料*/
                utils.post(urls.materialAdd,this.formAddMaterial,this).then(function(data){
                    if (data.code == 200) {
                        this.formAddMaterial.materialName ='';
                        this.formAddMaterial.materialShortName ='';
                        this.formAddMaterial.materialTypeId ='';
                        this.formAddMaterial.materialUnitId ='';
                        this.$http({
                            url:'/pms/purchase/material/list.do',
                            method:'POST',
                            body:{requestData:JSON.stringify({"materialName":""} )},
                            emulateJSON:true
                        }).then((res)=>res.body).then((data)=> {
                            if (data.code == 200) {
                                this.materials=data.result;
                                this.materialsArr  = this.materials.filter(function (item) {
                                    return (!that.dialogForm.materialType || that.dialogForm.materialType =='' || item.materialTypeId ==that.dialogForm.materialType) && (that.dialogForm.materialName =='' || item.materialName.indexOf(that.dialogForm.materialName) > -1 || item.materialShortName.indexOf(that.dialogForm.materialName) > -1) ;
                                });
                                if(!ifContinue) {
                                    this.dialogMaterialsFlag = true;//显示选择物料
                                }
                            }else{
                                this.$message({
                                    message: data.message,
                                    type: 'warning'
                                });
                            }
                        });
                    }
                });
            },
            refresh(){
                utils.post(urls.materialUnitAndTypeList,null,this).then(function (data) {
                    if (data.code == 200) {
                        this.pmsMaterialTypeVos = data.result.pmsMaterialTypeVos
                        this.pmsMaterialUnitVos = data.result.pmsMaterialUnitVos
                    }
                });
            },
			/*添加物料结束*/
			/*导入相关*/
            handleRemove(file, fileList){
				//importedData.clear()
                this.importedData =[];
            },
            handleSuccess(response, file, fileList){
                if (response.code == 200) {
                    //here array concat/append to importedData
                    this.importedData = this.importedData.concat(response.result.pmsPurchaseParseDetailVoL);
                    //when click OK , concat all importedData to tableData
	                this.uploadDescShow =true;
	                if(response.result.pmsPurchaseParseDetailVoErrorL.length ==0){
                        this.uploadStatus ='success';
	                }else{
                        this.uploadStatus ='warning';
	                }
	                this.uploadDesc =`本次导入物料${response.result.pmsPurchaseParseDetailVoL.length+response.result.pmsPurchaseParseDetailVoErrorL.length}个，其中成功${response.result.pmsPurchaseParseDetailVoL.length}个，失败${response.result.pmsPurchaseParseDetailVoErrorL.length}个`;
                }else{
                    this.$message({
                        message: response.message,
                        type: 'warning'
                    });
                }

            },
            renderUploadDesc:function (h) {
                // h = createElement
                return h(
                    'p',
                    [
                        this.uploadDesc,
	                    /*h('br'),
                        h('a', {
                            attrs: {
                                name:'alink',
                                href: 'error.xls'
                            }
                        }, '点击此处下载导入失败的记录')*/
                    ]
                )
            },
            handleError(err, response, file){
                this.$message({
                    message: err,
                    type: 'warning'
                });
            },
			handleCancelUpload(){
                this.dialogVisible = false;
                this.uploadDescShow =false;
                //remove all importedData
                this.importedData =[];
			},
			handleConfirmUpload(){
                this.dialogVisible = false;
                this.uploadDescShow =false;
                this.tableData = this.tableData.concat(this.importedData);
                //concat all importedData to tableData
			}

		},
        created() {
            this.loadAll();
            this.refresh();
            this.loadTemplate();
            this.purchaseId = this.$route.params.id?this.$route.params.id:'';
            if(this.purchaseId !=''){
                //this is edit
				this.fetchData();
                this.crumbs = [
                    {path:'/',name: '首页'},
                    {path:'/purchase',name: '开采购单'},
                    {path:'/purchase/create',name: '编辑'},
                ];
            }
        },
        watch:{
		    /*简拼*/
            "formAddMaterial.materialName"(word){
                let materialShortName = '';
                let result = pinyin(word, {
                    style: pinyin.STYLE_FIRST_LETTER // 设置拼音风格
                });
                for(let i=0;i<result.length;i++){
                    materialShortName += result[i]
                }
                this.formAddMaterial.materialShortName = materialShortName;
            }
        },
        computed: mapState({
            user: state => state.user,
            showAdd(state) {
				//here
	            let item = this.newTableData[0]
                return item.materialName !=undefined && item.materialName !='' && !isNaN(item.purchaseCount) &&item.purchaseCount >0
            }
        })
    }
</script>