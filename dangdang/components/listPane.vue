<template>
	<view class="listPane">
	 <view class="paseHeader">
	 <text class="title">新书热卖版</text>
	 <view class="more">查看更多 <uniIcon type="arrowright" size="18"></uniIcon></view> 
	 </view>
	 <view class="paneBody">
		<view class="goodsItem" v-for="(item,index) of shoplist" :key="index">
		 <view class="goods">
			 <view class="imgerWrapper">
				<image :src="item.img" mode="widthFix" style="width:100%"></image>
				 </view>
			<view class="title"><text>{{item.text}}</text></view>	 
			<view class="price">&yen;{{item.price}}</view>
		 </view>	
		</view> 
	 </view>	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  shoplist:[
				 {img:"http://img61.ddimg.cn/upload_img/00796/1/8.7-1570700432.png",text:"夏季是大豆豆豆速度速度上来的考虑是动漫网IE",price:"10.00"},
				  {img:"http://img61.ddimg.cn/upload_img/00796/1/8.7-1570700432.png",text:"夏季是大豆豆豆速度速度上来的考虑是动漫网IE",price:"10.00"},
				 {img:"http://img61.ddimg.cn/upload_img/00796/1/8.7-1570700432.png",text:"夏季是大豆豆豆速度速度上来的考虑是动漫网IE",price:"10.00"} ,	
			  ]	
			};
		}
	}
</script>
<style lang="scss" scoped>
  .listPane{
	  background:#fef5f1;
	  border-radius:30upx;  
  }
  .paseHeader{
	line-height:80upx;
	display:flex;
    justify-content:space-between;
	padding:0 40upx;	
  }
  .title{
	 font-size:32upx; 
  }
  .more{
	 font-size:28upx;
	 color:#808080; 
  }
  .paneBody{
	  display:flex;
	  flex-direction:row;
	  padding: 0 0 20upx 20upx;
	   
     .goodsItem{
		width:calc(100%/3);
		padding-right:10upx;
	   box-sizing:border-box;	
	 }
	.goods{
	  background:white;
	 border-radius:20upx;
	 .imageWrapper{
	border-bottom:1px solid #f1f1f1;
	padding:10upx;	 
	 }
	  .title{
		 height:80upx;
		 width:100%;
		 font-size:24upx;
		 overflow:hidden;
		 text-overflow:ellipsis;
		 display: -webkit-box;
		 -webkit-line-clamp: 2;
		 -webkit-box-orient: vertical;
		 padding:10upx;
		 box-sizing:border-box;
		  
	  }	
	.price{
	  color:red;
	 font-size:24upx;
	padding:10upx;	   
	}	  
	}
  }
</style>
