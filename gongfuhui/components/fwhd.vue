<template>
     <view class="fwhdcon">
		<view class="title">
		 {{fwhdlist.title}}	
		</view>
	   <view class="fwhd">
		  <view class="fwhdlist"  v-for="(item,index) of fwhdlist.content" :key="index">
			 <image class="fimg" :src="item.src" :class="item.ftitle?'fimg1':''"></image>
			 <view class="ftitle">{{item.name}}</view>
			 <view class="fftitle" v-if="item.ftitle">{{item.ftitle}}</view>
		  </view>
		  
		   
	   </view> 
	 </view> 	
</template>

<script>
	export default{
		name:"fwhd",
		props:{
		fwhdlist:{
			type: Object,	
		},
		},
		data(){
			return{
		
			}
		}
	}
	
</script>

<style lang="scss" scoped>
   .fwhdcon{
	 width:95%;
	 margin:24upx auto 0;
	  .title{
		 font-size:28upx;
		 color:#8b8e8d;
	  }
	  .fwhd{
		 width:90%;
		 display:flex;
		 margin:50upx auto 70upx;
		 justify-content:space-between;
		  font-size:26upx;
		  
		  .fwhdlist{
			 text-align:center;
			 .fimg1{
				width:80upx !important;
				height:80upx !important;
				margin-bottom:8upx;
			 } 
		 .fimg{
			width:72upx;
			height:60upx;
		 }
		 .fftitle{
			margin-top:5upx;
			font-size:20upx;
			color:#8b8e8d;
		 }
		  }
	  }
		
   }	
</style>
