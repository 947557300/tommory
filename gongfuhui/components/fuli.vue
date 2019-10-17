<template>
     <view class="fulicont">
	  <view class="fulilist">
		<view class="fuli">
		 <view class="iconfont icon-chongzhiqia"></view>
		 <view>充值福利</view>	 
		</view> 
		 <view class="fuli">
		  <view class="iconfont icon-youhuiquan pink"></view>
		  <view>领优惠券</view>	 
		 </view>  
		 <view class="fuli">
		  <view class="iconfont icon-liwu yellow"></view>
		  <view>1分钱吃</view>	 
		 </view>  
		 <view class="fuli">
		  <view class="iconfont icon-youxi red"></view>
		  <view>积分乐园</view>	 
		 </view>  
	  </view>
	  
	 </view>
</template>

<script>
	export default{
		name:"fulicont",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fulicont{
		width:705upx;
		margin:40upx auto 0;
		.fulilist{
			display:flex;
			justify-content: space-around;
		 .fuli{
			 font-size:28upx;
			 text-align:center;
			.iconfont{
		       font-size:50upx;
			   border-radius: 50%;
			   color:#f9dfc1;
			   background:#fe7b20;
			   width:100upx;
			   height:100upx;
			   text-align:center;
			   line-height:100upx;	
			}
			 .pink{
				background:#fa6ca7;
				 color:#f7deee;
			 }
			 .yellow{
				 background:#f1cf21;
				 color:#fffee2;
			 }
			 .red{
				 background:#f4554c;
				 color:#feefef;
			 }
		 }	
		}
	}
</style>
