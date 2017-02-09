<style lang="less" scoped>
	.order-bar{
		color: #99a9bf;
		font-size: 18px;
		padding:14px 0;
		.right{
			font-size: 14px;
		}
	}
	.payment-con{
		padding: 20px 0;
		color: #475669;
		.orange{
			color: #ff6600;
		}
		.right{
			text-align: right;
		}
	}
</style>
<template>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<div class="table-content">
				<div class="order-bar">
					<el-row>
						<el-col :span="8"><div class="grid-content left">结算记录</div></el-col>
						<el-col :span="16">
							<div class="grid-content right">
								<el-row>
									<el-col :span="8">采购单号：{{orderData.purchaseNo}}</el-col>
									<el-col :span="8" v-if="role ==0">采购员：{{pmsPurchaserVo.purchaserName}}</el-col>
									<el-col :span="8" v-if="role ==1">供应商：{{pmsSupplierVo.supplierName}}</el-col>
								</el-row>
								<el-row>
									<el-col :span="8">开单人：{{orderData.purchaserName}}</el-col>
									<el-col :span="8" v-if="role ==0">联系电话：{{pmsPurchaserVo.mobile}}</el-col>
									<el-col :span="8" v-if="role ==1">联系电话：{{pmsSupplierVo.supplierMobile}}</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">备注：{{orderData.remark}}</el-col>
								</el-row>
							</div>
						</el-col>
					</el-row>
				</div>
				<div class="button-bar">
					<el-button  type="primary" @click="handleEdit">编辑</el-button>
					<el-button  @click="handleExport">导出</el-button>
					<el-button  @click="handlePrint">打印</el-button>
				</div>
				<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData" height="340" border style="width:100%">
					<el-table-column type="index" label="序号" width="70"></el-table-column>
					<el-table-column  prop="materialName" label="物料名称" min-width="120"></el-table-column>
					<el-table-column  prop="materialTypeName" label="类别" min-width="100"></el-table-column>
					<el-table-column  prop="receivedCount" label="收货数量" min-width="100"></el-table-column>
					<el-table-column   prop="purchasePrice" label="单价（元）" min-width="120" inline-template>
						<span>{{row.purchasePrice|number}}</span>
					</el-table-column>
					<el-table-column  prop="materialUnitName" label="单位" min-width="100"></el-table-column>
					<el-table-column  prop="totalPayment" label="合计金额（元）" min-width="140" inline-template>
						<span>{{row.totalPayment|number}}</span>
					</el-table-column>
				</el-table>
				<div class="payment-con">
					<el-row type="flex" class="row-bg" justify="space-between">
						<el-col :span="12">
							<el-row type="flex">
								<el-col :span="8">
									<div class="grid-content left">
										数量：<span class="orange">{{pmsSettlementAmountVo.purchaseCount}}</span>项
									</div>
								</el-col>
								<el-col :span="8">
									<div class="grid-content left">
										总计：<span class="orange">{{pmsSettlementAmountVo.totalPayment}}</span>元
									</div>
								</el-col>
								<el-col :span="8">
									<div class="grid-content left">
										已付：<span class="orange">{{pmsSettlementAmountVo.payment}}</span>元
									</div>
								</el-col>
							</el-row>
							<el-row type="flex">
								<el-col :span="24">
									<div class="grid-content left">
										支付信息：
										<span>{{pmsSettlementTypeVo.settlementName}}</span>
										<span>{{pmsSettlementTypeVo.settlementAccountName}}</span>
										<span>{{pmsSettlementTypeVo.settlementAccountNumber}}</span>
									</div>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="12">
							<div class="grid-content right">
								<el-button type="primary" @click="handleBackToList">返回列表</el-button>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</common-layout>
