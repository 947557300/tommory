<template>
	<view>
		<view class="searchMrapper">
			<view class="searchView">
			 <icon type="search" size="18" class="search"></icon>
			 <input type="text" placeholder="搜索当前商品">
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.searchMrapper{
	padding:20upx;
}	
.searchView{
	background:#eff3f9;
	width:100%;
	height:80upx;
	border-radius:40upx;
	font-size:15px;
	color:#c0c0c0;
	display:flex;
	align-items:center;
	padding:0 20upx;
	box-sizing:border-box;
	text{
		padding-left:10upx;
	}
	.search{
	  padding-left:10upx;	
	}
	input{
	  margin-left:10upx;
	 width:90%;
	}
}
</style>
