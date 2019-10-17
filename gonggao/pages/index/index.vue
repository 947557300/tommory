<template>
	<view class="content" :style="'height:'+height+'px'">
	<view class="ggcontent">
	 <view class="gglist" v-for="(item,index) of gglist" :key="index">
	   <view class="ggtop">
		 <view class="bgtext"  :style="'background:'+item.color">{{item.title}}</view>
		 <view class="gtext">{{item.content}}</view>  
	   </view>
	   <view class="ggbottom">
		 {{item.time}}  
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
				gglist:[
				  {
				   title:"公告",
				   color:"#52c1f6",
				   time:"11-27",
				   content:"【送考带考】天籁画室全力以赴,征战2016联考"
				  },
					  {
					   title:"紧急",
					   color:"#f0b344",
					   time:"11-27",
					   content:"【送考带考】天籁画室全力以赴,征战2016联考"
					  },
					  {
					   title:"重要",
					   color:"#fa782b",
					   time:"11-27",
					   content:"【送考带考】天籁画室全力以赴,征战2016联考"
					  },
					  {
					   title:"必读",
					   color:"#f44d52",
					   time:"11-27",
					   content:"【送考带考】天籁画室全力以赴,征战2016联考"
					  },
					  {
					   title:"公文",
					   color:"#6fa6f1",
					   time:"11-27",
					   content:"【送考带考】天籁画室全力以赴,征战2016联考"
					  },
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
	  .content{
		 width:100%;
		 background:#f1f1f1;
		 color:#494949;
		 
	  .ggcontent{
		 background:#fff;
		 	 
		.gglist{
		 border-bottom:1upx solid #ddd;
		 width:96%;
		 margin:0 auto;
		 padding:20upx 0; 
		 .ggtop{
		  display:flex;
		  align-items:center;
		  .bgtext{
			color:#fff;
			font-size:21upx;
		    padding:5upx 16upx;
			margin-right:6upx;  
		  }
		  .gtext{
			font-size:30upx;
		  }		   
		 }
		  .ggbottom{
			 text-align:right; 
			 width:100%; 
			font-size:22upx;
			margin-top:18upx;
			 color:#9d9d9d; 
		  }
		}  
	  }
	  }
</style>
