<template>
    <view class="top">
	<view class="topyellow"></view>	
	<view class="topcon">
	 <view class="topc">
	   <view class="iconfont icon-usercircle"></view>
	   <view class="topgr">
		   <view class="topg">
			  <view>余额&nbsp;(元)</view>
			  <view class="count">0</view> 
		   </view>
		   <view class="topg">
		   	   <view>积分</view>
		   	   <view class="count">0</view> 
		   </view>
		   <view class="topg">
		   	   <view>优惠券</view>
		   	   <view class="count">5</view> 
		   </view>
	   </view>
	   <view class="topfkm">
		  <view class="iconfont icon-erweima"></view> 
		   <view>付款码</view>	
	   </view>
	 </view>	
	</view>
	</view>
</template>

<script>
	export default{
		name:"shouyetop",
		data(){
		  return{
			  
		  }	 
		}
		
	}
</script>

<style lang="scss" scoped>
	.top{
		height:170upx;
	 .topyellow{
		background:#Fcd84b;
		width:100%;
		height:50upx;
	 }	
	.topcon{
		width:94%;
		margin: 0 auto;
		background:#fff;
		position:absolute;
		top:20upx;
		left:3%;
		z-index:1;
		border-radius:5%;
		
	 .topc{
		 display:flex;
		 align-items:center;
		 box-shadow: 10upx 10upx 10upx #f3f3f3;
		 z-index:1;
		 padding:20upx;
		 border:1upx solid #fffffd;
		 font-size:23upx;
		 color:#a5a5a5;
		.iconfont{
			font-size:90upx;
			color:#e5e6e3;
		}
		.topgr{
		 display:flex;
		 width:450upx;
		 justify-content: space-around;
		
		 .topg{
			text-align:center; 
		 .count{
			font-size:45upx;
			color:black;
			font-weight:bold; 
		 }	
		   }
		}
		 .topfkm{
			 border-left:5upx solid #f0f1ee;
			 text-align:center;
			 padding-left:20upx;
			.iconfont{
				font-size:35upx;
				color:black;
			} 
		 }
		 
	 }
		 
	}
      }
</style>
