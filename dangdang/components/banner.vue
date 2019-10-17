<template>
	<view class="margin-div">
	 <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
	     <swiper-item v-for="(item,index) of bannerList" :key="index">
		   <image :src="item" mode="widthFix"></image>	 
	     </swiper-item>
	  </swiper>
	  <uni-grid :column="5" :square="false" :show-border="false" class="margin-div">
	      <uni-grid-item v-for="(item,index) of menus" :key="index">
			  <image :src="item.icons" mode="aspectFill" class="menus-img"></image>
	      </uni-grid-item>
	  </uni-grid>
	</view>
</template>

<script>
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"		
	export default {
		components:{
			uniGrid,
			uniGridItem
		},
		data() {
			return {
			bannerList:[
				require("../static/1.jpg"),
				require("../static/2.jpg"),
				require("../static/3.jpg"),
				require("../static/4.jpg"),
			],
		    menus:[
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"},
				{icons:"http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"}
			]		
			};
		}
	}
</script>

<style lang="scss" scoped>
swiper{
	  height:220upx;
}
swiper-item{
  background:#f2f2f2;
  image{
	width:100%;  
  }	  
}
.menus-img{
  width:150upx;
  height:150upx;	  
}
.margin-div{
  margin-top:10upx;	
}
</style>
