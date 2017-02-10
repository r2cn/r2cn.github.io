<style lang="less" scoped>

</style>
<template>
<div>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">

		</div>
	</common-layout>
</div>
</template>
<script>
    export default {
		data() {
			var crumbs = [
                  {path:'/',name: '首页'}
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