<style lang="less" scoped>
    @import "../less/navmenu.less";
</style>
<template>
    <el-menu mode="horizontal" unique-opened  menu-trigger="hover" :default-active="activePath" class="el-menu-vertical" :router=true theme="dark" @open="handleOpen"
             @close="handleClose">
        <div v-for="(item, index) in menus" v-if="!!item.auth" class="items-wrap">
            <el-menu-item :index="item.path" v-if="!item.group">
                <i :class="item.icon"></i>{{item.name}}
            </el-menu-item>
            <el-submenu :index="item.path" v-if="item.group" :class="{'is-active':item.isActive}">
                <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
                <el-menu-item v-for="groupItem in item.group" :index="groupItem.path">
                    {{groupItem.name}}
                </el-menu-item>
            </el-submenu> 
        </div>
    </el-menu>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            /*当前激活的菜单*/
            var activePath = '/';
            return {
                activePath,
                menus: [
                    {path: '/', name: '首页', icon: 'icon-toolbar_ico_home',pmsModuleCode:'PMS001',auth:true},
                    {path: '/purchase', name: '开采购单', icon: 'icon-toolbar_ico_caigoudan',pmsModuleCode:'PMS002',auth:true},
                    {path: '/receives', name: '收货', icon: 'icon-toolbar_ico_shouhuodan',pmsModuleCode:'PMS003',auth:true},
                    {path: '/checkout', name: '结算', icon: 'icon-toolbar_ico_jiesuandan',pmsModuleCode:'PMS004',auth:true},
                    {
                        path: '/reports', name: '查看报表', icon: 'icon-toolbar_ico_baobiao',
                        group:[
                            {path: '/reports/settleOrder/settleOrderList', name: '结算单汇总'},
                            {path: '/reports/settleType/settleTypeList', name: '结算方式汇总'},
                            {path: '/reports/materialReports/materialList', name: '物料类别汇总'},
                            {path: '/reports/purReports/purchaseList', name: '采购汇总'},
                            {path: '/reports/settlement/settlementList', name: '结算对象汇总'},
                        ],
                        pmsModuleCode:'PMS005',
                        auth:true,
                        isActive:false
                    },
                    {
                        path:'/settings',name: '基础设置', icon: 'icon-toolbar_ico_setting',
                        group: [
                            {path: '/settings/handlePurchase/index', name: '供应商管理'},
                            {path: '/settings/handleMateriel/index', name: '物料管理'},
                            {path: '/settings/handleUnit/index', name: '单位管理'},
                            {path: '/settings/handleType/index', name: '类别管理'},
                            {path: '/settings/handleRole/index', name: '岗位管理'},
                            {path: '/settings/handleUser/index', name: '员工管理'},
                        ],
                        pmsModuleCode:'PMS006',
                        auth:true,
                        isActive:false
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleUserRole(){
                let modules = this.user.pmsModuleList;
                var that =this;
                this.menus.forEach(function(n,key){
                    let firstIndex = modules.findIndex(module => module.pmsModuleCode == n.pmsModuleCode);
                    if(firstIndex == -1){
                        n.auth =false;
                    }
                })
            },
            handleActiveMenu(){
                var that = this;
                if (this.$route.path == '/') {
                    this.activePath = '/';
                } else {
                    var parent = this.$route.path.substring(0, this.$route.path.lastIndexOf("/")+1);
                    for (var n of this.menus){
                        //this.menus.forEach(function (n, key) {
                        if(n.group){
                            for (var data of n.group){
                                if( data.path.indexOf(parent) > -1){
                                    that.activePath = data.path;
                                    n.isActive =true;
                                    break;
                                }
                            }

                        }else{
                            if (n.path !='/' ) {
                                if(parent !=''){
                                    if(parent.indexOf(n.path) > -1 || that.$route.path == n.path){
                                        that.activePath = n.path;
                                        break;
                                    }
                                }else if(that.$route.path == n.path){
                                    that.activePath = n.path;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },
        created: function () {
            this.handleUserRole();
            this.handleActiveMenu();
        },
        computed: mapState({
            user: state => state.user
        })
    }
</script>