<style lang="less" scoped>
	.search-bar{
		.el-select{
			width: 110px;
		}
	}
	.button-bar{
		font-size: 14px;
		color: #475669;
		.orange{
			color: #ff6600;
			padding-left: 3px;
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
			<div class="search-bar">
				<el-form :inline="true" :model="formSearch" class="demo-form-inline">
					<el-form-item>
						<el-select v-model="formSearch.status" clearable  placeholder="状态" @change="onSubmit">
							<el-option label="未结清" value="0"></el-option>
							<el-option label="已结清" value="1"></el-option>
						</el-select>
					</el-form-item>
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
						<el-input v-model="formSearch.purchaseno" placeholder="请输入采购单号"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="table-content">
				<div class="button-bar">
					<el-row>
						<el-col :span="4">总计金额：<span class="orange">&yen;{{pmsSettlementAmountVo.totalPayment}}</span></el-col>
						<el-col :span="4">已付金额：<span class="orange">&yen;{{pmsSettlementAmountVo.payment}}</span></el-col>
						<el-col :span="4">未付金额：<span class="orange">&yen;{{pmsSettlementAmountVo.nonPayment}}</span></el-col>
					</el-row>
				</div>
				<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData" height="442" border style="width:100%">
					<el-table-column  label="序号" width="70" inline-template>
						<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
					</el-table-column>
					<el-table-column  prop="purchaseNo" label="采购单号" min-width="150"></el-table-column>
					<el-table-column  prop="payment" label="已付金额（元）" min-width="150" inline-template>
						<span>{{row.payment|number}}</span>
					</el-table-column>
					<el-table-column  prop="nonPayment" label="未付金额（元）" min-width="150" inline-template>
						<span>{{row.nonPayment|number}}</span>
					</el-table-column>
					<el-table-column  label="结算时间" min-width="150" inline-template>
						<span>{{row.settlementTime|moment}}</span>
					</el-table-column>
					<el-table-column prop="settlementStatus" label="状态" min-width="100" inline-template>
						<el-tag :type="row.settlementStatus == 0 ? 'primary' : 'success'" close-transition>{{row.settlementStatus == 0 ? '未结清' : '已结清'}}</el-tag>
					</el-table-column>
					<el-table-column inline-template :context="_self" label="操作" min-width="120">
						<span>
							<el-button type="orange" size="small" v-if="row.settlementStatus == 0" @click="handleCheckout(row.receiptId)">结算</el-button>
							<el-button type="primary" size="small" v-if="row.settlementStatus == 1" @click="handleView(row.receiptId)">查看</el-button>
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
			<span class="what_onCreatePO" @click="showDialog">如何结算？</span>
		</div>
	</common-layout>
	<el-dialog v-model="dialogVisible" title="帮助" @close="closeDialog" size="large">
		<div class="dialogContent">
		<div class="dialog">
			<h1>如何收货？</h1>
			<h3><span class="h3Tips">1</span>第一步：选择结算对象，点击“<el-button size="small" type="orange">结算</el-button>”进入>结算页面。</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/jiesuan1.png">
			</div>
			<h3><span class="h3Tips">2</span>第二步：确认物料、金额，选择支付方式支付。</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/jisuan2.png">
				<p class="function mt20"><span class="blue">|&nbsp;</span>实付金额默认需付金额，可根据实际情况修改，选择支付方式，自动提示添加供应商时添加的支付账号。</p>
			</div>
			<h3><span class="h3Tips">3</span>第三步：完成结算</h3>
			<div class="centent text">
				<p>所有物料都结算完后，点击确认，完成整笔订单的结算，可分批结算</p>
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
			  {path:'/checkout',name: '结算单'},
			];
			var formSearch = {
			  date:[],
			  status: '',
			  purchaseno: ''
			};
			var tableData =[];
			var pmsSettlementAmountVo ={};
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
                pmsSettlementAmountVo,
				pickerOptions,
                pageData,
                loading:true,
                dialogVisible:false,
			}
		},
		methods: {
			showDialog(){
				this.dialogVisible = true;
			},
			closeDialog(){
				this.dialogVisible = false;
			},
		  /*提交列表查询*/
		  onSubmit() {
			  this.fetchData();
		  },
		  onCreatePO() {
              this.$router.push({ path: '/purchase/create' })
		  },
		  handleView(id) {
              this.$router.push({ name: 'checkoutView',params: { id: id }})
		  },
          handleCheckout(id) {
              this.$router.push({ name: 'checkoutDetail',params: {id: id,role:"1"}})
		  },
		  /*分页回调*/
		  handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
              this.pageData.pageSize =val;
              this.fetchData()
		  },
		  handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
              this.pageData.pageNo =val;
              this.fetchData()
		  },
		  /*表格过滤列回调*/
		  filterStatus(value, row) {
			return row.settlementStatus === value;
		  },
		  fetchData(){
		        this.loading = true;
                let requestData = {"settlementStatus":this.formSearch.status,"filter": this.formSearch.purchaseno, "pageNo": this.pageData.pageNo, "pageSize": this.pageData.pageSize};
              requestData.startTime = this.formSearch.date.length >0 && this.formSearch.date[0]?moment(this.formSearch.date[0]).format('YYYY-MM-DD'):'';
              requestData.endTime = this.formSearch.date.length >1 && this.formSearch.date[1]?moment(this.formSearch.date[1]).format('YYYY-MM-DD'):'';
              this.$http({
			        url:'/pms/settlement/order/list.do',
				    method:'POST',
				    body:{requestData:JSON.stringify(requestData)},
				    emulateJSON:true
			    }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsSettlementVos;
                        this.pmsSettlementAmountVo = data.result.pmsSettlementAmountVo;
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
                    this.loading = false;
                })
		  }
		},
	    created(){
            this.fetchData()
	    },
        computed: mapState({
            user: state => state.user
        })
    }
</script>