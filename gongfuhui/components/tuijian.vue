<template>
	<view class="tuijiancont">
		<view class="tjtitle">为我推荐</view>
		<view class="tuijianlist">
			<view class="tj" v-for="(item,index) of tjlist" :key="index">
			 <view class="tjimg">
				 <image :src="item.src"></image>
			 </view>
			 <view class="tjxq">
				<view class="tjzt">到店</view>
				<view v-if="item.mdrx" class="tjxg">门店热销</view>
				<view v-if="item.xpcx" class="tjxg">新品尝鲜</view>	 
			 </view>
			 <view class="tjname">{{item.name}}</view>	 
			 <view class="tjprice">￥{{item.price}}</view>	 
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"tuijian",
		data(){
			return{
				tjlist:[
				  {
					src:"../static/img/5.jpg",
					mdrx:true,
                    name:"蒸米粉豆浆套餐",
					price:11    
				  },
				  {
				  	src:"../static/img/4.jpg",
				  	xpcx:true,
				    name:"鸡腿肉粥蒸饺",
				  	price:13   
				  },
					  
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tuijiancont{
		width:94%;
		margin:70upx auto 0;
	 .tjtitle{
		font-size:46upx;
		 font-weight: bold;
	 }	
	  .tuijianlist{
		  display:flex;
		  justify-content: space-between;
		  aligin-items:center;
		  margin-top:30upx;
		  .tj{
			 width:49%;
			
			 border-radius:5%;
			.tjimg{
				 border:1upx solid #eaeaea;
				 border-radius:5%;
				image{
				 width:100%;
				 height:300upx;
				}
			}
			  .tjxq{
				 display:flex;
				align-items:center;
				margin-top:20upx;  
				  .tjzt{
					 background:#fde363;
					  font-size:28upx;
				  }
				  .tjxg{
					 border:1upx solid #d26369;
					  color:#d26369;
					  font-size:24upx;
					  margin-left:10upx;
					  height:30upx;
					  line-height:30upx;
				  }
			  }
		     .tjname{
				 font-size:34upx;
				 
			 }
			 .tjprice{
				 font-size:40upx;
				 color:#df5a60;
			 }
		  }
	  }	
		
	}
</style>
