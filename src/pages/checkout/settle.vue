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
		border-bottom: 1px solid #e5e5e5;
		color: #475669;
		.orange{
			color: #ff6600;
		}
		.el-form-item{
			margin-bottom: 0;
		}
	    .el-select{
		    width: 110px;
	    }
		.right{
			text-align: right;
		}
	    .account-info{
		    font-size: 14px;
		    .account-num{
			    padding-left: 15px;
		    }
	    }
	}
	.submit-con{
		padding: 20px 0;
		color: #475669;
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
						<el-col :span="8"><div class="grid-content left">结算</div></el-col>
						<el-col :span="16">
							<div class="grid-content right">
								<el-row>
									<el-col :span="10">采购单号：{{orderData.purchaseNo}}</el-col>
									<el-col :span="6" v-if="role ==0">采购员：{{pmsPurchaserVo.purchaserName}}</el-col>
									<el-col :span="8" v-if="role ==1">供应商：{{pmsSupplierVo.supplierName}}</el-col>
								</el-row>
								<el-row>
									<el-col :span="10" v-if="role ==1">联系人：{{pmsSupplierVo.supplierContact}}</el-col>
									<el-col :span="6" v-if="role ==0">联系电话：{{pmsPurchaserVo.mobile}}</el-col>
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
					<el-button  @click="handleExport">导出</el-button>
					<!--<el-button  @click="handlePrint">打印</el-button>-->
				</div>
				<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData" height="280" border style="width:100%">
					<el-table-column type="index" label="序号" width="100"></el-table-column>
					<el-table-column  prop="materialName" label="物料名称" min-width="120"></el-table-column>
					<el-table-column  prop="materialTypeName" label="类别" min-width="100"></el-table-column>
					<el-table-column  prop="receivedCount" label="收货数量" min-width="100"></el-table-column>
					<el-table-column   prop="purchasePrice" label="单价（元）" min-width="120" inline-template>
						<span>{{row.purchasePrice}}</span>
					</el-table-column>
					<el-table-column  prop="materialUnitName" label="单位" min-width="100"></el-table-column>
					<el-table-column  prop="totalPayment" label="合计金额（元）" min-width="140" inline-template>
						<span>{{row.totalPayment}}</span>
					</el-table-column>
					<el-table-column prop="payStatus" label="是否付款" min-width="100" inline-template>
						<el-tag :type="row.payStatus == 0 ? 'primary' : 'success'" close-transition>{{row.payStatus == 0 ? '否' : '是'}}</el-tag>
					</el-table-column>
				</el-table>
				<div class="payment-con">
					<el-row type="flex" class="row-bg" justify="space-between">
						<el-col :span="8">
							<el-row type="flex">
								<el-col :span="12">
									<div class="grid-content left">
										总计：<span class="orange">{{pmsSettlementAmountVo.totalPayment}}</span>元
									</div>
								</el-col>
								<el-col :span="12">
									<div class="grid-content left">
										已付：<span class="orange">{{pmsSettlementAmountVo.payment}}</span>元
									</div>
								</el-col>
							</el-row>
							<el-row type="flex">
								<el-col :span="12">
									<div class="grid-content left">
										需付：<span class="orange">{{pmsSettlementAmountVo.nonPayment}}</span>元
									</div>
								</el-col>
								<el-col :span="12">
									<div class="grid-content left">
										数量：<span class="orange">{{pmsSettlementAmountVo.purchaseCount}}</span>项
									</div>
								</el-col>
							</el-row>
						</el-col>
						<el-col :span="16" class="right">
							<el-row type="flex">
								<el-col :span="24">
									<el-form :inline="true" :model="paymentForm" :rules="rules" ref="paymentForm">
										<el-form-item label="实付金额" prop="amount" label-width="80px">
											<el-input v-model.number="paymentForm.amount" placeholder="实付金额"></el-input>
										</el-form-item>
										<el-form-item prop="payType">
											<el-select v-model="paymentForm.payType" placeholder="支付方式" :disabled ="role == 0" @change="handleChangePayType">
												<el-option v-for="item in pmsSettlementTypeVos"
												           :label="item.settlementName"
												           :value="item.settlementId">
												</el-option>
											</el-select>
										</el-form-item>
									</el-form>
								</el-col>
							</el-row>
							<el-row type="flex" class="account-info" justify="start">
								<el-col :span="24" v-if="settlementAccountName !=''">
									<span class="account-name">户名：{{settlementAccountName}}</span>
									<span class="account-num">户号：{{settlementAccountNumber}}</span>
								</el-col>
							</el-row>

						</el-col>
					</el-row>
				</div>
				<div class="submit-con">
					<el-row type="flex" class="row-bg" justify="end">
						<el-col :span="12">
							<div class="grid-content right">
								<el-button @click="handleBackToList">取消</el-button>
								<el-button type="orange" @click="handleSettle" :loading="user.lock">完成结算</el-button>
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
			  {path:'/checkout/detail',name: '与供应商结算'},
			  {path:'/checkout/settle/',name: '结算'},
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
			var pmsSettlementTypeVos =[];
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
                pmsSettlementTypeVos,
                loading:true,
                receiptId:"",
                role:"1",
				userid:"",
                paymentForm:{
				    amount:"",
                    payType:"",
                },
                rules: {//验证规则
                    amount: [
                        { validator: checkNumber, trigger: 'blur' }
                    ],
                    payType:[
                        { required:true,message:'必须选择支付方式',trigger: 'change' }
                    ]
                },
                settlementAccountName:'',//户名
                settlementAccountNumber:''//户号
			}
		},
		methods: {
            handleExport(){
                utils.export('/pms/settlement/order/detail/export.do',{id: this.userid, receiptId: this.receiptId,settlementReceiver:this.role })
            },
            handlePrint(){
                this.$router.push({ name: 'checkoutViewMaterialPrint',params: { id: this.receiptId,role:this.role,userid:this.userid}})
            },
            handleBackToList(){
                this.$router.push({name: 'checkoutDetail',params: { id: this.receiptId,role:this.role}});
            },
			handleSettle(){
                this.$refs.paymentForm.validate((valid) => {
                    if(valid){
                        let requestData = {
                            "receiptId":this.receiptId,
	                        "id":this.userid,
	                        "settlementReceiver": this.role,
	                        "payment":this.paymentForm.amount,
	                        "settlementTypeId":this.paymentForm.payType,
                        };
                        //获取订单信息
                        this.$http({
                            url:'/pms/settlement/detail/settle.do',
                            method:'POST',
                            body:{requestData:JSON.stringify(requestData)},
                            emulateJSON:true
                        }).then((res)=>res.body).then((data)=> {
                            if (data.code == 200) {
                                this.$message({
                                    message: '结算成功',
                                    type: 'success'
                                });
                                this.handleBackToList();
                            }else{
                                this.$message({
                                    message: data.message,
                                    type: 'warning'
                                });
                            }
                        })
                    }
                })
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
			        url:'/pms/settlement/detail/show.do',
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
	                    if(data.result.pmsSettlementAmountVo && data.result.pmsSettlementAmountVo.payment && parseFloat(data.result.pmsSettlementAmountVo.payment) >0){
	                        this.paymentForm.amount =data.result.pmsSettlementAmountVo.payment;
	                    }
                        if(data.result.pmsSettlementAmountVo && data.result.pmsSettlementAmountVo.nonPayment && parseFloat(data.result.pmsSettlementAmountVo.nonPayment) >0){
                            this.paymentForm.amount =data.result.pmsSettlementAmountVo.nonPayment;
                        }
	                    this.pmsSettlementTypeVos = data.result.pmsSettlementTypeVos;
	                    if(this.role ==0){
                            this.paymentForm.payType = "1";
                            this.pmsSettlementTypeVos =[{settlementId:"1",settlementName:"现金"}]
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
		  },
            handleChangePayType(item){
		      if(item && item !=''){
                  var index =this.pmsSettlementTypeVos.findIndex(function(el, index, arr) {
                      return el.settlementId == item;
                  })
			      if(index != -1){
				      this.settlementAccountName =this.pmsSettlementTypeVos[index].settlementAccountName;
				      this.settlementAccountNumber =this.pmsSettlementTypeVos[index].settlementAccountNumber;
                  }
		      }
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
                    {path:'/checkout/settle/'+this.receiptId+'/role/1/user/'+this.userid,name: '结算'}
                ];
            }else{
                 this.crumbs = [
                     {path:'/',name: '首页'},
                     {path:'/checkout',name: '结算单'},
                     {path:'/checkout/detail/'+this.receiptId+'/role/0',name: '与采购员结算'},
                     {path:'/checkout/settle/'+this.receiptId+'/role/0/user/'+this.userid,name: '结算'}
                ];
            }
            this.fetchData()
	    },
        computed: mapState({
            user: state => state.user
        })
    }
</script>