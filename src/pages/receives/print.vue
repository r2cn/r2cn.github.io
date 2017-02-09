<style lang="less" scoped>
	.table-content{
		width: 1200px;
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
					<el-col :span="12"><div class="grid-content left">收货单</div></el-col>
					<el-col :span="12">
						<div class="grid-content right">
							<el-row>
								<el-col :span="12">采购单号：{{orderData.purchaseNo}}</el-col>
								<el-col :span="12">开单时间：{{orderData.createTime|moment}}</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">收货时间：{{orderData.createTime}}</el-col>
							</el-row>
							<el-row>
								<el-col :span="24">开单人：{{orderData.createUserName}}</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="button-bar">
				<el-button  @click="handleBackToList">返回</el-button>
				<el-button  @click="handlePrint">打印</el-button>
			</div>
			<el-table  v-loading="loading" element-loading-text="玩命加载中" :data="tableData"  border style="width:100%">
				<el-table-column type="index" label="序" width="80"></el-table-column>
				<el-table-column prop="materialName" label="物料名称" min-width="100">
				</el-table-column>
				<el-table-column prop="materialTypeName" label="类别" min-width="100"></el-table-column>
				<el-table-column prop="purchasePrice" label="进价" min-width="100" inline-template>
					<span>{{row.purchasePrice|number}}</span>
				</el-table-column>
				<el-table-column prop="purchaseCount" label="采购数量" min-width="100"></el-table-column>
				<el-table-column prop="receivedCount" label="收货数量" min-width="100"></el-table-column>
				<el-table-column prop="materialUnitName" label="单位" min-width="80"></el-table-column>
				<el-table-column prop="totalFee" label="合计" min-width="120" inline-template>
					<span>{{row.totalFee|number}}</span>
				</el-table-column>
				<el-table-column prop="payStatus" label="是否付款" min-width="100" inline-template>
					<el-tag :type="row.payStatus == 0 ? 'primary' : 'success'" close-transition>{{row.payStatus == 0 ? '未付款' :  '已付款'}}</el-tag>
				</el-table-column>
				<el-table-column prop="purchaserName" label="采购员" min-width="120"></el-table-column>
				<el-table-column prop="supplierName" label="供应商" min-width="120"></el-table-column>
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
                orderData,
				loading:true
			}
		},
		methods: {
            fetchData(){
                this.loading =true;
                let receiptId =this.$route.params.id;
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
                        this.tableData=[];
                        this.$message({
                            message: data.message,
                            type: 'warning'
                        });
                    }
                    this.loading =false;
                })
            },
            handleBackToList(){
                this.$router.push({ path: '/receives' });
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