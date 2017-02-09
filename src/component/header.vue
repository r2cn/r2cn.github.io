<style lang="less" scoped>
	//公共头部
	.header {
		position: relative;
		height: 60px;
		line-height: 60px;
		color: #fff;
		text-align: center;
		background: #3a4d62;
		.item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
			a {
				color: #fff;
				text-decoration: none;
			}
		}
		.info{
			right: 160px;
			i{
				font-size: 28px;
				display: inline-block;
				vertical-align: middle;
				padding-right: 3px;
				line-height: 39px;
			}
			span{
				padding-right: 40px;
			}
		}
		.left {
			left: 10px;
			padding-left: 32px;
			background: url("logo.png") no-repeat center left;
			background-size: 22px;
		}
		.right {
			right: 10px;
			a{
				padding-left: 6px;
				text-decoration: underline;
				cursor: pointer;
			}
			i{
				font-size: 28px;
				display: inline-block;
				vertical-align: middle;
				padding-right: 10px;
				line-height: 39px;
			}
		}
	}
</style>
<template>
	<header class="header">
		<div class="item left">
			<router-link slot="left" to="/">客到采购管理系统</router-link>
		</div>
		<div class="item info">
			<i class="icon-nav_ico_shop"></i>
			<span>{{user.orgName}}</span>
			<i class="icon-nav_ico_phone"></i>
			<span>400-1688-927</span>
		</div>
		<div class="item right" v-if="user.userName">
			<i class="icon-nav_ico_user"></i><span>{{user.userRealName}}</span><a @click="signout">退出</a>
		</div>
	</header>
</template>
<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
            ...mapActions(['SIGNOUT']),
            signout() {
				this.$confirm('确认退出?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
                    this.$http({
                        url:'/pms/account/signout.do',
                        method:'GET'
                    }).then((res)=>res.body).then((data)=> {})
				   this.SIGNOUT()
				   this.$router.replace({path: '/login'})
				}).catch(() => {
				});
			 }
        },
        computed: mapState({user: state => state.user})
    }
</script>