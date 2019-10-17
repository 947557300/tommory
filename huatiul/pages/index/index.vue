<template>
	<view class="messagelist" :style="'height:'+height+'px'">
		<view class="clear"></view>
	 <view class="messagecont" v-for="(item,index) of messagelist" :key="index">
		<view class="messagecon">
		<view class="message-title">{{item.title}}</view>
		<view class="content">
			<image class="left-img" :src="item.src"></image>
			<text  class="message">{{item.content}}</text>
		</view>
		 <view class="pj">
			 <view class="pjcont">
				 <image src="../../static/images/9999.png" class="pj-img"></image>
				 <text class="pj-text">{{item.comment}}</text>
			 </view>
			 <view class="pjcont">
			 				 <image src="../../static/images/6.png" class="pj-img"></image>
			 				 <text class="pj-text">{{item.collection}}</text>
			 </view>
		 </view>
		</view>
	 </view>	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:0,
				messagelist:[
					     {title:"保研材料该如何准备?",content:"保研材料的准备时一个漫长的过程,我们要准备下载，填写推免生申请表和1500字的个人陈述与专家推盖章成绩单，英语英语等等等等","comment":962,"collection":315,src:"../../static/images/refer_03.jpg"},
						  {title:"一个优秀的产品经理需要具备什么素质?",content:"保研材料的准备时一个漫长的过程,我们要准备下载，填写推免生申请表和1500字的个人陈述与专家推盖章成绩单，英语英语等等等等","comment":962,"collection":315,src:"../../static/images/refer_06.jpg"},
						   {title:"如何学好手绘?",content:"保研材料的准备时一个漫长的过程,我们要准备下载，填写推免生申请表和1500字的个人陈述与专家推盖章成绩单，英语英语等等等等","comment":962,"collection":315,src:"../../static/images/refer_08.jpg"},
				]
				
			    
			}
		},
		onLoad() {
             this.height = Math.floor(uni.getSystemInfoSync().windowHeight);
             // #ifdef APP-PLUS
             this.height = Math.floor(uni.getSystemInfoSync().windowHeight - 56);
             // #endif
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	   .messagelist{
		   width:100%;
		   height:500upx;
		   background:#f2f2f2;
		   .clear{
			 content:"";
			 display:table;
		   }
		.messagecont{
		 margin-top:20upx;
		 background:#fff;
		
		  .message-title{
			font-size:36upx;
			font-weight:500;
			overflow:hidden;
			text-overflow:ellipsis; 
			white-space: nowrap;
		  }
		  .messagecon{
			  width:94%;
			 margin:0 auto;
			  font-size:38upx;
			  padding:20upx 0; 
			  .content{
				 color:#7e7e7e;
				 font-size:30upx;
				 display:flex;
				 justify-content: space-between;
				 align-items: center;
				 margin-top:25upx;
				 .left-img{
					width:255upx;
					height:125upx;
				    margin-right:20upx;
				 }
				 .message{
					    overflow : hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 3;
					    -webkit-box-orient: vertical;
					    width:760upx;
						height:125upx;
	                    color:#888888;
				
					 
				 }
			  }
		     .pj{
			   display:flex;
			  align-items: center;
			  margin-top:10upx;
			  .pjcont{
				 margin-right:40upx;
				 display:flex;
				 align-items:center;  
			  .pj-img{
				  width:35upx;
				  height:35upx;
				  margin-right:5upx;
			  }
	            .pj-text{
				  font-size:25upx;
				  color:#bbb;
				  height:44upx;
				  line-height:44upx;		
				}
			  }
			 }
		  }
		  	  
		}   
		    
	   } 
</style>
