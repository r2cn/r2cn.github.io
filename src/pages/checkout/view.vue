<style lang="less" scoped>
	.order-bar{
		color: #99a9bf;
		font-size: 18px;
		padding:20px 0;
		.right{
			font-size: 14px;
		}
	}
	.button-bar{
		.form-filter{
			float:right;
			.el-form-item{
				margin-bottom: 0;
			}
			.el-select{
				width: 110px;
			}
		}
	}
	.submit-con{
		padding: 20px 0;
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
			.tooltips{
				padding-left: 10px;
			}
		}
		.right{
			text-align: right;
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
							<el-col :span="12"><div class="grid-content left">结算记录</div></el-col>
							<el-col :span="12">
								<div class="grid-content right">
									<el-row>
										<el-col :span="12">采购单号：{{orderData.purchaseNo}}</el-col>
										<el-col :span="12">结清时间：{{orderData.receivedTime|moment}}</el-col>
									</el-row>
									<el-row>
										<el-col :span="24">结算人：{{orderData.receiverName}}</el-col>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
					<div class="button-bar">
						<el-button  @click="handleExport">导出</el-button>
						<el-button  @click="handlePrint">打印</el-button>
						<el-form :inline="true" :model="formSearch" class="form-filter">
							<el-form-item>
								<el-select v-model="formSearch.status" clearable placeholder="结算对象" @change="onSubmit">
									<el-option label="供应商" value="1"></el-option>
									<el-option label="采购员" value="0"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSubmit">查询</el-button>
							</el-form-item>
						</el-form>
					</div>
					<el-table :data="tableData" height="380"  border style="width:100%">
						<el-table-column type="index" label="序" width="55"></el-table-column>
						<el-table-column prop="supplierName" label="供应商名称" min-width="120">
						</el-table-column>
						<el-table-column prop="purchaserName" label="采购员" min-width="100"></el-table-column>
						<el-table-column prop="totalPayment" label="需付金额" min-width="100" inline-template>
							<span>{{row.totalPayment|number}}</span>
						</el-table-column>
						<el-table-column prop="realPayment" label="实付金额" min-width="100" inline-template>
							<span>{{row.realPayment|number}}</span>
						</el-table-column>
						<el-table-column prop="settlementTypeName" label="支付方式" min-width="100"></el-table-column>
						<el-table-column prop="settlementReceiver" label="结算对象" min-width="100" inline-template>
							<el-tag :type="row.settlementReceiver == 0 ? 'primary' : 'success'" close-transition>{{row.settlementReceiver == 0 ? '采购员' : '供应商'}}</el-tag>
						</el-table-column>
						<el-table-column prop="settlementTime" label="结算时间" min-width="100" inline-template>
							<span>{{row.settlementTime|moment}}</span>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="操作" min-width="80" fixed="right">
							<el-button type="primary" size="small"  @click="handleView(row.id,row.settlementReceiver)">查看</el-button>
						</el-table-column>
					</el-table>
					<div class="submit-con">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="4">
								<div class="grid-content left">
									总计：<span class="orange">{{pmsSettlementAmountVo.totalPayment}}</span>元
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content left">
									实付：<span class="orange">{{pmsSettlementAmountVo.payment}}</span>元
								</div>
							</el-col>
							<el-col :span="4">
								<div class="grid-content left">
									数量：<span class="orange">{{pmsSettlementAmountVo.purchaseCount}}</span>项
								</div>
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
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    export default {
		data() {
            var crumbs = [
                {path:'/',name: '首页'},
                {path:'/checkout',name: '结算单'},
			    {path:'/checkout/view/',name: '结算记录'}
			];
            var formSearch = {
                status: ''
            };
			var tableData =[];
			var orderData={

			};
			var pmsSettlementAmountVo={};
			var receiptId='';
			return {
				crumbs,
                formSearch,
				tableData,
                orderData,
                pmsSettlementAmountVo,
                receiptId
			}
		},
		methods: {
            onSubmit() {
                this.fetchData();
            },
            handleBackToList(){
                this.$router.push({ path: '/checkout' });
            },
            handleExport(){
                utils.export('/pms/settlement/result/list/export.do',{ receiptId: this.receiptId,settlementReceiver:this.formSearch.status})
            },
            handlePrint(){
                this.$router.push({ name: 'checkoutViewPrint',params: { id: this.receiptId }})
            },
            handleView(id,settlementReceiver){
                this.$router.push({ name: 'checkoutViewMaterial',params: { id: this.receiptId,role:settlementReceiver,userid:id}})
            },
            fetchData(){
                let requestData =  { "receiptId":this.receiptId,"settlementReceiver":this.formSearch.status} ;
                this.$http({
                    url:'/pms/settlement/order/data.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.orderData.purchaseTime = data.result.purchaseTime;
                        this.orderData.purchaseNo = data.result.purchaseNo;
                        this.orderData.receivedTime = data.result.receivedTime;
                        this.orderData.receiverName = data.result.receiverName;
                    }else{
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
                this.$http({
                    url:'/pms/settlement/result/list.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsSettlementResultVos;
                        this.pmsSettlementAmountVo =data.result.pmsSettlementAmountVo
                    }else{
                        this.tableData=[];
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                })
            }

		},
        created() {
            this.receiptId =this.$route.params.id;
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>