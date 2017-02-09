<style lang="less" scoped>
	.search-bar{
		.title{
			font-size: 14px;
			color: #475669;
			float: left;
			line-height:36px;
		}
	}
	.form-search{
		float: right;
	}
	.rowSpan span{
		line-height: 60px;
	}
	.button-bar{
		.el-button{
			float: right;
		}
		.el-row{
			float: left;
			line-height:36px;
		}
	}
</style>
<template>
	<div>
		<common-layout :crumbs=crumbs>
			<div class="content" slot="content">
				<div class="search-bar clearfix">
					<div class="title">{{paymentType}}支付的明细</div>
					<el-form :inline="true" :model="formSearch" class="form-search">
						<el-form-item label="结算时间" labelWidth="100px">
							<el-date-picker
									v-model="formSearch.date"
									type="daterange"
									align="right"
									placeholder="选择日期范围"
									:picker-options="pickerOptions"
									style="width: 220px">
							</el-date-picker>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
					</el-form>
				</div>
				<div class="table-content">
					<div class="button-bar">
						<el-button @click="handleExport">导出</el-button>
						<!--<el-button>打印</el-button>-->
						<el-row>
							<el-col :span="24">总计：<span class="orange">&yen;{{totalAmount|number}}</span></el-col>
						</el-row>
					</div>
					<el-table :data="detail" height="442" border style="width:100%">
						<el-table-column  label="序号" width="70" inline-template>
							<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
						</el-table-column>
						<el-table-column prop="purchaseNo" label="采购单号" min-width="120"></el-table-column>
						<el-table-column prop="supplierName" label="供应商名称" min-width="100" v-if="paymentType !='现金'"></el-table-column>
						<el-table-column prop="payment" label="结算金额" min-width="120" inline-template>
							<span>{{row.payment|number}}</span>
						</el-table-column>
						<el-table-column label="结算时间" min-width="120" inline-template>
							<span>{{row.settlementTime | moment}}</span>
						</el-table-column>
						<el-table-column prop="settlementUserName" label="结算人" min-width="80"></el-table-column>
						<el-table-column label="户名" min-width="80" v-if="paymentType !='现金'" inline-template>
							<span>{{row.settlementAccountName !=''?row.settlementAccountName:'--'}}</span>
						</el-table-column>
						<el-table-column label="账号" min-width="80" v-if="paymentType !='现金'" inline-template>
							<span>{{row.settlementAccountNumber !=''?row.settlementAccountNumber:'--'}}</span>
						</el-table-column>
						<el-table-column prop="settlementReceiver" label="结算对象" min-width="100" inline-template v-if="paymentType =='现金'">
							<el-tag :type="row.settlementReceiver == 0 ? 'primary' : 'success'" close-transition>{{row.settlementReceiver == 0 ? '采购员' : '供应商'}}</el-tag>
						</el-table-column>
						<el-table-column prop="receiverName" label="收款人" min-width="100" v-if="paymentType =='现金'"></el-table-column>
					</el-table>
					<div class="pagination">
						<el-pagination
								@size-change="handleSizeChange"
								@current-change="handleCurrentChange"
								:current-page="pageData.pageNo"
								:page-sizes="[10, 20, 30, 40]"
								:page-size="pageData.pageSize"
								layout="total, sizes, prev, pager, next, jumper"
								:total="pageData.totalCount">
						</el-pagination>
					</div>
				</div>
			</div>
		</common-layout>
		<transition v-on:leave="refresh">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	import moment from 'moment';
	export default {
		data() {
			var crumbs = [
				{path: '/', name: '首页'},
				{path: '', name: '报表'},
				{path: '/reports/settleType/settleTypeList', name: '结算方式汇总'},
				{path: '/reports/settleType/settleTypeDetail', name: '结算方式详情'},
			];
			return {
				crumbs,
				formSearch: {
					date: [],
					status: '',
					purchaseno: ''
				},
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近一个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近三个月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				filter: '',
				detail: [],
                totalAmount:0,
				pageData: {
					pageNo: 1,
					pageSize: 10,
					totalCount: 0,
					totalPage: 1
				},
				paymentType:''
			}
		},
		methods: {
			onSubmit() {
				this.refresh();
			},
			/*分页回调*/
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageData.pageSize = val;
				this.refresh()
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.pageData.pageNo = val;
				this.refresh()
			},
			refresh(){
				let requestData = {
					"pageNo": this.pageData.pageNo,
					"pageSize": this.pageData.pageSize,
					"filter": this.paymentType
				};
				utils.post(urls.settleTypeDetail, requestData, this).then(function (data) {
					if (data.code == 200) {
						this.pageData.pageNo = data.result.pageNo;
						this.pageData.pageSize = data.result.pageSize;
						this.pageData.totalCount = data.result.totalCount;
						this.pageData.totalPage = data.result.totalPage;
						this.detail = data.result.pmsSettlementTypeReportDetailVos;
						this.totalAmount = data.result.totalAmount;
					}
				});
			},
            handleExport(){
                utils.export('/pms/report/pay/type/detail/export.do',{"filter":encodeURIComponent(this.paymentType)})
            }
		},
		created(){
		    this.paymentType = this.$route.query.id
			this.refresh();
		},
		computed: mapState({user: state => state.user}),
	}
</script>