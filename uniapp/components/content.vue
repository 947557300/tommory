<template>
	<view class="conten">
	  <view class="conlist">
		  
		 <view class="cont" :style='{width:owidth}' v-for="(item,index) of prot" :key="index" @tap="gourl"> <!--for循环-->
		 <view class="con" >
		 <image :src="item.src"></image>
		 <view class="tzk" v-if="item.count">
			 <!--听众数-->
		 <image src="../static/image/icon/yinle.png" class="tz"></image>
		 <view>{{item.count|qw}}</view>
		 </view>
		 
		 <image src="../static/image/icon/kaishi-2.png" class="kaishi"></image>
		 </view>
		  <view class="btitle">{{item.name}}</view>
		  <view v-if="item.author" class="author">{{item.author}}</view>
		  </view> 
			  	   
		
		  
	  </view>	
	</view>
</template>

<script>
	export default{
		name:"content",
		props:{
			prot:{
				type: Array,	
			},
			owidth:{
				type:String,
				default:"33%"
			}
		},
		data(){
		   return{
			   imgSrc:"../static/image/",
		
		   }
		},
		methods:{
			gourl(){
				uni.navigateTo({
					url:"../info/info"
				});
			}
		}
		
			}
</script>

<style lang="scss" scoped>
	.conten{
		width:750upx;
	  .conlist{
		  display:flex;
		  justify-content: space-between;
		  flex-wrap: wrap;
		 margin-top:10upx;
		 .cont{
			 display:flex;
			 flex-direction:column;
		  .con{
			  box-sizing:border-box;
			  position: relative;
			  height:247upx;
			  margin-top:20upx;
		  image{
			 width:100%;
			 height:100%;
		       }
		   .kaishi{
			   width:40upx;
			   height:40upx;
			   position:absolute;
			   right:4%;
			   bottom:4%;
			   z-index:1;
		   }
		   .tzk{
			   position:absolute;
			   left:4%;
			   bottom:4%;
			   color: rgba(255,255,255,.8);
			   font-size: 20upx;
			   display:flex;
			   align-items:center;
			   .tz{
				 width:25upx;
				 height:25upx;
				 padding-right:2upx;  
			   }
		   }
					  
		  }
		  .btitle{
			 font-size:28upx;
			  text-overflow: ellipsis;
			     white-space: nowrap;
			     overflow: hidden;
		  }
		  .author{
		  			  padding: 0 6upx;
		  			  font-size: 26upx;
		  			  color:#999;
		 }	
		  }
	  }	
	  
	}
	
</style>
