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
							<el-col :span="12"><div class="grid-content left">收货记录</div></el-col>
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
						<el-button type="primary" @click="handleEdit">编辑</el-button>
						<el-button  @click="handleExport">导出</el-button>
						<el-button  @click="handlePrint">打印</el-button>
					</div>
					<el-table :data="tableData" height="380"  border style="width:100%">
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
			  {path:'/receives',name: '收货单'},
			  {path:'/receives/view/',name: '收货记录'},
			];
			var tableData =[];
			var orderData={};
			var receiptId='';
			var source=1;
			return {
				crumbs,
				tableData,
                orderData,
                receiptId,
                source,
			}
		},
		methods: {
            handleBackToList(){
                if(this.source ==1){
                    this.$router.push({ path: '/receives' });
                }else{
                    this.$router.push({ path: '/receives/direct' });
                }

            },
            handleExport(){
                utils.export('/pms/receipt/order/detail/export.do',{"receiptId":this.receiptId})
            },
            handlePrint(){
                this.$router.push({ name: 'receivesPrint',params: { id: this.receiptId }})
            },
            handleEdit(){
                this.$router.push({ name: 'receivesEdit',params: { id: this.receiptId,source:this.source }})
            },
            fetchData(){
                let requestData =  { "receiptId":this.receiptId} ;
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
                })
            }

		},
        created() {
            this.receiptId =this.$route.params.id;
            this.source =this.$route.params.source;
            this.fetchData()
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>