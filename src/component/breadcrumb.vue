<style lang="less" scoped>
    .el-breadcrumb{
        height: 60px;
        line-height: 60px;
        background-color: #fff;
        padding-left: 20px;
        font-size: 18px;
        margin-bottom: 10px;
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
