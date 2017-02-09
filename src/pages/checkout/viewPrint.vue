<style lang="less" scoped>
	.table-content{
		width: 1000px;
		margin: 0 auto;
	}
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
				<el-button  @click="handleBackToList">返回</el-button>
				<el-button  @click="handlePrint">打印</el-button>
			</div>
			<el-table :data="tableData" border style="width:100%">
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
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    export default {
		data() {
            var formSearch = {
                status: ''
            };
			var tableData =[];
			var orderData={};
			var pmsSettlementAmountVo={};
			var receiptId='';
			return {
                formSearch,
				tableData,
                orderData,
                pmsSettlementAmountVo,
                receiptId
			}
		},
		methods: {
            handleBackToList(){
                this.$router.go(-1);
            },
            handlePrint(){
               window.print()
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