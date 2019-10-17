<template>
	<view class="topTabbar">
	 <view class="tabItem" v-for="(item,index) of items" :key="index" @tap="tabSwitch(index)" :class="activeIndex==index?'active':''">
		 <text class="tabText">{{item}}</text>
		 <view class="bottomLine"></view>
	 </view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					"精选","图书","童书","服装","百货"
				],
				activeIndex:0
			};
			},
			methods:{
			  tabSwitch(index){
				this.activeIndex=index;  
			  }	
			}
			
		
	}
</script>

<style lang="scss" scoped>
  .topTabbar{
	display:flex;
	justify-content:space-around;
	font-size:30upx;
	.tabItem{
		display:flex;
		flex-direction: column;
		.tabText{
		 color:#757576;	 
		}	
	}
	.active{
      .tabText{
		 color:black; 
	  }
	  .bottomLine{
		  background:#ee4633;
		  height:8upx;
		 border-radius:4upx; 
	  }
	}
	  
  }
</style>
