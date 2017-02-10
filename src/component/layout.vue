<style lang="less" scoped>
    .page{
        background: url(../img/bg.jpg) center top no-repeat;
    }
    .r2cn-menu{
        padding-top: 300px;
        background: url(../img/norules.png) no-repeat center bottom 96px;
    }
    .r2cn-body{
        width: 1104px;
        margin: 16px auto;
        min-height: 300px;
        padding: 9px 15px 20px;
    }
    ::-webkit-scrollbar{width: 0;}
</style>
<template>
    <div class="page">
        <!--公共头部-->
        <common-header>
            <div class="r2cn-menu" slot="navmenu">
                <common-navmenu></common-navmenu>
            </div>
        </common-header>
        <div class="r2cn-body">
            <div class="r2cn-main">
                <!--公共面包屑-->
                <common-breadcrumb :crumbs ="crumbs"></common-breadcrumb>
                <!--使用内容分发slot定义正文-->
                <slot name="content">这里显示正文</slot>
            </div>
        </div>
        <common-footer></common-footer>
    </div>
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
        //动画测试
        /*data(){
            var showbody =false;
            return {showbody}
        },*/
        mounted:function(){
            //动画测试
            //this.showbody =true;
        }
     }
</script>