</template>
<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    export default {
        data() {
            var crumbs = [
                {path:'/',name: '首页'},
                {path:'/checkout',name: '结算单'},
                {path:'/checkout/detail/'+this.receiptId+'/role/1',name: '与供应商结算'},
                {path:'/checkout/viewMaterial/'+this.receiptId+'/role/1/user/'+this.userid,name: '结算记录'}
            ];
            var tableData =[];
            var orderData ={};
            var pmsSettlementAmountVo ={};
            var pmsSupplierVo ={
                "supplierAddress": "",
                "supplierContact": "",
                "supplierId": "",
                "supplierMobile": "",
                "supplierName": "",
                "supplierUseStatus": 1
            };
            var pmsPurchaserVo ={
                mobile: "",
                purchaserId: "",
                purchaserName: ""
            };
            var pmsSettlementTypeVo ={
                settlementName:'',
                settlementAccountName:'',
                settlementAccountNumber:''
            };
            //验证用户输入值 将来考虑实现一个check.js库 如何复用?
            var checkNumber = (rule, value, callback) => {
                if (value ==='') {
                    return callback(new Error('实付金额不能为空'));
                }
                if (isNaN(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if(parseFloat(value) < 0){
                        callback(new Error('实付金额必须大于0'));
                    }else{
                        callback();
                    }
                }
            };
            return {
                crumbs,
                tableData,
                orderData,
                pmsSettlementAmountVo,
                pmsSupplierVo,
                pmsPurchaserVo,
                pmsSettlementTypeVo,
                loading:true,
                receiptId:"",
                role:"1",
                userid:"",
                paymentForm:{
                    amount:"",
                    payType:"1",
                },
                rules: {//验证规则
                    amount: [
                        { validator: checkNumber, trigger: 'blur' }
                    ],
                    payType:[
                        { required:true,message:'必须选择支付方式',trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleExport(){
                utils.export('/pms/settlement/order/detail/export.do',{ receiptId: this.receiptId,settlementReceiver:this.role,id:this.userid})
            },
            handlePrint(){
                this.$router.push({ name: 'checkoutViewMaterialPrint',params: { id: this.receiptId,role:this.role,userid:this.userid}})
            },
            handleEdit(){
                this.$router.push({name: 'doCheckout',params: { id: this.receiptId,role:this.role,userid:this.userid}});
            },
            handleBackToList(){
                this.$router.go(-1)
                //this.$router.push({name: 'checkoutDetail',params: { id: this.receiptId,role:this.role}});
            },
            fetchData(){
                this.loading = true;
                let requestData = {"receiptId":this.receiptId,"id":this.userid,"settlementReceiver": this.role};
                //获取订单信息
                this.$http({
                    url:'/pms/settlement/order/data.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.orderData = data.result;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
                //获取do结算页面列表信息
                this.$http({
                    url:'/pms/settlement/settle/show.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsSettlementOrderDetailVos;
	                    if(data.result.pmsSupplierVo){
	                        this.pmsSupplierVo = data.result.pmsSupplierVo;
	                    }
	                    if(data.result.pmsPurchaserVo){
	                        this.pmsPurchaserVo = data.result.pmsPurchaserVo;
	                    }
                        this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
                        if(data.result.pmsSettlementTypeVo){
                            this.pmsSettlementTypeVo = data.result.pmsSettlementTypeVo;
                        }
                    }else{
                        this.tableData=[];
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                    this.loading = false;
                })
                //here 还得根据供应商获取 结算方式列表
            }
        },
        created(){
            this.receiptId =this.$route.params.id;
            this.role = this.$route.params.role;
            this.userid = this.$route.params.userid;
            if(this.role ==1){
                this.crumbs = [
                    {path:'/',name: '首页'},
                    {path:'/checkout',name: '结算单'},
                    {path:'/checkout/detail/'+this.receiptId+'/role/1',name: '与供应商结算'},
                    {path:'/checkout/viewMaterial/'+this.receiptId+'/role/1/user/'+this.userid,name: '结算记录'}
                ];
            }else{
                this.crumbs = [
                    {path:'/',name: '首页'},
                    {path:'/checkout',name: '结算单'},
                    {path:'/checkout/detail/'+this.receiptId+'/role/0',name: '与采购员结算'},
                    {path:'/checkout/viewMaterial/'+this.receiptId+'/role/0/user/'+this.userid,name: '结算记录'}
                ];
            }
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>