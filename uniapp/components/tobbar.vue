<template>
	<view class="tabbarc">
	 <view class="tabc">
		 <view class="tabtop">
		 <image v-if="imgSrc" :src="imgSrc+'icon/fenlei.png'" class="icon type"></image>
		 <view class="topmid">
		  <p v-for="(item,index) of tobarlist" :key="index" :class='bold==index? "bold":""' @tap="chang(index)">{{item.title}}</p>
		 </view>
		 <image v-if="imgSrc" :src="imgSrc+'icon/jiahao.png'" class="icon add"></image>
		 </view>
		  
		 <view class="tabbottom">
		  <input type="text" placeholder="搜索" placeholder-style="color:rgba(255,255,255,.8)" />
		  <image class="icon" v-if="imgSrc" :src="imgSrc+'icon/sousuo5.png'"></image>
		 </view>
		 
	 </view>	
	</view>
</template>

<script>
	export default{
		 name:"tobbar",
		data () {
			return{
				imgSrc: '../static/image/',
				tobarlist:[
					{
					 title:'我的',	 
					},
					{
					 title:'音乐馆',	 
					},
					{
					 title:'发现',	 
					}	
				],
				bold:1,
			}
		},
	     methods:{
			 chang(index){
				this.bold=index; 
			 }
		 },
		
		
	}
	
</script>

<style lang="scss" scoped>
	.tabbarc{
		width:750upx;
		height:220upx;
		background-color: #f55500;
	  .tabc{
		  width:720upx;
		  margin:0 auto;
		  padding-top:50upx;
		.tabtop{
			display:flex;
			justify-content: space-around;
			align-items:center;
          .icon{
       	     width: 44upx;
          	 height:44upx;
             }
		  .topmid{
			  display:flex;
			  justify-content:space-around;
			  color:#fff;
			  width:500upx;
			.bold{
			 font-weight:bold;	 
			}  
		  }		 
	         }
		 .tabbottom{
			 margin-top:30upx;
			 position:relative;
			 background-color: #d04900;
			 padding:8upx 0;
			 image{
			    width: 44upx;
			 	 height:44upx;
				 position:absolute;
				 left:13upx;
				 top:13upx;	 
				 
			    }
			 input{
				 padding-left:82upx;
				 color: rgba(255,255,255,1);
			 }
		 }
		
				
	  } 	
	  }
</style>
