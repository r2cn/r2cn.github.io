<style lang="less" scoped>
	.header {
		color: #fff;
		position: relative;
		text-align: center;
		background: url(../img/bg.jpg) center top no-repeat;
		.left {
			float: left;
			padding-left: 218px;
		}
		.center {
			position: absolute;
			left: 50%;
			display: block;
			width: 143px;
			height: 127px;
			margin-left: -80px;
			background: url('../img/r2.png') no-repeat center top;
			z-index: 1002;
		}
	}
</style>
<template>
	<header class="header">
		<div class="left">
			<img src="../img/logo.png" width="260">
		</div>
		<div class="center">
			<img src="../img/r2.png">
		</div>
		<slot name="navmenu">这里显示导航</slot>
	</header>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {

        }
    }
</script>