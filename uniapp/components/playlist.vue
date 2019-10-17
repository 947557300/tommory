<template>
	
	  <view class="plist">
	   <view class="plistl">
		  <view>{{list.Name}}</view>
		  <view class="plistb">
			  <view class="other yellow" v-if="list.VIP">VIP</view>
			  <view class="other yellow" v-if="list.SQ">SQ</view>
			  <view class="other" v-if="list.DJ">独家</view>
			  <view class="other" v-if="list.HQ">HQ</view>
			 {{list.Author}}-{{list.Album}}
		  </view>
		   </view>
	   <view class="plistr">
		  <image src="../static/image/icon/bofangHui.png"></image>
		  <image src="../static/image/icon/gengduoHui.png" class="she"></image>
	   </view>
	</view>
	</view>
	
	
</template>

<script>
	export default{
		name:"playlist",
		props:{
			list:{
				type:Object,
				default:{
					Name:"像我这样的人",
					SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
					Author:'毛不易',
					Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
					SQ:0,
					DJ:1,
					HQ:0,
					VIP:1
					}
			}
		},
		data(){
			return{}
		}
	}
</script>

<style lang="scss" scoped>
   
		.plist{
			display:flex;
			justify-content: space-between;
			padding:20upx 25upx 20upx 0;
			margin-left:25upx;
			align-items:center;
			border-bottom:2upx solid #dcdcdc;
		 .plistb{
			margin-top:10upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space:nowrap;
			font-size:26upx;
			width:545upx;
			.other{
				display: inline-block;
				padding: 2upx 6upx;
				margin-right: 10upx;
				color: #f55500;
				border-radius: 4upx;
				font-size: 24upx;
				border:1upx solid #f55500;
				&.yellow{
					border:1upx solid #9c8200;
					color:#9c8200;
				}
			} 
			
		 }	
		 .plistr{
			 image{
				 width:40upx;
				 height:40upx;
			 }
			 .she{
				 margin-left:32upx;
			 }
		 }
		}
		
	
</style>
