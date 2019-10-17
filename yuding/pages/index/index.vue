<template>
	<view class="content" :style="'height:'+height+'px'">
	 <view class="yd-top">
		 <view class="yd-list" v-for="(item,index) of ydtop" :key="index">
			<text class="yd-left">{{item.name}}</text>
			<text class="yd-right">{{item.value}}</text>
		 </view>
		 
	 </view>
	    <view class="middle-top">
		 <view class="yd-middle" v-for="(item,index) of ydmiddle" :key="index">
			 <view class="yd-list">
			 			<text class="yd-left">{{item.name}}</text>
			 			<text class="yd-right">{{item.value}}</text>
			 </view>
		 </view>
		 </view>
		 <view class="yd-bottom">
			 <text class="liuyanbox">{{liuyan}}</text>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height:0,
				ydtop:[
					{name:"预定日期",value:"2017-08-10"},
					{name:"用餐时间",value:"22:00"},
					{name:"用餐人数",value:6},
				],
				ydmiddle:[
					{name:"预订人",value:"你的姓名"},
					{name:"手机号",value:"你的手机号"}
				],
				liuyan:"请留言给商家"
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
		  background:#f2f2f2;
		  .yd-top,.yd-middle{
			 background:#fff;
			 .yd-list{
				width:90%;
				 margin:0 auto;
				 display:flex;
				 justify-content: space-between;
				  align-items: center;
				  padding:25upx 0;
				  font-size:32upx;
				  border-bottom:3upx solid #f3f3f3;
				  .yd-left{
					  font-weight:500;
				  }
				   .yd-right{
					 color:#9d9d9d;
					 font-size:26upx;
					 font-weight:400; 
					 
				   }
			 } 
		  }
		  .middle-top{
			 margin-top:20upx;
			 
		  }
		  .yd-bottom{
			  margin-top:45upx;
			   background:#fff;
			 .liuyanbox{
			width:675upx;
			height:216upx;
			margin:0 auto;
			padding-top:30upx;
			 color:#9d9d9d;
			 font-size:32upx;
			word-break: break-all;
			text-overflow: ellipsis;
			display: -webkit-box; 
			-webkit-box-orient: vertical;
			-webkit-line-clamp:5;
			overflow: hidden;
			 } 
		  }
	  }
</style>
