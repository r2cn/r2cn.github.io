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
	.order-bar{
		color: #99a9bf;
		font-size: 18px;
		padding:20px 0;
		.right{
			font-size: 14px;
		}
	}
	.remark-con{
		padding: 20px 0 100px 0;
	}
	.submit-con{
		border-top: 1px solid #e5e5e5;
		padding: 20px 10px;
		color: #475669;
		position: fixed;
		left: 110px;
		bottom: 0;
		right: 0;
		background-color: #fff;
		z-index: 888;
		.orange{
			color: #ff6600;
		}
		.left,.middle{
			line-height: 36px;
			height: 36px;
		}
		.middle{
			text-align: center;
			.tooltips{
				padding-left: 10px;
			}
		}
	    .right{
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
		.dialog-body{
			.el-select{
				display: inline-block;
			}
		}
		.el-tabs{
			display: block;
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
					<div class="order-bar">
						<el-row>
							<el-col :span="12"><div class="grid-content left">编辑收货记录</div></el-col>
							<el-col :span="12">
								<div class="grid-content right">
									<el-row>
										<el-col :span="12">采购单号：{{orderData.purchaseNo}}</el-col>
										<el-col :span="12">开单时间：{{orderData.createTime|moment}}</el-col>
									</el-row>
									<el-row>
										<el-col :span="24">开单人：{{orderData.createUserName}}</el-col>
									</el-row>
									<el-row>
										<el-col :span="24">备注：{{orderData.purchaseRemark}}</el-col>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
					<div class="button-bar">
						<el-button type="primary" :disabled="!showBatchOption" @click="dialogVisible=true">批量编辑</el-button>
						<el-button type="primary" :disabled="!showBatchOption" @click="removeItem">删除</el-button>
						<el-button type="primary" icon="plus" @click="openDialogMaterials">添加物料</el-button>
					</div>
					<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData"  border style="width:100%" class="el-table_my" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column type="index" label="序" width="55"></el-table-column>
						<el-table-column  label="物料名称" min-width="150" inline-template :context="_self">
							<div>
								<span v-if="!row.editable">{{row.materialName}}</span>
								<div class="el-input-con" v-if="row.editable">
									<el-form :model="row">
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
							</div>
						</el-table-column>
						<el-table-column prop="materialTypeName" label="类别" min-width="75"></el-table-column>
						<el-table-column inline-template label="进货单价(元)" min-width="120">
							<div class="el-input-con">
								<el-form :model="row"  :ref="'row'+ $index+'a'" :rules="rules">
									<el-form-item prop="purchasePrice">
										<el-input v-model.number="row.purchasePrice" @blur="handleChangePrice(row)" :maxlength="6"></el-input>
									</el-form-item>
								</el-form>
							</div>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="采购数量" min-width="100" >
							<div class="el-input-con">
								<el-input disabled v-model="row.purchaseCount" placeholder="采购数量" :maxlength="6"></el-input>
							</div>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="收货数量" min-width="140">
							<div class="el-input-con">
								<el-input-number v-model="row.receivedCount" placeholder="收货数量" @change="handleChangeCount(row)"></el-input-number>
							</div>
						</el-table-column>
						<el-table-column prop="materialUnitName" label="单位" min-width="65"></el-table-column>
						<el-table-column inline-template :context="_self" label="合计(元)" min-width="100">
							<div class="el-input-con">
								<el-form :model="row"  :ref="'row'+ $index+'b'" :rules="rules">
									<el-form-item prop="totalFee">
										<el-input v-model.number="row.totalFee" :maxlength="8" @blur="handleChangeTotal(row)"></el-input>
									</el-form-item>
								</el-form>
							</div>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="是否付款" min-width="100">
							<div class="el-input-con">
								<el-select v-model="row.payStatus">
									<el-option
											v-for="item in payStatus"
											:label="item.name"
											:value="item.value">
									</el-option>
								</el-select>
							</div>
						</el-table-column>
						<el-table-column  inline-template :context="_self" label="采购员" min-width="130" show-overflow-tooltip>
							<el-select v-model="row.purchaserId" placeholder="系统采购员" @change="handleChangePurchaser(row)">
								<el-option
										v-for="item in batchPurchasers"
										:label="item.purchaserName"
										:value="item.purchaserId">
								</el-option>
							</el-select>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="供应商" min-width="130" show-overflow-tooltip>
							<el-select v-model="row.supplierId" placeholder="系统供应商" @change="handleChangeSupplier(row)">
								<el-option
										v-for="item in batchSuppliers"
										:label="item.supplierName"
										:value="item.supplierId">
								</el-option>
							</el-select>
						</el-table-column>
					</el-table>
					<div class="remark-con">
						<el-button type="primary" icon="plus" @click="handleNewLine">添加一行</el-button>
					</div>
					<div class="submit-con">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="8"></el-col>
							<el-col :span="8"></el-col>
							<el-col :span="8">
								<div class="grid-content right">
									<el-button @click="handleBackToList">取消</el-button>
									<el-button type="orange" @click="handleSubmitPO">完成编辑</el-button>
								</div>
							</el-col>
						</el-row>
					</div>
				</div>
			</div>
		</common-layout>
		<el-dialog title="批量编辑" v-model="dialogVisible" size="small" class="po-dialog">
			<div class="dialog-body">
				<el-tabs type="border-card">
					<el-tab-pane label="采购员">
						<el-select v-model="batchSelectPurchasers" placeholder="请选择采购员">
							<el-option
									v-for="item in batchPurchasers"
									:label="item.purchaserName"
									:value="item.purchaserId">
							</el-option>
						</el-select>
					</el-tab-pane>
					<el-tab-pane label="供应商">
						<el-select v-model="batchSelectSuppliers" placeholder="请选择供应商">
							<el-option
									v-for="item in batchSuppliers"
									:label="item.supplierName"
									:value="item.supplierId">
							</el-option>
						</el-select>
					</el-tab-pane>
					<el-tab-pane label="是否付款">
						<el-select v-model="batchSelectPayStatus" placeholder="请选择是否已付款">
							<el-option
									v-for="item in payStatus"
									:label="item.name"
									:value="item.value">
							</el-option>
						</el-select>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button @click="handleCancelDialog">取消</el-button>
				<el-button type="primary" @click="handleConfirmDialog">保存</el-button>
			</div>
		</el-dialog>
		<el-dialog title="请选择物料" v-model="dialogMaterials" size="large" class="ma-dialog" @close="handleMaterialsClose">
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
					<el-table-column type="index" label="序" width="55"></el-table-column>
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
			<el-form ref="formAddMaterial" label-width="100px" v-show="!dialogMaterialsFlag">
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
	</div>
</template>
<script>
    import { mapState } from 'vuex';
    import pinyin from 'pinyin';
    export default {
		data() {
			var crumbs = [
			  {path:'/',name: '首页'},
			  {path:'/receives',name: '收货单'},
			  {path:'/receives/',name: '编辑收货记录'},
			];
			var tableData =[];
			var orderData ={};
			var materials = [];
			var dialogVisible = false;
			var receiptId='';
			var source=1;
            var dialogMaterials = false;//选择物料弹窗
            //验证用户输入值 将来考虑实现一个check.js库 如何复用?
            var checkNumber = (rule, value, callback) => {
                if (value ==='') {
                    return callback(new Error('该值不能为空'));
                }
                if (isNaN(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if(parseFloat(value) < 0){
                        callback(new Error('金额不能小于0'));
                    }else{
                        callback();
                    }
                }
            };
			return {
				crumbs,
				tableData,
				orderData,
                materials,
                dialogVisible,
                dialogMaterials,
                receiptId,
                source,
                multipleSelection:[],
                deleteReceiptDetailIds:[],
                checkedMaterials:[],//选择物料弹窗
                payStatus:[{value:0,name:"否"},{value:1,name:"是"}],
                batchPurchasers:[],//采购员列表
                batchSuppliers:[],//供应商列表
                materialsArr:[],
                dialogForm:{
                    materialType:"",
                    materialName:""
                },
                pmsMaterialTypeVos:[],//物料类别列表
                batchSelectPurchasers:'',// 批量设置采购员
                batchSelectSuppliers:'',// 批量设置供应商
                batchSelectPayStatus:'',// 批量设置是否付款
                rules: {//验证规则
                    purchasePrice: [
                        { validator: checkNumber, trigger: 'blur' }
                    ],
                    totalFee: [
                        { validator: checkNumber, trigger: 'blur' }
                    ],
                },
                loading:true,
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
                },
				/*2016 12 28 新增物料 end*/
                systemSupplierId:''
			}
		},
		methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleCheckAll(val) {//选择物料弹窗
                this.checkedMaterials = val;
            },
            handleExport(){

            },
            handlePrint(){
                this.$router.push({ name: 'receivesPrint',params: { id: this.receiptId }})
            },
            removeItem(){
                let that =this;
                this.multipleSelection.forEach(function(n,key){
                    that.tableData.remove(n);
                    if(n.receiptDetailId){
                        that.deleteReceiptDetailIds.push(n.receiptDetailId)
                    }
                })
            },
            loadAll() {//获取所有物料，采购员和供应商列表
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
                this.$http({
                    url:'/pms/receipt/user/option.do',
                    method:'POST'
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.batchPurchasers=data.result.pmsPurchaserVos;
                        this.batchSuppliers=data.result.pmsSupplierVos;
                        this.systemSupplierId =data.result.systemSupplierId;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            },
			fetchData(){//获取编辑的信息
                this.loading =true;
                let receiptId =this.$route.params.id
                let requestData =  { "receiptId":receiptId} ;
                this.$http({
                    url:'/pms/receipt/order/detail.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsReceiptVo.pmsReceiptDetailVos;
                        this.orderData.createUserName = data.result.pmsReceiptVo.createUserName;
                        this.orderData.purchaseNo = data.result.pmsReceiptVo.purchaseNo;
                        this.orderData.purchaseRemark = data.result.pmsReceiptVo.purchaseRemark;
                        this.orderData.createTime = data.result.pmsReceiptVo.createTime;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                    this.loading =false;
                })
			},
            handleBackToList(){
                if(this.source ==1){
                    this.$router.push({ path: '/receives' });
                }else{
                    this.$router.push({ path: '/receives/direct' });
                }
            },
            handleSubmitPO(){
	            /*奇葩的验证 start*/
                let that =this;
                let pass= true;
                this.tableData.forEach(function (n,key) {
                    let field1 ='row'+key+'a';
                    let field2 ='row'+key+'b';
                    that.$refs[field1].validate((valid) => {
	                    if(!valid){
	                        pass =false;
	                    }
	                })
                    that.$refs[field2].validate((valid) => {
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
                let requestUrl = '/pms/receipt/detail/edit.do';
                let retMsg = '编辑收货记录成功';
                requestData.pmsReceiptDetailVos =[];
                this.tableData.forEach(function (n,key) {
                    if(!n.supplierId || n.supplierId.length <32){
                        n.supplierId =that.systemSupplierId;
                        n.supplierName ='系统供应商';
                    }
                    if(!n.purchaserId || n.purchaserId.length <32){
                        n.purchaserId ="0";
                        n.purchaserName ='系统采购员';
                    }
	                /*2017 01 09 杨龙 未选择物料的行 直接忽略 不再提示*/
                    if(n.materialId && n.materialId !=''){
                        requestData.pmsReceiptDetailVos.push(n);
                    }
                })
                requestData.receiptId = this.receiptId;
                requestData.deleteReceiptDetailIds = this.deleteReceiptDetailIds;
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
	                    if(this.source ==1){
	                        this.$router.push({ path: '/receives' });
	                    }else{
	                        this.$router.push({ path: '/receives/direct' });
	                    }
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            },
            handleChangePurchaser(item){
                if(item.purchaserId !=undefined && item.purchaserId !=''){
                    var index =this.batchPurchasers.findIndex(function(el, index, arr) {
                        return el.purchaserId == item.purchaserId;
                    })
                    if(index > -1){
                        //item.purchaserId=this.batchPurchasers[index].purchaserId;
                        item.purchaserName=this.batchPurchasers[index].purchaserName;
                    }
                }
            },
            handleChangeSupplier(item){
                if(item.supplierId !=undefined && item.supplierId !=''){
                    var index =this.batchSuppliers.findIndex(function(el, index, arr) {
                        return el.supplierId == item.supplierId;
                    })
                    if(index > -1){
                        //item.supplierId=this.batchSuppliers[index].supplierId;
                        item.supplierName=this.batchSuppliers[index].supplierName;
                    }
                }
            },
			/*validates & computed functions*/
            handleNewLine(){
                this.tableData.push({
                    "materialId":"",
                    "materialName": "",
                    "materialTypeId": "",
                    "materialTypeName": "--",
                    "materialUnitId": "",
                    "materialUnitName": "--",
                    "no": 0,
                    "payStatus": 0,
                    "purchaseCount": 0,
                    "purchaseId": "",
                    "purchasePrice": 0,
                    "purchaserId": "",
                    "purchaserName": "",
                    "receiptDetailId": "",
                    "receivedCount": 0,
                    "supplierId": "",
                    "supplierName": "",
                    "totalFee": 0,
	                "editable":true
                });
            },
            handleChangeMaterial(item) {
                if(item.materialId !=undefined && item.materialId !=''){
                    var index =this.materials.findIndex(function(el, index, arr) {
                        return el.materialId == item.materialId;
                    })
                    if(index > -1){
                        item.materialTypeName=this.materials[index].materialTypeName;
                        item.materialTypeId=this.materials[index].materialTypeId;
                        item.materialUnitName=this.materials[index].materialUnitName;
                        item.materialUnitId=this.materials[index].materialUnitId;
                        item.materialName=this.materials[index].materialName;

                        //here 天启 物料列表 返回历史供应商和采购员
                        item.purchaserId=this.materials[index].purchaserId;
                        item.purchaserName=this.materials[index].purchaserName;
                        item.supplierId=this.materials[index].supplierId;
                        item.supplierName=this.materials[index].supplierName;
                        //此处修改 记得同步到根据收货单收货，和编辑收货单那里
                        item.purchasePrice=this.materials[index].purchasePrice;
                    }
                }

            },
            handleChangePrice(row){
                var number = +row.purchasePrice;
                row.totalFee = isNaN(number) ? 0 : parseFloat(number*row.receivedCount).toFixed(2)
            },
            handleChangeTotal(row){
                var number = +row.totalFee;
                if(row.receivedCount >0){
                    row.purchasePrice = isNaN(number) ? 0 :(row.totalFee/row.receivedCount).toFixed(2)
                }
            },
            handleChangeCount(row){
                var number = +row.purchasePrice;
                setTimeout(function(){
                    row.totalFee = isNaN(number) ? 0 : parseFloat(number*row.receivedCount).toFixed(2)
                },1000)
            },
			/*dialog 批量操纵*/
            handleCancelDialog(){
                this.dialogVisible = false;
                this.batchSelectPurchasers ='';
                this.batchSelectSuppliers ='';
                this.batchSelectPayStatus ='';
            },
            handleConfirmDialog(){
                let that =this;
                this.multipleSelection.forEach(function(n,key){
                    if(that.batchSelectPurchasers !='' && that.batchSelectPurchasers !=undefined){
                        n.purchaserId = that.batchSelectPurchasers;
                    }
                    if(that.batchSelectSuppliers !='' && that.batchSelectSuppliers !=undefined){
                        n.supplierId = that.batchSelectSuppliers;
                    }
                    if(that.batchSelectPayStatus !=='' && that.batchSelectPayStatus !=undefined){
                        n.payStatus = that.batchSelectPayStatus;
                    }
                })
                this.dialogVisible = false;
                this.batchSelectPurchasers ='';
                this.batchSelectSuppliers ='';
                this.batchSelectPayStatus ='';
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
                        "purchasePrice": n.purchasePrice,
                        "purchaserId": n.purchaserId,
                        "purchaserName": n.purchaserName,
                        "receiptDetailId": "",
                        "receivedCount": 0,
                        "supplierId": n.supplierId,
                        "supplierName": n.supplierName,
                        "totalFee": 0,
                        "editable":false
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
            }
			/*添加物料结束*/

		},
        created() {
            this.loadAll();
            this.refresh();
            this.receiptId = this.$route.params.id?this.$route.params.id:'';
            this.source = this.$route.params.source;
            this.fetchData();
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
	        showBatchOption(state){
                return this.multipleSelection.length >0
	        }
        })
    }
</script>