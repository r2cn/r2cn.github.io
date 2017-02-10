<style lang="less" scoped>
	.footer{
		color: rgb(191, 203, 217);
		padding-bottom: 20px;
		width: 1136px;
		margin: 0 auto;
	}
	.footer ul{
		text-align: center;
	}
	.footer ul li{
		display: inline-block;
		margin: 0 10px;
		font-size: 14px;
		font-size: 1rem;
		cursor: pointer;
	}
	.footer ul li a{
		height: 21px;
		display: inline-block;
		cursor: pointer;
		color:#fff;
	}
	.footer .gov{
		color:#fff;
	&:hover{
		 text-decoration: underline;
	 }
	}
	.footer ul li a:hover{
		color: #ff8d1c;
	}
	.footer p{
		font-size: 12px;
		font-size: 0.8rem;
		text-align: center;
		margin-top: 14px;
		margin-top: 1rem;
		line-height:24px;
	img{
		padding: 0 6px;
		margin-bottom: -3px;
	}
	}
	.thinLine{
		width: 140px;
		width: 10rem;
		height: 1px;
		background-color: #eaeaea;
		margin: 0 auto;
		margin-top: 20px;
	}
</style>
<template>
	<div class="footer" id="footer">
		<!--<ul>
			<li><a href="https://github.com/r2cn/r2cn.github.io" target="_blank">github地址</a></li>|
			<li><a href="mailto:382430560@qq.com" target="_blank">联系我</a></li>
		</ul>-->
		<p>Copyright©2017-2020 Powered By 死神的丧钟</p>
	</div>
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