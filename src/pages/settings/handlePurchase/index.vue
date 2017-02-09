<style lang="less" scoped>
    @import "../../../less/handlePurchase.less";
</style>
<template>
    <div>
        <common-layout :crumbs=crumbs>
            <div class="content" slot="content">
                <div class="search-bar">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item>
                            <el-input v-model="filter" placeholder="输入供应商或联系人"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="refresh">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="table-content">
                    <div class="button-bar">
                        <el-button type="orange" @click="addPurchase">新增供应商</el-button>
                        <el-button @click="handleExport">导出</el-button>
                    </div>
                    <el-table :data="tableData" height="440" border style="width:100%">
                        <el-table-column  label="序号" width="70" inline-template>
                            <span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
                        </el-table-column>
                        <el-table-column prop="supplierName" label="供应商名称" min-width="90"></el-table-column>
                        <el-table-column prop="supplierContact" label="联系人" min-width="80"></el-table-column>
                        <el-table-column prop="supplierMobile" label="联系电话" min-width="100"></el-table-column>
                        <el-table-column prop="supplierAddress" label="联系地址" min-width="100"></el-table-column>
                        <el-table-column prop="supplierUseStatus" label="状态" min-width="70"
                                         :filters="[{ text: '未启用', value: 0 }, { text: '启用', value: 1 }]"
                                         :filter-method="filterStatus"
                                         inline-template>
                            <el-tag :type="row.supplierUseStatus == 0 ? 'primary' : 'success'" close-transition>
                                {{row.supplierUseStatus == 0 ? '未启用' : '启用中'}}
                            </el-tag>
                        </el-table-column>
                        <el-table-column inline-template :context="_self" label="操作" min-width="120">
                            <span>
							    <el-button type="primary" size="small" @click="purchaseInfo(row.supplierId)">查看</el-button>
							    <el-button type="primary" size="small" @click="deletePurchase(row.supplierId)">删除</el-button>
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
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            var tableData = [];
            var crumbs = [
                {path: '/', name: '首页'},
                {path: '', name: '基础管理'},
                {path: '/settings/handlePurchase/index', name: '供应商管理'}
            ];
            return {
                crumbs,
                tableData,
                filter:'',
                pageData: {
                    pageNo: 1,
                    pageSize: 10,
                    totalCount: 0,
                    totalPage: 1
                }
            }
        },
        methods: {
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
            handleExport(){
                utils.export('/pms/management/supplier/export.do',{"filter":this.filter})
            },
            /*新增供应商*/
            addPurchase(){
                this.$router.push({
                    path:'/settings/handlePurchase/add/index',
                    query:{
                        name:'add'
                    }
                })
            },
            /*供应商信息*/
            purchaseInfo(supplierId){
                this.$router.push({
                    path:'/settings/handlePurchase/add/index',
                    query:{
                        name:'info',
                        supplierId:supplierId
                    }
                })
            },
            /*删除供应商*/
            deletePurchase(supplierId){
                let that = this;
                this.$confirm('确认删除该供应商?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function(){
                    let requestData = {"supplierId":supplierId};
                    utils.post(urls.supplierDelete,requestData,that).then(function (data) {
                        if (data.code == 200) {
                            that.$message({
                                message: "删除成功",
                                type: 'success'
                            });
                            that.refresh();
                        }
                    })
                },function(){})
            },
            /*表格过滤列回调*/
            filterStatus(value, row) {
                return row.supplierUseStatus === value;
            },
            refresh(){
                let requestData = {
                    "filter": this.filter,
                    "pageNo": this.pageData.pageNo,
                    "pageSize": this.pageData.pageSize,
                };
                utils.post(urls.supplierList,requestData,this).then(function (data) {
                    if (data.code == 200) {
                        this.tableData = data.result.pmsSupplierVos;
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