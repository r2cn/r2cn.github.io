<style lang="less" scoped>
    .el-breadcrumb{
        height: 32px;
        line-height: 32px;
        background-color: rgba(23,24,25,0.8);
        padding-left: 20px;
        font-size: 12px;
    }
</style>
<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in crumbs" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
     export default {
        props: {
            crumbs: {
                type: Array,
                default: function(){
                    return [{path:'/',name: '首页'}]
                }
            }
        },
        created:function(){

        }
     }
</script>
