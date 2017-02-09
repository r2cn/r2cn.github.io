<style lang="less" scoped>
</style>
<template>
    <div>
        <common-layout :crumbs=crumbs>
            <div class="content" slot="content">
                <!--<div class="search-bar">
                    <el-form :inline="true" class="demo-form-inline">
                        <el-form-item>
                            <el-input v-model="rolename" placeholder="请输入姓名/账号/手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="refresh">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>-->
                <div class="table-content">
                    <div class="button-bar">
                        <el-button type="orange" @click="addRole">添加</el-button>
                    </div>
                    <el-table :data="roleList" height="440" border style="width:100%">
                        <el-table-column  label="序号" width="70" inline-template>
                            <span>{{$index+1+pageData.pageSize*(pageData.pageNo-1)}}</span>
                        </el-table-column>
                        <el-table-column prop="roleName" label="岗位名称" min-width="80"></el-table-column>
                        <el-table-column prop="roleDesc" label="权限说明" min-width="100"></el-table-column>
                        <el-table-column inline-template :context="_self" label="操作" min-width="80">
						  <span>
							<el-button type="primary" size="small" @click="roleInfo(row)">查看</el-button>
                              <!--<el-button type="primary" size="small" @click="deleteRole(row.roleId)">删除</el-button>-->
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
    import {mapState} from 'vuex'
    export default {
        data() {
            var crumbs = [
                {path: '/', name: '首页'},
                {path: '', name: '基础管理'},
                {path: '/settings/handleRole/index', name: '岗位管理'}
            ];
            return {
                crumbs,
                rolename: '',
                roleList: [],
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
            addRole(){
                this.$router.push({
                    path: '/settings/handleRole/add/index',
                    query: {
                        name: 'add'
                    }
                })
            },
            roleInfo(role){
                this.$router.push({
                    path: '/settings/handleRole/add/index',
                    query: {
                        name: 'info',
                        roleId:role.roleId
                    }
                })
            },
            onSubmit(){

            },
            /*分页回调*/
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            /*删除岗位*/
            deleteRole(roleId){
                let that = this;
                this.$confirm('确认删除吗').then(function () {
                    let requestData = {"roleIdStr": roleId};
                    utils.postJSON(urls.roleDelete, requestData, that).then(function (data) {
                        if (data.code == 200) {
                            that.$message({
                                message: "删除成功",
                                type: 'success'
                            });
                            that.refresh();
                        }
                    })
                }, function () {
                })
            },
            refresh(){
                let requestData = {
                    "roleName": this.roleName ? this.roleName : '',
                    "pageNo": this.pageData.pageNo,
                    "pageSize": this.pageData.pageSize,
                };
                utils.postJSON(urls.roleList, requestData, this).then(function (data) {
                    if (data.code == 200) {
                        this.roleList = data.result.roleList;
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