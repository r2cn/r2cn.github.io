<style lang="less" scoped>
</style>
<template>
	<common-layout :crumbs=crumbs>
		<div class="content" slot="content">
		</div>
	</common-layout>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
		data() {
			var crumbs = [
                  {path:'/',name: '首页'},
                  {path:'/settings',name: '基础管理'}
                ];
			return {
				crumbs
			}
		},
        computed: mapState({user: state => state.user}),
    }
</script>