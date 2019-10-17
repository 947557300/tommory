<template>
	<view class="grzqcont">
		<view class="zqcon">
		 <view class="zql">
			<view class="iconfont icon-liwu"></view>
			<view class="zqtitle">个人特惠专区</view>	
			<view class="zqcon">特别的优惠给特别的你</view>	
		 </view>
		 <view class="zqr">立即查看></view>	
		</view>
	</view>
</template>

<script>
	export default{
		name:"grzq",
		data(){
			return{}
		}
	}
</script>

<style lang="scss" scoped>
	.grzqcont{
		width:94%;
		margin:50upx auto 0;
		background:#fcf3cd;
		border-radius:5%;
     .zqcon{
		 padding:15upx 20upx;
		 display:flex;
		 justify-content:space-between;
		 align-items:center;
	 	 .zql{
			 display:flex;
			 align-items:center;
			 font-size:30upx;
			 color:#706431;
			 font-weight:500;
			 .iconfont{
				 font-size:42upx;
				 color:#dab470;
				 margin-right:17upx;
			 }
			 .zqcon{
				 font-size:25upx;
				 color:#c2b88f;
			 }
		 }
		 .zqr{
			 font-size:26upx;
		 }
	 }
	}
</style>
