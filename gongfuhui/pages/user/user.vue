<template>
	<view class="usecon">
      	<user-head></user-head>
		<fu-hd :fwhdlist="fulist"></fu-hd>
		<fu-hd :fwhdlist="hdlist"></fu-hd>
		<view class="userimg">
		 <image class="shouchong" src="../../static/img/shouchong.jpg"></image>
		</view>
		<ta-ba></ta-ba>
	</view>
</template>

<script>
   import UserHead from "../../components/usehead.vue"
   import FuHd from "../../components/fwhd.vue"
	   import TaBa from '../../components/tabbar.vue'
	export default {
		components:{
			UserHead,
			FuHd,
			 TaBa,
		},
		data() {
			return {
			  fulist:{
				  title:"我的服务",
				 content:[
				  {
				   src:"../static/img/qianbao.jpg",
				   name:"功夫钱包"		 
				  },
				  {
				   src:"../static/img/dingdan.jpg",
				   name:"我的订单"		 
				  },
				  {
				   src:"../static/img/jianyi.jpg",
				   name:"问题反馈"		 
				  },
				  {
				   src:"../static/img/dizhi.jpg",
				   name:"收货地址"		 
				  }
				  ], 
			  },
			 hdlist:{
				 title:"我的活动",
				 
			 	content:[ 
					{src:"../static/img/liwu1.jpg",
					 name:"邀请有奖",
				     ftitle:"1分钟吃粉",
				    },
					{src:"../static/img/qunzong1.jpg",
					 name:"我的拼团",
					 ftitle:"0元开团",
					},
					{src:"../static/img/jianmian1.jpg",
					 name:"下单减免",
					 ftitle:"最高减19元",
					},
					{src:"../static/img/gongxiang1.jpg",
					 name:"家享卡",
					 ftitle:"余额共同",
					},
				 
				 ]
			 }	  
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	  .usecon{
		  position:relative;
		  .userimg{
			 width:95%;
			 margin:0 auto;
			 border-radius:10upx 10upx 10upx 10upx; 
			 .shouchong{
				 width:100%;     
				 height:200upx;
				padding-bottom:50upx;
				 
			 } 
		  }
	  }

</style>
