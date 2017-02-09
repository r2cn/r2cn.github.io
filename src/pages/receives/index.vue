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
	.what_onCreatePO{
		position: absolute;
		right: 8px;
		top: 0;
		color: #ff5f00;
		font-size: 16px;
		cursor: pointer;
		line-height: 60px;
	}
	.dialogContent{
		max-height: 500px;
		overflow: auto;
	}
	.dialog{
		max-width: 660px;
	    margin: 0 auto;
		h1{
			font-size: 20px;
		    text-align: center;
		    margin-bottom: 40px;
		    color: #333;
		    font-weight: bold;
		}
		h3{
			margin-bottom: 15px;
			font-weight:bold;
			color:#333;
			font-size:16px;
			.h3Tips{
				display: inline-block;
				width: 23px;
				height: 23px;
				line-height: 23px;
				margin-right: 10px;
				background-color: #20a0ff;
				border-radius:100%;
				text-align:center;
				color:#fff;
			}
		}
		.function{
			margin-bottom: 15px;
			.blue{
				color:#20a0ff;
			}
		}
		button{
			margin:0 5px;
		}
		.text{
			padding:0 35px;
			line-height: 25px;
		}
		.centent{
			margin-bottom: 40px;
		}
		img{
			min-height:221px;
		}
		.mt20{
			margin-top:20px;
		}
	}
</style>
<template>
<div>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<div class="tabs-bar">
				<el-tabs type="card" @tab-click="handleChangeTab" active-name="1">
					<el-tab-pane label="根据采购单收货" name="1"></el-tab-pane>
					<el-tab-pane label="直接新增收货单" name="2"></el-tab-pane>
				</el-tabs>
			</div>
			<div class="search-bar clearfix">
				<el-form :inline="true" :model="formSearch" class="demo-form-inline">
					<el-form-item>
						<el-date-picker
								v-model="formSearch.date"
								type="daterange"
								align="right"
								placeholder="选择开单日期范围"
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
					<el-table-column prop="createTime" label="开单日期" min-width="120" inline-template>
						<span>{{row.createTime|moment}}</span>
					</el-table-column>
					<el-table-column prop="createUserName" label="开单人" min-width="100"></el-table-column>
					<el-table-column  prop="receiveTime" label="收货日期" min-width="120" inline-template>
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
							<el-button type="primary" size="small" v-if="row.receiptStatus == 2" @click="handleView(row.receiptId)">查看</el-button>
							<el-button type="orange" size="small" v-if="row.receiptStatus == 0||row.receiptStatus == 1" @click="handleReceive(row.purchaseId)">收货</el-button>
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
			<span class="what_onCreatePO" @click="showDialog">如何收货？</span>
		</div>
	</common-layout>
	<el-dialog v-model="dialogVisible" title="帮助" @close="closeDialog" size="large">
		<div class="dialogContent">
		<div class="dialog">
			<h1>如何收货？</h1>
			<h3><span class="h3Tips">1</span>第一步：点击“<el-button size="small" type="orange">收货</el-button>”进入>开单页；</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/shouhuo1.png">
			</div>
			<h3><span class="h3Tips">2</span>第二步：确认收货数量、价格等信息。</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/shouhuo2.png">
				<p class="function mt20"><span class="blue">|&nbsp;</span>a.首次收货需要输入单价、采购员、供应商（采购员工、供应商默认为系统的），下次同样物料收货，单价、采购员和供应商信息默认上一次填写的。</p>
				<p class="function"><span class="blue">|&nbsp;</span>b.收货数量可根据实际情况调整，物料也可以增加。</p>
			</div>
			<h3><span class="h3Tips">3</span>第三步：确认收货</h3>
			<div class="centent text">
				<p>点击“确认收货”后，即可开始结算，结算前收货数据可以编辑，结算完，收货数据不可编辑。<br/>
				注：如果没有开采购单直接新增收货单，点击“直接新增收货单”直接创建（流程参考收货）。</p>
			</div>
		</div>
		</div>
	</el-dialog>
</div>
</template>
<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    export default {
		data() {
			var crumbs = [
			  {path:'/',name: '首页'},
			  {path:'/receives',name: '收货单'},
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
				loading:true,
				dialogVisible:false,
			}
		},
		methods: {
		  /*提交列表查询*/
		  showDialog(){
		  	this.dialogVisible = true;
		  },
		  closeDialog(){
		  	this.dialogVisible = false;
		  },
		  onSubmit() {
              this.fetchData();
		  },
            handleView(id) {
	            this.$router.push({ name: 'receivesView',params: { id: id,source:1}})
	        },
	        handleReceive(id) {
	            this.$router.push({ name: 'receivesPO',params: { id: id }})
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
	                url:'/pms/receipt/order/list.do',
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
			  if(tab.name ==2){
                  this.$router.push({ path: '/receives/direct' })
			  }
		  }
		},
        created(){
            this.fetchData()
        },
        computed: mapState({user: state => state.user}),
    }
</script>