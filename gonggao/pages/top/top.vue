<template>
	<view class="content" :style="'height:'+height+'px'">
	 <view class="title" v-for="(item,index) of titlelist" :key="index">
		<view class="top">
		  <view class="title-txt">{{item.title}}</view>
		  <image class="right-img" :src="item.src"></image>	  
		</view> 
	 </view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:0,
				titlelist:[
					{
				     title:"大数据热点",
					 src:"../../static/images/right.png"		 
					},
					{
					 title:"最新公告",
					 src:"../../static/images/right.png"		 
					},
					{
					 title:"热点资讯",
					 src:"../../static/images/right.png"		 
					}
				]
				
			}
		},
		methods: {
			
		},
		onLoad(){
		this.height = Math.floor(uni.getSystemInfoSync().windowHeight);
		     // #ifdef APP-PLUS
		     this.height = Math.floor(uni.getSystemInfoSync().windowHeight - 56);
		     // #endif	
		}
	}
</script>

<style lang="scss" scoped>
      .content{
		 width:100%;
		 background:#f2f2f2;
		  &:before{
			content:"";
			display:table;
		  }
		 .title{
		  background:#FFFFFF;	 
	      border-top:1upx solid #dbdbdb;
		  border-bottom:1upx solid #dbdbdb;
		  margin-top:8upx; 
		  .top{
			width:96%;
			margin:0 auto;
		    display:flex;
		    justify-content: space-between;
		    padding:20upx 0;
		    font-size:28upx;
			align-items:center;
			.right-img{
			 width:44upx;
			 height:44upx;	 
			}				
			  
		  }		
		 } 
	  }
</style>
