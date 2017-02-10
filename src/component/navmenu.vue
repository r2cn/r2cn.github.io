<style lang="less" scoped>
    .el-menu-horizontal{
        width: 1136px;
        margin: 0 auto;
    }
    .el-menu--dark{
        background-color: transparent;
    }
</style>
<template>
    <el-menu theme="dark"  mode="horizontal" unique-opened  :default-active="activePath" class="el-menu-horizontal" :router=true @open="handleOpen">
        <div v-for="(item, index) in menus"  class="items-wrap">
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
    export default {
        data(){
            /*当前激活的菜单*/
            var activePath = '/talent';
            return {
                activePath,
                menus: [
                    {
                        path: '/talent', name: '天赋模拟器', icon: 'el-icon-setting',
                        group:[
                            {path: '/talent/knight', name: '骑士'},
                            {path: '/talent/elf', name: '精灵'},
                            {path: '/talent/rangers', name: '游侠'},
                            {path: '/talent/assassin', name: '刺客'},
                            {path: '/talent/summoner', name: '召唤师'}
                        ]
                    },
                    {
                        path:'/special',name: '天赋推荐', icon: 'el-icon-star-on',
                        group:[
                            {path: '/talent/knight/id/1', name: '狂暴骑士'},
                            {path: '/talent/knight/id/2', name: '平衡骑士'},
                            {path: '/talent/knight/id/3', name: '防御骑士'},
                            {path: '/talent/elf/id/1', name: '光明精灵'},
                            {path: '/talent/elf/id/2', name: '平衡精灵'},
                            {path: '/talent/elf/id/3', name: '黑暗精灵'},
                        ]
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
            }
        },
        created: function () {

        }
    }
</script>