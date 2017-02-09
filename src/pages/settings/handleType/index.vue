<template>
<div>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<div class="search-bar">
				<el-form :inline="true" class="demo-form-inline">
					<el-form-item>
						<el-input v-model="filter" placeholder="请输入类别名称/简拼"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="refresh">查询</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="table-content">
				<div class="button-bar">
					<el-button type="orange" @click="addMateriel">新增类别</el-button>
					<el-button type="primary" @click="deleteListMateriel">删除</el-button>
				</div>
				<el-table :data="materielData" height="440" border style="width:100%" 
				@selection-change="handleSelectionChange">
					<el-table-column
					      type="selection"
					      width="55">
				    </el-table-column>
					<el-table-column  label="序号" width="70" inline-template>
						<span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
					</el-table-column>
					<el-table-column prop="materialTypeName" label="类别名称" min-width="100"></el-table-column>
					<el-table-column prop="materialTypeShortName" label="类别简拼" min-width="60"></el-table-column>
					<el-table-column inline-template :context="_self" label="操作" min-width="110">
					  <span>
						<el-button type="primary" size="small" @click="materielInfo(row.materialTypeId)">修改</el-button>
						<el-button type="primary" size="small" @click="deleteMaterial(row.materialTypeId)">删除</el-button>
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
	<transition v-on:leave = "refresh">
		<router-view></router-view>
	</transition>
</div>
</template>
<script type="text/javascript">
	import { mapState } from 'vuex';

	export default {
		data(){
			return {
				crumbs:[
					{path:'/',name: '首页'},
					{path:'',name: '基础管理'},
					{path:'/settings/handleType/index',name: '类别管理'},
				],
				filter:'',
				materielData:[],
				pageData: {
					pageNo: 1,
					pageSize: 10,
					totalCount: 0,
					totalPage: 1
				},
				multipleSelection:[],
			}
		},
		methods:{
			/*分页回调*/
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageData.pageSize =val;
				this.refresh()
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.pageData.pageNo =val;
				this.refresh()
			},
			addMateriel(){
				this.$router.push({
					path:'/settings/handleType/add/index',
					query:{
						name:'add'
					}
				})
			},
			/*选择类别*/
			handleSelectionChange(val){
				this.multipleSelection = val;
			},
			deleteListMateriel(){
	            let that = this;
				let requestData = this.multipleSelection.map(function(item) {
					return item.materialTypeId;
				});
	            this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
					utils.post(urls.materialTypeDelete,requestData,that).then(function (data) {
						if (data.code == 200) {
							that.$message({
								message: "删除成功",
								type: 'success'
							});
							that.refresh();
						}
					});
	            },function(){})
			},
			/*修改类别*/
			materielInfo(materialTypeId){
				this.$router.push({
					path:'/settings/handleType/add/index',
					query:{
						name:'edit',
						materialTypeId:materialTypeId
					}
				})
			},
            /*删除类别*/
            deleteMaterial(materialTypeId){
                let that = this;
				let requestData = [materialTypeId];
                this.$confirm('确认删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
					utils.post(urls.materialTypeDelete,requestData,that).then(function (data) {
						if (data.code == 200) {
							that.$message({
								message: "删除成功",
								type: 'success'
							});
							that.refresh();
						}
					});
                },function(){})
            },
            refresh(){
                let requestData = {
					"pageNo": this.pageData.pageNo,
					"pageSize": this.pageData.pageSize,
					"filter": this.filter,
                };
                utils.post(urls.materialTypeList,requestData,this).then(function (data) {
					if (data.code == 200) {
						this.materielData = data.result.pmsMaterialTypeVos;
						this.pageData.pageNo = data.result.pageNo;
						this.pageData.pageSize = data.result.pageSize;
						this.pageData.totalCount = data.result.totalCount;
						this.pageData.totalPage = data.result.totalPage;
					}
				});
            }
		},
		created(){
			this.refresh()
		},
        computed: mapState({user: state => state.user}),
	}
</script>