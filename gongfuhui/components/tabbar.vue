<template>
	<view class="tarcon">
	  <view class="tarlist">
	         <view class="tarl" :class="[xz?'':'black']">
				 <view class="iconfont icon-shouye" v-if="xz" ></view>
				 <view class="iconfont icon-shouyex" v-if="!xz"></view>
				 <view>首页</view>
			 </view>
			 <view class="tarm">
				<view class="go">到店点餐</view>
				 <view class="out">外卖点餐</view> 
			 </view>
			 <view class="tarr hui" :class="[xz?'black':'']" @tap="tzo()">
				 <view class="iconfont icon-wo" v-if="!xz"></view>
				 <view class="iconfont.icon-wo1" v-if="xz"></view>
				 <view>我的</view>
			 </view>
	  </view>
	</view> 
</template>

<script>
	export default{
		 name:"tabbar",
		 data(){
			 return{
				 xz:0, 
			 }
		 },
		 methods:{
			 tzo(){
				
				uni.navigateTo({
				    url: '../user/user',
				});
				 
			 },
			 tzs(){
				 uni.navigateTo({
				     url: '../index/index',
				 }) 
			 }
			 
			 
		 }
	}
</script>

<style lang="scss" scoped>
	   .tarcon{
		 position:fixed;
		 bottom:0;
		  width:100%;
		  background:#fcfffe;
		  box-shadow: 0rpx -1rpx 10rpx #eef1f0;
		.tarlist{
			display:flex;
			justify-content:space-between;
			align-items: center;
			font-size:28upx;
			color:#989898;
			 height:112upx;
		   padding:18upx 50upx;
		   .black{
		   	   color:black !important; 
		   }
			.hui{
			  color:#989898;	
			}   
			.iconfont{
				font-size:45upx;
			}
			.tarl{
			 text-align: center;
		     
			}
			.tarm{
			 display:flex;
			 font-size:32upx;
			 color:black;
			 font-weight:bold;
			view{
			width:180upx;
		    padding:25upx 20upx;
			border-radius:20%;
			text-align: center;
			}
			.go{
			 margin-right:5upx;
			 border-radius: 45upx 0 0 45upx ;
			 background:#ffe855;
			}
			.out{
			border-radius:0 45upx 45upx 0;
			background:#fbb22a;	
			}
			 	 
			}
			.tarr{
			 text-align:center;
				 
			}
		}
		   
	   }
</style>
