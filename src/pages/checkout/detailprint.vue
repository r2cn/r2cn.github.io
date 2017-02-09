<style lang="less" scoped>
	.table-content{
		width: 1000px;
		margin: 0 auto;
	}
	.order-bar{
		color: #99a9bf;
		font-size: 18px;
		padding:14px 0;
		.right{
			font-size: 14px;
		}
	}
	.tabs-bar{
		padding: 0;
	}
	.el-tabs{
		display: block;
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
				<el-row justify="space-between">
					<el-col :span="8"><div class="grid-content left">结算单详情</div></el-col>
					<el-col :span="16">
						<div class="grid-content right">
							<el-row>
								<el-col :span="8">采购单号：{{orderData.purchaseNo}}</el-col>
								<el-col :span="8">开单人：{{orderData.purchaserName}}</el-col>
								<el-col :span="8">开单时间：{{orderData.purchaseTime|moment}}</el-col>
							</el-row>
							<el-row>
								<el-col :span="8">收货人：{{orderData.receiverName}}</el-col>
								<el-col :span="8">收货时间：{{orderData.receivedTime|moment}}</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">备注：{{orderData.remark}}</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="button-bar">
				<el-button  @click="handleBackToDetail" >返回</el-button>
				<el-button  @click="handlePrint" >打印</el-button>
			</div>
			<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData"  border style="width:100%">
				<el-table-column type="index" label="序号" width="100"></el-table-column>
				<el-table-column v-if="role == 1"  prop="name" label="供应商名称" min-width="120"></el-table-column>
				<el-table-column v-if="role == 0"  prop="name" label="采购员姓名" min-width="120"></el-table-column>
				<el-table-column  prop="purchaseCount" label="采购项数" min-width="100"></el-table-column>
				<el-table-column   prop="totalPayment" label="合计金额（元）" min-width="150" inline-template>
					<span>{{row.totalPayment|number}}</span>
				</el-table-column>
				<el-table-column  prop="payment" label="实付金额（元）" min-width="150" inline-template>
					<span>{{row.payment|number}}</span>
				</el-table-column>
				<el-table-column prop="settlementStatus" label="状态" min-width="120" inline-template>
					<el-tag :type="row.settlementStatus == 0 ? 'primary' : 'success'" close-transition>{{row.settlementStatus == 0 ? '未结清' : '已结清'}}</el-tag>
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
							已付：<span class="orange">{{pmsSettlementAmountVo.payment}}</span>元
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content left">
							未付：<span class="orange">{{pmsSettlementAmountVo.nonPayment}}</span>元
						</div>
					</el-col>
					<el-col :span="4">
						<div class="grid-content left">
							数量：<span class="orange">{{pmsSettlementAmountVo.purchaseCount}}</span>项
						</div>
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
            var crumbs = [
                {path:'/',name: '首页'},
                {path:'/checkout',name: '结算单'},
                {path:'/checkout/detail',name: '与供应商结算'}
            ];
            var formSearch = {
                status: ''
            };
            var tableData =[];
            var orderData ={};
            var pmsSettlementAmountVo ={};
            return {
                crumbs,
                formSearch,
                tableData,
                orderData,
                pmsSettlementAmountVo,
                loading:true,
                receiptId:"",
                role:"1"
            }
        },
        methods: {
            handlePrint(){
                window.print()
            },
            handleBackToDetail(){
                this.$router.push({ name: 'checkoutDetail',params: { id: this.receiptId,role:this.role}})
            },
            fetchData(){
                this.loading = true;
                let requestData = {"receiptId":this.receiptId,"settlementStatus":this.formSearch.status,"settlementReceiver": this.role};
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
                //获取列表信息
                this.$http({
                    url:'/pms/settlement/order/show.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsSettlementOrderVos;
                        this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
                    }else{
                        this.tableData=[];
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                    this.loading = false;
                })
            }
        },
        created(){
            this.receiptId =this.$route.params.id;
            this.role = this.$route.params.role;
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>