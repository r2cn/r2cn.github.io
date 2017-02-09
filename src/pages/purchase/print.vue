<style lang="less" scoped>
	.table-content{
		width: 800px;
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
</style>
<template>
	<div class="content">
		<div class="table-content">
			<div class="order-bar">
				<el-row>
					<el-col :span="12"><div class="grid-content left">采购单</div></el-col>
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
				<el-button  @click="handleBackToList">返回</el-button>
				<el-button  @click="handlePrint">打印</el-button>
			</div>
			<el-table :data="tableData"  border style="width:100%">
				<el-table-column type="index" label="序号" width="100"></el-table-column>
				<el-table-column prop="materialName" label="物料名称" min-width="150">
				</el-table-column>
				<el-table-column prop="materialTypeName" label="物料类别" min-width="150"></el-table-column>
				<el-table-column prop="purchaseCount" label="采购数量" min-width="200">
				</el-table-column>
				<el-table-column prop="materialUnitName" label="进货单位" min-width="120"></el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
		data() {
			var tableData =[];
			var orderData={};
			return {
				tableData,
                orderData
			}
		},
		methods: {
            fetchData(){
                let purchaseId =this.$route.params.id;
                let requestData =  { "purchaseId":purchaseId} ;
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
            },
            handleBackToList(){
                this.$router.push({ path: '/purchase' });
            },
            handlePrint(){
                window.print()
            },

		},
        created() {
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>