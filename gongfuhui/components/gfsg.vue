<template>
	<view class="gfsg">
		<view class="gftitle">功夫闪购</view>
		<view class="gflist">
			<view class="sg" v-for="(item,index) of sglist" :key="index">
			   <image class="sgl" :src="item.src"></image>
			   <view class="sgr">
				 <view class="rf">
					<view class="sgzt">到店</view>
					<view class="sgname">{{item.sname}}</view>
				 </view>
				 <view class="rs">{{item.sjs}}</view>
				 <view class="rt" v-if="item.dz">
					<view class="iconfont icon-dazhe"></view>
					<view class="rtdz">{{item.dz}}折</view>
				 </view>
				 <view class="rfo">
					 <view class="rfol">
					<view class="rfprice">￥{{item.price}}</view>
					<view class="rfyprice" v-if="item.yprice">￥{{item.yprice}}</view> 
					</view>
					<view class="rfor">立即购买</view>
				 </view> 
			   </view>
			</view>
			
		</view>
	</view>	
</template>

<script>
	export default{
		name:"gfsg",
		data(){
			return{
				sglist:[
					{
					src:"../static/img/6.jpg",	
					dt:true,
					sname:"金桔金桔",
					sjs:"金桔柠檬汁、金桔柠檬汁",
					dz:6.8,
					price:15,
					yprice:22,
					},
					{
					src:"../static/img/7.jpg",		
					dt:true,
					sname:"鸡腿肉粥花卷",
					sjs:"冬菇鸡腿肉粥、鸡蛋花卷",
					dz:8,
					price:12,
					yprice:15,
					},
					{
				    src:"../static/img/8.jpg",	
					wm:true,
					sname:"蒸米粉豆浆套餐",
					sjs:"新鲜香肉酱蒸米粉、热豆浆",
					price:12,
					},
					{
					src:"../static/img/9.jpg",		
					wm:true,
					sname:"活力双人套餐A",
					sjs:"新瘦肉粉、猪肉玉米包、鸡肉花卷、热豆浆",
					price:23	
					}
				]
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.gfsg{
		width:98%;
		margin:70upx auto 0;
		.gftitle{
			font-size:46upx;
		   font-weight: bold;
		   margin-left:4%;
		}
	    .gflist{
			margin-top:30upx;
			.sg{
			  display:flex;
			  align-items:center;
			  border-bottom:2upx solid #fbfbfb;
			  padding:10upx 0 30upx 0; 
			 .sgl{
				width:35%;
				height:250upx; 
			 }
			 .sgr{
				width:63%; 
				.rf{
				 display:flex;
				 align-items:center;
				.sgzt{
					background:#fde363;
					 font-size:22upx;
					 padding:2upx 1upx;
				}
				.sgwm{
					background:#e68529;
					color:#fff;
					font-size:22upx;
					padding:2upx 1upx;
				}
				 .sgname{
					font-size:38upx;
					 font-weight:500;
					 margin-left:5upx;
				 }	  
				}
				.rs{
				  margin-top:5upx;
				  font-size:32upx;
					  color:#8c8c8c;
					   overflow:hidden;
					   white-space:nowrap;
						text-overflow:ellipsis;
				} 
			 }
				.rt{
				  display:flex;
				  align-items:center;
				  margin-top:8upx; 
				  .iconfont{
					    font-size:36upx;
					   color:#b77067; 
				  }	
				  .rtdz{
					 font-size:28upx;
					 color:#b77067; 
					 margin-left:7upx
				  }	
					
				}   
		        .rfo{
				  display:flex;
				  justify-content:space-between;
				  align-items:center;
				  margin-top:50upx;
				  .rfol{
					  display:flex;
					  align-items:center; 
					 .rfprice{
						font-size:44upx;
						color:#df5a60;
						font-weight:500;
					 }
					 .rfyprice{
						margin-left:13upx; 
						 font-size:28upx;
                       text-decoration:line-through;
						color:#a9aead;
					 } 
				  }
				  .rfor{
					  width:170upx;
					  height:30upx;
					font-size:28upx;
					border:2upx solid #df5a60;
					border-radius:50upx;
					padding:25upx 20upx;
					color:#b68883;
					line-height:30upx;
					text-align:center;
					  
				  }   
				}
		  }
			
		}	
	}
</style>
