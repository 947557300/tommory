<template>
	<view class="newscon" :style="'height:'+height+'px'">
	<!-- <view class="newshead">
		<view class="head">
		 <view class="head-left">
		   <image :src="head.leftsrc"></image>
		  <view class="left-cirle"></view>	   
		 </view>
		 <text class="head-middle">{{head.title}}</text>
		 <view class="head-right">
		   <image :src="head.rightsrc"></image>
			<view class="textcirle">{{head.text}}</view>	
		 </view>
		</view>
	 </view>
	 <view class="newcontlist">
	 <view class="newscont" v-for="(item,index) of pllist" :key="index">
		<image :src="item.src" class="touxiang"></image>
		<view class="cont">
		  <view class="cont-first">{{item.title}}</view>
		   <view class="cont-sencond">{{item.time}}</view>
			<view class="cont-third">{{item.rizi}}</view>	   
		</view>
		  <view class="cont-footer">
			 <view class="footer">
			  <image src="../../static/images/2.png"  v-if="item.lover" @tap="love(item.count,item.lover,index)" :data-id="item.count"></image>
			   <image src="../../static/images/1.png" v-if="!item.lover" @tap="love(item.count,item.lover,index)" :data-id="item.count"></image>
			   <text class="textcount">{{item.count}}</text>	   
			 </view>
			  <view class="footer">
			   <image src="../../static/images/3.png"></image>
			    <text class="textcount">{{item.hua}}</text>	   
			  </view> 
			  <view class="footer">
			   <image src="../../static/images/11.png"></image>
			    <text class="textcount">{{item.fx}}</text>	   
			  </view> 
		  </view>
	 </view>
	 </view>
	 -->
	 
	 <view class="newsfooter">
	     <view class="footerout">	 
		 <view class="footer-top">
		 <view class="footer-first">
		 		   
		 </view>
		 </view>
		<!-- <view class="footer-bottom">
		 <view class="footer-second">James posted a new article on Deep Think</view>
		 <view class="footer-third">+3 more</view>-->
		 </view>
	 </view>
	 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head:{
					title:"NEWS",
					leftsrc:"../../static/images/6.png",
					rightsrc:"../../static/images/7.png",
					text:12,
				},
				
				 height:0,
				pllist:[
					{
					 title:"Weekend trip",
					 time:"11.15pm",
					 rizi:"Perhaps a very peaceful and brilliant weekend trip to Zales",
					 count:180,
					 hua:"20",
					 fx:"10",
					 src:"../../static/images/10.png",
				     lover:true,			 
					},
					{
					 title:"Opening of bar",
					 time:"11.00pm",
					 rizi:"Invited for opening ceremony of TGS bar",
					 count:249,
					 hua:"55",
					 fx:"10",
				     src:"../../static/images/12.png",
					 lover:false,			 
					}
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
			love(count,lover,index){
				if(lover){
				 this.pllist[index].lover=false;
				 this.pllist[index].count-=1;
				}else{
				this.pllist[index].lover=true;
				this.pllist[index].count+=1;	
				}
				
			
			}

		},
		watch:{
			
		}
	}
</script>

