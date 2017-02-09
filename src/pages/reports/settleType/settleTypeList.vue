<style lang="less" scoped>
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
				<div class="search-bar">
					<el-form :inline="true" :model="formSearch" class="demo-form-inline">
						<el-form-item>
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
					<el-table v-loading="loading" element-loading-text="玩命加载中" :data="list" height="442" border style="width:100%">
						<el-table-column  label="序号" width="70" inline-template>
							<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
						</el-table-column>
						<el-table-column prop="settlmentTypeName" label="支付方式" min-width="80"></el-table-column>
						<el-table-column prop="totalCount" label="数量" min-width="100"></el-table-column>
						<el-table-column prop="payment" label="结算金额" min-width="120" inline-template>
							<span>{{row.payment|number}}</span>
						</el-table-column>
						<el-table-column inline-template :context="_self" label="操作" min-width="80">
						  <span>
							<el-button @click="detail(row)" type="primary" size="small">查看</el-button>
						  </span>
						</el-table-column>
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
				list: [],
                totalAmount:0,
				pageData: {
					pageNo: 1,
					pageSize: 10,
					totalCount: 0,
					totalPage: 1
				},
                loading:true
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
			detail(row){
				this.$router.push({
					path: '/reports/settleType/settleTypeDetail',
					query: {
						id: row.settlmentTypeName
					}
				})
			},
			refresh(){
			    this.loading =true;
				let requestData = {
					"filter": this.formSearch.purchaseno,
					"pageNo": this.pageData.pageNo,
					"pageSize": this.pageData.pageSize,
				};
				requestData.startTime = this.formSearch.date.length >0 && this.formSearch.date[0]?moment(this.formSearch.date[0]).format('YYYY-MM-DD'):'';
				requestData.endTime = this.formSearch.date.length >1 && this.formSearch.date[1]?moment(this.formSearch.date[1]).format('YYYY-MM-DD'):'';
				utils.post(urls.settleType, requestData, this).then(function (data) {
					if (data.code == 200) {
						this.pageData.pageNo = data.result.pageNo;
						this.pageData.pageSize = data.result.pageSize;
						this.pageData.totalCount = data.result.totalCount;
						this.pageData.totalPage = data.result.totalPage;
						this.list = data.result.pmsSettlementTypeReportVos;
						this.totalAmount = data.result.totalAmount;
					}
                    this.loading =false;
				});
			},
            handleExport(){
                utils.export('/pms/report/pay/type/export.do',{"filter":this.formSearch.purchaseno,"startTime":this.formSearch.date.length >0 && this.formSearch.date[0]?moment(this.formSearch.date[0]).format('YYYY-MM-DD'):'',"endTime":this.formSearch.date.length >1 && this.formSearch.date[1]?moment(this.formSearch.date[1]).format('YYYY-MM-DD'):''})
            }
		},
		created(){
			this.refresh()
		},
		computed: mapState({user: state => state.user}),
	}
</script>