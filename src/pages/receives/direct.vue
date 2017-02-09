<style lang="less" scoped>
	.el-tabs{
		display: block;
	}
	.search-bar{
		padding-top:0;
		.el-button{
			float: left;
		}
		.form-inline{
			float: right;
		}
	}

</style>
<template>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<div class="tabs-bar">
				<el-tabs type="card" @tab-click="handleChangeTab" active-name="2">
					<el-tab-pane label="根据采购单收货" name="1"></el-tab-pane>
					<el-tab-pane label="直接新增收货单" name="2"></el-tab-pane>
				</el-tabs>
			</div>
			<div class="search-bar clearfix">
				<el-button type="orange" @click="createRO">新增收货单</el-button>
				<el-form :inline="true" :model="formSearch" class="form-inline">
					<el-form-item>
						<el-date-picker
								v-model="formSearch.date"
								type="daterange"
								align="right"
								placeholder="选择收货日期范围"
								:picker-options="pickerOptions"
								style="width: 220px">
						</el-date-picker>
					</el-form-item>
					<el-form-item>
						<el-input v-model="formSearch.purchaseno" placeholder="请输入采购单号"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="table-content">
				<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData" height="442" border style="width:100%">
					<el-table-column  label="序号" width="70" inline-template>
						<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
					</el-table-column>
					<el-table-column prop="purchaseNo" label="采购单号" min-width="150"></el-table-column>
					<el-table-column prop="receiveTime" label="收货日期" min-width="120" inline-template>
						<span>{{row.receiveTime|moment}}</span>
					</el-table-column>
					<el-table-column  label="收货人" min-width="120" inline-template>
						<span>{{row.receiverName?row.receiverName:'--'}}</span>
					</el-table-column>
					<el-table-column prop="receiptStatus" label="状态" min-width="100" inline-template>
						<el-tag :type="row.receiptStatus == 0 ? 'primary' : 'success'" close-transition>{{row.receiptStatus == 0 ? '未收货' : row.status == 1 ? '已发货未收货' : '已收货'}}</el-tag>
					</el-table-column>
					<el-table-column inline-template :context="_self" label="操作" min-width="100">
						  <span>
							<el-button type="primary" size="small" @click="handleView(row.receiptId)">查看</el-button>
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
</template>
<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    export default {
		data() {
			var crumbs = [
			  {path:'/',name: '首页'},
			  {path:'/receives/direct',name: '直接新增收货单'},
			];
			var formSearch = {
			  date:'',
			  status: '',
			  purchaseno: ''
			};
			var tableData =[];
			var pickerOptions ={
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
			};
            var pageData={
                pageNo:1,
                pageSize:10,
                totalCount:0,
                totalPage:1,
            }
			return {
				crumbs,
				formSearch,
				tableData,
				pickerOptions,
                pageData,
                loading:true
			}
		},
		methods: {
		  /*提交列表查询*/
		  createRO() {
              this.$router.push({ path: '/receives/direct/create'})
		  },
            onSubmit() {
                this.fetchData();
            },
	        handleView(id) {
	            this.$router.push({ name: 'receivesView',params: { id: id,source:2 }})
	        },
		  /*分页回调*/
	        handleSizeChange(val) {
	            this.pageData.pageSize =val;
	            this.fetchData()
	        },
	        handleCurrentChange(val) {
	            this.pageData.pageNo =val;
	            this.fetchData()
	        },
			/*表格过滤列回调*/
	        filterStatus(value, row) {
	            return row.receiptStatus === value;
	        },
	        fetchData(){
	            this.loading =true;
	            let requestData = {"filter": this.formSearch.purchaseno, "pageNo": this.pageData.pageNo, "pageSize": this.pageData.pageSize};
                requestData.startTime = this.formSearch.date.length >0 && this.formSearch.date[0]?moment(this.formSearch.date[0]).format('YYYY-MM-DD'):'';
                requestData.endTime = this.formSearch.date.length >1 && this.formSearch.date[1]?moment(this.formSearch.date[1]).format('YYYY-MM-DD'):'';
                this.$http({
	                url:'/pms/receipt/direct/list.do',
	                method:'POST',
	                body:{requestData:JSON.stringify(requestData)},
	                emulateJSON:true
	            }).then((res)=>res.body).then((data)=> {
	                if (data.code == 200) {
	                    this.tableData = data.result.pmsReceiptOrderVos;
	                    this.pageData.pageNo = data.result.pageNo;
	                    this.pageData.pageSize = data.result.pageSize;
	                    this.pageData.totalCount = data.result.totalCount;
	                    this.pageData.totalPage = data.result.totalPage;
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
		  /*TABS页面切换回调*/
		  handleChangeTab(tab, event) {
			  if(tab.name ==1){
                  this.$router.push({ path: '/receives' })
			  }
		  }
		},
        created(){
            this.fetchData()
        },
        computed: mapState({user: state => state.user}),
    }
</script>