<style lang="scss" scoped>
	 .newscon{
		width:100%;
		background:#eff2fe;
		.newshead{
		background:#fff;
		.head{
		margin:0 auto;
		width:90%;
		display:flex;
		align-items:center;
		justify-content: space-between;
		padding:25upx 0;
		 .head-left{
		   display:flex;
		   position:relative;
		   image{
			 width:40upx;
			 height:40upx;
		   }
		   .left-cirle{
			  width:15upx;
			  height:15upx;
			  background:#cf68d5;
			  position:absolute;
			  top:-10upx;
			  left:40upx;
			  border-radius:50%;
			  
		   }			  
		 }
		 .head-middle{
			font-weight:bold;
			color:#2f2d3b; 
		 }
		 .head-right{
			position:relative;
			display:flex;
			color:#fff;
			font-size:20upx;
				padding-right:40upx;
			image{
		    width:35upx;
			height:35upx;
		
			}
		   .textcirle{
			  width:46upx;
			  height:28upx;
			  background:#e36cea;
			  border-radius:12upx;
			  text-align: center;
			  line-height:28upx;
			  position:absolute;
			  top:-20upx;
			  left:28upx;
			  
		   }			
			
		 }
			 
		}
		}
		.newcontlist{
		   padding-bottom:80upx;	
		.newscont{
		  width:92%;
		  margin:0 auto;
		  margin-top:125upx;
		  background:#fff;
		  text-align:center;
		  position:relative;
		  border-radius:15upx;
		  .touxiang{
			border-radius:50%;
			 width:95upx;
			  height:95upx;
			  position:absolute;
			  left:42%;
			  top:-64upx;
		  }
		  .cont{
			 text-align: center;
			 padding:60upx 20upx;
			color:#4b485a; 
			 .cont-first{
			font-weight:bold;	 
			 }
			 .cont-sencond{
				color:#C0C0C0;
				font-size:26upx;
				margin-top:5upx;
			 }
			 .cont-third{
			   font-size:30upx;
			   font-weight:400;
			    width:92%;
			   margin:0 auto;
			    overflow: hidden;
			   word-wrap:break-word;
			   word-break:break-all;
			  margin-top:10upx;			   
			 }
		  }
		  .cont-footer{
			 width:66%;
			 margin:0 auto;
			 border-radius:65upx;
			 padding:20upx 20upx;
			 display:flex;
			 background:#fff;
			 align-items:center;
			 justify-content:space-around;
			 border:1upx solid #fbfbfb;
			 position:absolute;
			 bottom:-34upx;
			 left:16%;
			 .footer{
				text-align:center; 
				display:flex;
				align-items:center;
			
			   image{
				 width:40upx;
				 height:40upx;
				 margin-right:20upx;  
				   }
			    .textcount{
				  font-size:26upx;
				  color:#C0C0C0;	  
				}   
				   
			   	
			 } 
		  }
		}
		}
		 .newsfooter{
		 	position:fixed;
		 	bottom:0;
		 	width:100%;
		 	height:500upx;
			background:blue;
			.footerout{
		    	width: 0;
		    	height: 0;
		      border-left: 100upx solid transparent;
		       border-right:100upx solid transparent;
		        border-top: 100upx solid #f00;
		        border-radius: 50%;
				background:red;	
			.footer-top{}
				
			} 
		 }
		
		 /*.newsfooter{
			position:fixed;
			bottom:0;
			width:100%;
			height:200upx;
		
			.footerout{
			  position:relative;
			  color:#fff;
			 text-align:center;
			 font-size:30upx;
			 .footer-top{
			 			 border-radius:50%;
			 			 background:#3e5de7;
			 			 height:128upx;
			 			 position:relative;	
			 .footer-first{
			 			 width:300upx;
			 			 margin:0 auto;
			 			display:flex;
			 			justify-content: space-between;
			 			align-items:center;
			 			position:absolute;
			 			top:-38upx;
			 			left:28%;
			 			image{
			 			  width:50upx;
			 			   height:50upx;		 
			 			}
			 			.my{
			 			 width:100upx;
			 			 height:100upx;
			 			 border-radius:50%; 
			 			  
			 			}
			 			  
			 }
			 }
			 .footer-bottom{
			 			  background:#3e5de7;
			 				position:absolute;
			 			    width:100%;	
			 				top:68upx;
			 				left:0;
			 				text-align:center;
			 				height:92upx;
			 				padding:20upx 0;
			 .footer-second{
			 			 font-weight:bold; 
			 }
			 .footer-third{
			 			 margin-top:5upx; 
			 }
			 }
			} 
		 }*/
	    /*.footerout{
		.newsfooter{
		  margin-top:25upx;	
		  color:#fff;
		  text-align:center;
		  font-size:30upx;
		  position:relative;
		  .footer-top{
			 border-radius:50%;
			 background:#3e5de7;
			 height:128upx;
			 position:relative;	
		  .footer-first{
			 width:300upx;
			 margin:0 auto;
			display:flex;
			justify-content: space-between;
			align-items:center;
			position:absolute;
			top:-38upx;
			left:28%;
			image{
			  width:50upx;
			   height:50upx;		 
			}
			.my{
			 width:100upx;
			 height:100upx;
			 border-radius:50%; 
			  
			}
			  
		  }
		  }
		  .footer-bottom{
			  background:#3e5de7;
				position:absolute;
			    width:100%;	
				top:68upx;
				left:0;
				text-align:center;
				height:92upx;
				padding:20upx 0;
		  .footer-second{
			 font-weight:bold; 
		  }
		  .footer-third{
			 margin-top:5upx; 
		  }
		  }
		}
		}*/
	 }
	 
	
</style>
