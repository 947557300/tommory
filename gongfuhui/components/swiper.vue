<template>
	<view class="swipercon">
	  <swiper class="banner":autoplay='true' :indicator-dots="true">
		  <swiper-item class="swiper-item" v-for="(item,index) of slist" :key="index">
			 <image :src="item.imgsrc" class="swiperimg"></image> 
		  </swiper-item>
		  
	  </swiper>	
	</view>
</template>

<script>
	export default{
		name:"swiper",
		data(){
			return{
				slist:[
				  {imgsrc:"../static/img/1.jpg"},
				  {imgsrc:"../static/img/2.jpg"},
				  {imgsrc:"../static/img/3.jpg"}  
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swipercon{
		width:705upx;
		margin:10upx auto 0;
		.banner{
			width:705upx;
			height:320upx;	
	 .swiper-item{
		.swiperimg{
			width:705upx;
			height:320upx;
		}
	 }	
	 }
	}
</style>
