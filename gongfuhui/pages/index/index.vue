<template>
	  <view class="indexcon">
		<sy-top></sy-top> 
		<sw-iper></sw-iper>
		<fu-li></fu-li>
		<ge-re></ge-re>
		<tui-ja></tui-ja>
		<gf-sg></gf-sg>
		<ta-ba></ta-ba>
	  </view>
</template>

<script>
	import SyTop from '../../components/shouyetop.vue'
	import SwIper from '../../components/swiper.vue'
	import FuLi from '../../components/fuli.vue'
	import GeRe from '../../components/grzq.vue'
	import TuiJa from '../../components/tuijian.vue'
	import GfSg from '../../components/gfsg.vue'
	import TaBa from '../../components/tabbar.vue'
	export default {
		components:{
		   SyTop,
		   SwIper,
		   FuLi,
		   GeRe,
		   TuiJa,
		   GfSg,
		   TaBa
		},
		data() {
			return {
				
			}
		}
	
	}
</script>

<style lang="scss" scoped>
   .indexcon{
	   position:relative;
   }
</style>
