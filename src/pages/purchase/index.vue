<style lang="less" scoped>
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
					<el-button type="orange" @click="onCreatePO">开采购单</el-button>
				</div>
				<el-table v-loading="loading" element-loading-text="玩命加载中" :data="tableData" height="442" border style="width:100%">
					<el-table-column  label="序号" width="70" inline-template>
						<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
					</el-table-column>
					<el-table-column  prop="purchaseNo" label="采购单号" min-width="120"></el-table-column>
					<el-table-column   prop="createTime" label="开单日期" min-width="120" inline-template>
						<span>{{row.createTime|moment}}</span>
					</el-table-column>
					<el-table-column prop="createUserName" label="开单人" min-width="120"></el-table-column>
					<el-table-column prop="receiptStatus" label="状态" min-width="100" inline-template>
						<el-tag :type="row.receiptStatus == 0 ? 'primary' : 'success'" close-transition>{{row.receiptStatus == 0 ? '未收货' : row.status == 1 ? '已发货未收货' : '已收货'}}</el-tag>
					</el-table-column>
					<el-table-column inline-template :context="_self" label="操作" min-width="120">
						<span>
							<el-button type="primary" size="small" v-if="row.receiptStatus != 0" @click="handleView(row.purchaseId)">查看</el-button>
							<el-button type="primary" size="small" v-if="row.receiptStatus == 0" @click="handleEdit(row.purchaseId)">编辑</el-button>
							<el-button type="primary" size="small" v-if="row.receiptStatus == 0" @click="handleDel(row.purchaseId)">删除</el-button>
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
			<span class="what_onCreatePO" @click="showDialog">如何开采购单？</span>
		</div>
	</common-layout>
	<el-dialog v-model="dialogVisible" title="帮助" @close="closeDialog" size="large">
		<div class="dialogContent">
		<div class="dialog">
			<h1>如何开采购单？</h1>
			<h3><span class="h3Tips">1</span>第一步：点击“<el-button size="small" type="orange">开采购单</el-button>”进入>开单页；</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/caigou1.png">
			</div>
			<h3><span class="h3Tips">2</span>第二步：添加此次所需要采购的物料和数量。</h3>
			<div class="centent text">
				<img src="http://kd-oss.oss-cn-hangzhou.aliyuncs.com/image/kdrmspms/caigou2.png">
				<p class="function mt20"><span class="blue">|&nbsp;方法1：</span>点击“<el-button size="small" type="primary" icon="plus">添加物料</el-button>”在物料列表中直接选中自己需要采购的物料（推荐使用）。</p>
				<p class="function"><span class="blue">|&nbsp;方法2：</span>点击“<el-button size="small" type="primary">导入</el-button>”下载EXCEL模板，填入物料批量上传。</p>
				<p class="function"><span class="blue">|&nbsp;方法3：</span>直接在列表中一个个添加（适用于采购物料较少的情况）。</p>
			</div>
			<h3><span class="h3Tips">3</span>第三步：完成下单</h3>
			<div class="centent text">
				<p>完成下单后，系统会自动生成一个采购单号，采购单号规则为餐厅名称前三位首写字母+日期+三位编号，如：“肯打鸡餐厅17年1月1日开第一个单，应该为KDG-170101-001。”（采购单只有未收货之前可以编辑，收完货则不可再编辑。）</p>
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
			  {path:'/purchase',name: '开采购单'},
			];
			var formSearch = {
			  date:[],
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
              this.$router.push({ name: 'purchaseView',params: { id: id }})
		  },
          handleEdit(id) {
              this.$router.push({ name: 'purchaseEdit',params: { id: id }})
		  },
		  handleDel(id) {
		      let requestData ={purchaseId:id}
              this.$confirm('确认删除该采购单?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  this.$http({
                      url:'/pms/purchase/order/delete.do',
                      method:'POST',
                      body:{requestData:JSON.stringify(requestData)},
                      emulateJSON:true
                  }).then((res)=>res.body).then((data)=> {
                      if (data.code == 200) {
                          this.$message({
                              message: '删除成功',
                              type: 'success'
                          });
                          this.fetchData();
                      }else{
                          this.$message({
                              message: data.message,
                              type: 'warning'
                          });
                      }
                  })
              }).catch(() => {
              });
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
			return row.receiptStatus === value;
		  },
		  fetchData(){
		        this.loading = true;
                let requestData = {"filter": this.formSearch.purchaseno, "pageNo": this.pageData.pageNo, "pageSize": this.pageData.pageSize};
              requestData.startTime = this.formSearch.date.length >0 && this.formSearch.date[0]?moment(this.formSearch.date[0]).format('YYYY-MM-DD'):'';
              requestData.endTime = this.formSearch.date.length >1 && this.formSearch.date[1]?moment(this.formSearch.date[1]).format('YYYY-MM-DD'):'';
              this.$http({
			        url:'/pms/purchase/order/list.do',
				    method:'POST',
				    body:{requestData:JSON.stringify(requestData)},
				    emulateJSON:true
			    }).then((res)=>res.body).then((data)=> {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsPurchaseOrderVos;
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