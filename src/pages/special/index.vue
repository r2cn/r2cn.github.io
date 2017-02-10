<style lang="less" scoped>
	.content{
		font-size: 36px;
		font-family: Verdana,Arial;
		color: rgb(151, 168, 190);
		text-align: center;
	}
</style>
<template>
<div>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
			Coming Soon...
		</div>
	</common-layout>
</div>
</template>
<script>
    export default {
		data() {
			var crumbs = [
                  {path:'/special',name: '版本专题'}
                ];
			return {
				crumbs
			}
		},
        methods: {

        },
	    created(){
	    }
    }
</script>