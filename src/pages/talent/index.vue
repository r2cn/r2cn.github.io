<style lang="less" scoped>

</style>
<template>
<div>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			<div class="ZQ__talent">
				<div class="talent__head">
					<span id="points">可用的天赋点：<em class="count">30/70</em></span>
				</div>
				<div class="tallent__con">
					<div class="tallent__head">
						<div id="tree-summaries"></div>
					</div>
					<div id="calculator" class="tallent__list"></div>
					<div class="tallent__foot">
						<a href="javascript:;" class="btn-reset" id="reset-tallent">重置天赋点</a>
						<a href="javascript:;" class="btn-copy" id="btn-copy">复制天赋点</a>
						<div class="foot__share" id="share-box">
							<span>分享我的天赋加点:</span>
							<input class="share-text">
							<div class="bdsharebuttonbox">
								<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
								<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
								<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
								<a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
								<a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
								<a href="#" class="bds_more" data-cmd="more"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</common-layout>
</div>
</template>
<script>
	import '../../lib/calculator.js'
    export default {
		data() {
			return {
				role:'knight'
			}
		},
        methods: {

        },
	    created(){
	    },
	    computed:{
            roleName() {
                switch(this.$route.params.role){
	                case 'knight':
		                return '骑士'
	                break;
	                case 'elf':
		                return '精灵'
	                break;
	                case 'summoner':
		                return '召唤师'
	                break;
	                case 'rangers':
		                return '游侠'
	                break;
	                case 'assassin':
		                return '刺客'
	                break;
	                default:
                        return '骑士'
                }
            },
            crumbs(){
                return [
                    {path:'/talent/knight',name: '天赋模拟器'},
                    {path:'/talent/'+this.$route.params.role,name:this.roleName}
                ]
            }
	    }
    }
</script>