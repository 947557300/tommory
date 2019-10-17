<template>
	<view class="pbcon">
	 <view class="pbcont">	
	 <view class="pbl">
		<image class="zuan" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548155771330&di=543688d6a155099dd10e0c5305198b7e&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F20%2F20151220153237_5MSsz.jpeg"></image>
	    <view class="pblr">
		 <view class="pbname">Traveling Light</view>
		 <view class="pbzz">Joel Hanson</view>	 
		</view>	 
	 </view>
	  <view class="pbr">
		  <image src="../static/image/icon/kaishiH.png"></image>
		  <image class="small" src="../static/image/icon/muluH.png"></image>
		 </view>
	</view>
	</view>
</template>

<script>
	export default{
		name:"playbottom",
		data(){
			return{
				
			}
		},
		
		
	}
</script>

<style lang="scss" scoped>
	 .pbcon{
		 width:100%;
		 position:fixed;
		 border-top:2upx solid #dcdcdc;
		 bottom:0;
		.pbcont{
			padding:15upx 25upx;
			display:flex;
			justify-content:space-between;
			align-items: center;
			.pbl{
				display:flex;
				align-items:center;
			 image{
				 width:80upx;
				 height:80upx;
				 border-radius: 50%;
				 &.zuan{-webkit-transform: rotate(360deg);
				 animation: rotation 8s linear infinite;
				 }
			 }
			  .pblr{
				  margin-left:30upx;
				 .pbname{
					 font-size:34upx;
				 }
				  .pbzz{
					  font-size:26upx;
					 color: rgb(75,75,75);
				  }
			  }	 
			}
			.pbr{
				display:flex;
				align-item:center;
				image{
					width:65upx;
					height:65upx;
					padding-left: 30upx;
				}
				.small{
					width:40upx;
					height:40upx;
					margin-top:14upx;
				}
			}
		}
		
	 }
</style>
