<template>
	<view class="uheadcon">
	 <view class="headt">
		<view class="ttou"> 
		<view class="outuser"><view class="tuser iconfont icon-usercircle"></view></view>
		 <view class='thg iconfont icon-huangguan'></view>
		 </view>
		 <view class="txin">
		<view>授权个人信息></view>
		<view class="txinb">
			<view class="iconfont icon-vip"></view>
			<view class="gfhy">功夫会员</view>
		</view>
		</view> 
	 </view>
	 <view class="uheadb">
		 <view class="uheadblist">
			<view>钱包</view>
			 <view class="count">0</view>
		 </view>
		 
		 <view class="uheadblist">
		 			<view class="listt">积分</view>
		 			 <view class="count">0</view>
		 </view>
		 
		 <view class="uheadblist">
		 			<view>优惠券</view>
		 			 <view class="count">0</view>
		 </view>
		 
		 <view class="uheadblist">
		 			<view>会员卡</view>
		 			 <view class="count">0</view>
		 </view>
	 </view>
	</view>
</template>

<script>
	
</script>

<style lang="scss" scpoed>
         .uheadcon{
			width:100%;
			background: #F7d030;
			padding:9upx 0;
			height:320upx;
			.headt{
			 width:95%;
			 margin: 0 auto;
			 display:flex;
             padding-top:20upx;
			 padding-left:50upx;
			 align-items:center;
				.ttou{
				 position:relative;	
				 display:flex;
				 margin-right:30upx; 
				.outuser{
			background:#fff;
			border-radius:50%;
			width:132upx;
			height:130upx;
			text-align:center;
				 .tuser{
					font-size:120upx;
					 color:#e7e8e5;
					 }	  
				 }
				.thg{
				 position:absolute;
				 left:113upx;
				 top:-6upx;
				color:#fff;
				 font-size:37upx;	    
				}	 
				}
				.txin{
				  font-size:33upx;
				 .txinb{
				 display:flex;
				 align-items:center;
				 margin-top:5upx;
				  .iconfont{
					 font-size:40upx;
					 color:#9f851f;
				  }
				  .gfhy{
					width:100upx;
					height:33upx;
					background: #fded7b;
					padding:2upx 10upx;
					font-size:23upx;
					 text-align: center;
					 color:#9f851f;
				  }		
				 }	  
				}
				
			}
			.uheadb{
			 width:78%;
			 margin:0 auto;	  
			  display:flex;
			  margin-top:50upx;
			  justify-content:space-between;
			  align-items:center;
			  .uheadblist{
				font-size:30upx;
				text-align: center;
			    .listt{
				 color:#665206;	
				}	
				.count{
				 font-size:28upx;
			     margin-top:5upx;		 
				}  
			  }
			}
			
		 }	
</style>
