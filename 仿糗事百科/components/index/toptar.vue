<template>
	<view class="toptar-content u-f-ac u-f-jsb">
	 <view class="icon iconfont icon-qiandao left"> 
	 </view>
	 <input class="searchinput" placeholder="搜索糗事" placeholder-style="text-align:center" @tap="search()">
	 <view class="icon iconfont icon-bianji1 right" @tap="addinput()">
	 </view>
	 </view>
	
</template>

<script>
	export default {
			data() {
			 return{
				   	
			 }	
			},
			methods:{
			  search(){
				uni.navigateTo({
					url:"../../pages/search/search"
				})
				
			  },
			  addinput(){
				  uni.navigateTo({
				  	url:"../../pages/add-input/add-input"
				  })
			  }	  
			}
		}
	
</script>

<style lang="scss" scoped>
.toptar-content{
	width:100%;
	.left{
	  font-size:44upx;
	  color:#ff9619;
	  margin-left:12upx;		
	}
	.right{
	  font-size:44upx;
	  color:#000000;
	   margin-right:12upx;		
	}
	.center{
	  text-align: center;	
	}	
}
.searchinput{
  width:78%;
  height:58upx;		
  background:#f7f7f7;
  border-radius:5upx;
  color:#333333;
  			 
}	
	   
</style>
