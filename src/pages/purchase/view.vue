<style lang="less" scoped>
	.order-bar{
		color: #99a9bf;
		font-size: 18px;
		padding:20px 0;
		.right{
			font-size: 14px;
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
							<el-col :span="12"><div class="grid-content left">开单记录</div></el-col>
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
						<el-button  @click="handleExport">导出</el-button>
						<el-button  @click="handlePrint">打印</el-button>
					</div>
					<el-table :data="tableData" height="380"  border style="width:100%">
						<el-table-column type="index" label="序号" width="100"></el-table-column>
						<el-table-column prop="materialName" label="物料名称" min-width="150">
						</el-table-column>
						<el-table-column prop="materialTypeName" label="物料类别" min-width="150"></el-table-column>
						<el-table-column prop="purchaseCount" label="采购数量" min-width="200">
						</el-table-column>
						<el-table-column prop="materialUnitName" label="进货单位" min-width="120"></el-table-column>
					</el-table>
					<div class="submit-con">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="8">
								<div class="grid-content left">
									数量：<span class="orange">{{tableData.length}}</span>项
								</div>
							</el-col>
							<el-col :span="8">

							</el-col>
							<el-col :span="8">
								<div class="grid-content right">
									<el-button type="primary" @click="handleBackToList">返回列表</el-button>
									<!--<el-button>上一条</el-button>
									<el-button type="primary">下一条</el-button>-->
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
    export default {
		data() {
			var crumbs = [
			  {path:'/',name: '首页'},
			  {path:'/purchase',name: '开采购单'},
			  {path:'/purchase/view/',name: '开单记录'},
			];
			var tableData =[];
			var orderData={};
			var purchaseId='';
			return {
				crumbs,
				tableData,
                orderData,
                purchaseId
			}
		},
		methods: {
            handleBackToList(){
                this.$router.push({ path: '/purchase' });
            },
            handleSubmitPO(){
                this.$router.push({ path: '/purchase' });
            },
            handleExport(){
                utils.export('/pms/purchase/order/show/export.do',{"purchaseId":this.purchaseId})
            },
            handlePrint(){
                this.$router.push({ name: 'purchasePrint',params: { id: this.purchaseId }})
            },
            fetchData(){
                let requestData =  { "purchaseId":this.purchaseId} ;
                this.$http({
                    url:'/pms/purchase/order/show.do',
                    method:'POST',
                    body:{requestData:JSON.stringify(requestData)},
                    emulateJSON:true
                }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsPurchaseVo.pmsPurchaseDetailVos;
                        this.orderData.createUserName = data.result.pmsPurchaseVo.createUserName;
                        this.orderData.purchaseNo = data.result.pmsPurchaseVo.purchaseNo;
                        this.orderData.purchaseRemark = data.result.pmsPurchaseVo.purchaseRemark;
                        this.orderData.createTime = data.result.pmsPurchaseVo.createTime;
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
            this.purchaseId =this.$route.params.id;
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>