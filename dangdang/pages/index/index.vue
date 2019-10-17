<template>
	<div>
	 <top-search></top-search>
	 <top-tabbar></top-tabbar>
	 <banner/>
	<list-pane></list-pane>
    </div>	
</template>

<script>
import TopSearch from "../../components/topSearch.vue"
import TopTabbar from "../../components/topTabbar.vue"
import banner from "../../components/banner.vue"
import ListPane from "../../components/listPane.vue"
	export default {
		components:{
		  TopSearch,
		  TopTabbar,
		  banner,
		  ListPane,
		},
		data() {
			return {
			
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	
</style>
