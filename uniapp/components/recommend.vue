<template>
	  <view class="recommendcon">
		 
		 <view class="rehead" v-if="prot.title">
			  <!--标题头-->
			<view>{{prot.title}}</view>
			<image v-if="imgSrc" :src="imgSrc+'jiantou2.png'"></image>
		 </view>
		 	<co-nt :prot="prot.list" :owidth="owidth"></co-nt> <!--内容-->
		 <view class="anniu" v-if="changmore" @tap="changes()">
		 <!--按钮-->	 
		  <image src="../static/image/icon/shuaxin.png" class="aimg"></image>
		  <view class="atitle" >换一批</view>
		 </view>
	  </view>
</template>

<script>
	import CoNt from './content'	
	export default{
		name:"recommend",
		components:{
				CoNt,
		},
		props:{
			prot:{
				type: Object,
			},
			owidth:{
				type:String,
				default:"33%"
			},
			changmore:{
				type: Boolean,
				default:false
			}
			
		},
		data(){
			return{
				imgSrc: '../static/image/',
				
			}
		},
		methods:{
			changes(){
				this.$emit("changec",this.prot.list)
			}
		}
		
	}
</script>


<style lang="scss" scoped >
	.recommendcon{
		width:750upx;
	 .rehead{
		margin-top:50upx;
		font-size:32upx;
		display:flex;
		align-items:center;
		justify-content:flex-end;
		image{
		  width:40upx;
		  height:40upx;
		  margin:0 35upx 0 250upx;	  
		} 
	 }
     .anniu{
		 margin:0 auto;
		 display: flex;
		justify-content:center;
		align-items:center;
		font-size: 26upx;
		border: solid 1upx #CCCCCC;
		width:210upx;
		height:56upx;
		margin-top:20upx;
		.aimg{
			width:32upx;
			height:32upx;
		}
	 }		 
	}
</style>
