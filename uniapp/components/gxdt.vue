<template>
	<view class="gxdtcon">
		<view class="dtcon">
		
		<view class="dtconl" @tap="gourl">
			<!--left-->
			<image :src="content.img" mode=""></image>
		    <image class="icon" v-if="imgSrc" :src="imgSrc+'icon/sanjiao.png'"></image>
			<view class="ltitle">{{content.imgTitle}}</view>
			
		</view>
		
		<view class="dtconr" @tap="gourlt">
			<!--right-->
			<view class="dtconrt" v-for="(item,index) of content.list" :key="index" :class='hdtt==index?"dtt":""'>
				<view class="dtrtitle">
				  <view class="newg">{{item.name}}</view>
				  <view class="desc">{{item.disc}}</view>
				</view>
				<image :src="item.src"></image>
			</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		name:"gxdt",
		data () {
			return{
				imgSrc:'../static/image/',
				content:{
					img:"../static/image/sc1.jpg",
					imgTitle:'个性电台',
					list:[
						{name:"新歌新碟",disc:"神秘嘉宾先生选择新歌",src:'../static/image/sc2.jpeg'},
						{name:"动画片专辑|热映",disc:"李建老狼联手现场",src:'../static/image/sc3.jpeg'}
					]
				},
				hdtt:1,
			 	
			}
		},
		methods:{
			gourl(){
				uni.navigateTo({
					url:"../info/info"
				});
			},
			gourlt(){
				uni.navigateTo({
					url:"../new/new"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gxdtcon{
		width:750upx;
		margin-top:20upx;
     .dtcon{
		 width:720upx;
		 margin:0 auto;
		 display: flex;
		 justify-content: space-between;
		 align-items:center;
	 .dtconl{
		 display: flex;
		 position:relative;
		 
		 image{
			width:220upx;
			height:220upx;
		 }
		 .icon{
			 width:50upx;
			 height:50upx;
			 position:absolute;
			 left:85upx;
			 top:85upx;
			 opacity:0.85;
			 
		 }
		 .ltitle{
			 position:absolute;
			 left:55upx;
			 top:155upx;
			 font-size:28upx;
			 color:#fff;
		 }
	 }	 
	 .dtconr{
	       .dtt{
			   margin-top:20upx;
		   }
		  .dtconrt{
			  height:100upx;
			  display: flex;
			
			image{
				width:100upx;
				height:100upx;
			}
			.dtrtitle{
				width:380upx;
				height:100upx;
				background:#f3f1f1;
				/*line-height:45upx;*/
				box-sizing:border-box;
				padding:10upx 0 0 20upx;
				.newg{
	            font-size: 32upx;
				}
				 .desc{
					font-size: 26upx;
					color: #6f6f6f;
				 }
			}
			  
			  
		  }
		 
	 } 
	 }		
	}
</style>
