<template>
	<view class="navc">
	  <view class="navcon">
		<view class="nc" v-for="(item,index) of navlist" :key="index">
			<image :src="item.src"></image>
			<p>{{item.name}}</p>
		</view>		    
	  </view>
	</view>
</template>

<script>
	export default{
		name:'nav',
		data () {
			return{
			imgSrc:'../static/image/',
			 navlist:[
				{name:"歌手",src:'../static/image/icon/ren_l.png'},
				{name:"排行",src:'../static/image/icon/paixingbang_l.png'},
				{name:"分类歌单",src:'../static/image/icon/fenlei1_l.png'},
				{name:"电台",src:'../static/image/icon/xinhaojieshouqi_l.png'},
				{name:"视频",src:'../static/image/icon/shipin-tianchong_l.png'},
			 ],
			}
		}		
	}
</script>

<style lang="scss" scoped>
	 .navc{
		width:750upx;
		margin-top:10upx;
		.navcon{
			width:720upx;
			height:170upx;
			margin:0 auto;
			display:flex;
			justify-content:space-around;
			align-items:center; 
			box-shadow: 10upx 10upx 10upx #CCCCCC;
			z-index:1;
			font-size:30upx;
			.nc{
				padding:0 20upx;
				text-align:center;
			
			  image{
				  width:50upx;
				  height:50upx;
			  }	
			}
		} 
	 }
</style>
