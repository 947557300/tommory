<template>
	<view class="news-con">
	<view class="common-list u-f">
		<view class="common-list-l">
			<image src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load=""></image>
		</view>
		<view  class="common-list-r">
			<view class="u-f-ac u-f-jsb">
			  <view class="u-f-ac">昵称<view class="icon iconfont icon-nan">25</view></view>
			  <view class="icon iconfont icon-zengjia">关注</view>	  
			</view>
			<view>我是标题7777777777777777777777777777777777777777777777777777777</view>
			<view>
			  <image src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load></image>	
			</view>
			<view class="u-f-ac u-f-jsb">
			  <view>深圳 龙岗</view>	
			  <view class="u-f-ac">
				  <view class="icon iconfont icon-zhuanfa">10</view>
				  <view class="icon iconfont icon-pinglun1">20</view>
				  <view class="icon iconfont icon-dianzan1">30</view>
			  </view>
			</view>
		</view>
		 
	</view>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue" 
	export default {
		components:{
			 uniNavBar,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.news-con{
	width:100%
}	
.common-list{
	padding:20upx;

}
.common-list-l{
	flex-shrink:0;
}
.common-list-l image{
	width:90upx;
	height:90upx;
	border-radius:100%;
}
.common-list-r>view:nth-child(3)>image{
	width:100%;
	border-radius:10upx;
}
</style>
