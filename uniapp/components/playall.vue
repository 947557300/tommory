<template>
	<view class="allcon">
		<view class="alll">
		<image src="../static/image/icon/kaishiH.png"></image>
		<view>全部播放</view>
		</view>
		<view class="allr">
		<image src="../static/image/icon/xiazaiHei.png"></image>
		<image src="../static/image/icon/muluHei.png"></image>	
		</view>
	</view>
</template>

<script>
	export default{
	   data(){
		  return{} 
	   }
	   
	}
</script>

<style lang="scss" scoped>
	.allcon{
	  border-top:2upx solid #dcdcdc;
	  border-bottom:2upx solid #dcdcdc;
	  padding:32upx 25upx;
	  display:flex;
	  justify-content:space-between;
	   align-items:center;
	  image{
		 width:56upx;
		 height:56upx; 
	  }
	  .alll{
		  display:flex;
		  align-items:center;
		  font-size: 30upx;
		view{
		 margin-left:30upx;	
		}
	  }
	  .allr{
		  image{
			width:40upx;
			height:40upx;
			margin-left:30upx;
		  }
	  }
		  
	}
</style>
