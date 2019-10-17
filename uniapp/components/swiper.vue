<template>
	 <view class="swiperc">
	<view class="banner">
		<swiper class="bannerContent" :autoplay="swiper.autoplay">
			<swiper-item v-for="(value,index) in swiper.img" :key="index">
				<image :src="value" class="swiperImg"></image>
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	export default{
		name:"swiper",
		data () {
			return{
				swiper:{
					autoplay:true,
					img:[
						'../static/image/1.jpeg',
						'../static/image/2.jpeg',
						'../static/image/3.jpeg'
					]
				},
			 	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiperc{
	    width:750upx;
		.bannerContent{
		  width:100%;
		  height:320upx;
		  .swiperImg{
			  width:100%;
			  height:100%;
		  }
				
		}
	}
</style>
