<style lang="less" scoped>
    .pmsc-slide{
        position: fixed;
        top: 60px;
        bottom: 0;
        width: 100px;
        /*overflow: auto;
        overflow-x: hidden;*/
        z-index:11;
    }
    .pmsc-body{
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 110px;
        right: 0;
        overflow: auto;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar{width: 0;}
</style>
<template>
    <div>
        <!--公共头部-->
        <common-header></common-header>
        <!--公共侧边栏-->
        <div class="pmsc-slide">
            <common-navmenu></common-navmenu>
        </div>
        <div class="pmsc-body">
            <div class="pmsc-product">
                <!--公共面包屑-->
                <common-breadcrumb :crumbs ="crumbs"></common-breadcrumb>
                <!--使用内容分发slot定义正文-->
                <!--<transition  name="custom-classes-transition"
                             enter-active-class="animated fadeIn"
                             leave-active-class="animated fadeOut" mode="out-in">
                    <slot v-if="showbody" name="content">这里显示正文</slot>
                </transition>-->
                <slot name="content">这里显示正文</slot>
            </div>
        </div>

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

