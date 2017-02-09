<style lang="less" scoped>
	.pmsc-body .content{
		background: transparent;
	}
	.el-row {
		padding-left: 10px;
		padding-right: 20px;
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
		&:first-child {
			margin-top: 20px;
		}
	}
	.el-col {
		border-radius: 4px;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.grid-content{
		height: 150px;
	}
	.bg-green {
		background: #6fd600;
	}
	.bg-ligthgreen {
		background: #00d7c1;
	}
	.bg-blue {
		background: #02b9ff;
	}
	.bg-purple {
		background: #9f6dfa;
	}
	.bg-red {
		background: #ff6249;
	}
	.bg-orange {
		background: #ffc20c;
	}
</style>
<template>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<el-row :gutter="20">
				<el-col :span="8"><div class="grid-content bg-green"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-ligthgreen"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-blue"></div></el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-red"></div></el-col>
				<el-col :span="8"><div class="grid-content bg-orange"></div></el-col>
			</el-row>
		</div>
	</common-layout>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
		data() {
			var crumbs = [
                  {path:'/',name: '首页'},
                  {path:'/reports',name: '报表'}
                ];
			return {
				crumbs
			}
		},
        computed: mapState({user: state => state.user}),
    }
</script>