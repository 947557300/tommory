<template>
   <view class="newscon" :style="'height:'+height+'px'">
  <view class="newcontlist">
  <view class="newscont" v-for="(item,index) of pllist" :key="index">
    <image :src="item.src" class="touxiang"></image>
    <view class="cont">
      <view class="cont-first">{{item.title}}</view>
       <view class="cont-sencond">{{item.time}}</view>
     <view class="cont-third">{{item.rizi}}</view>    
    </view>
      <view class="cont-footer">
      <view class="footer">
       <image src="../../static/images/2.png"  v-if="item.lover" @tap="love(item.count,item.lover,index)" :data-id="item.count"></image>
        <image src="../../static/images/1.png" v-if="!item.lover" @tap="love(item.count,item.lover,index)" :data-id="item.count"></image>
        <text class="textcount">{{item.count}}</text>    
      </view>
       <view class="footer">
        <image src="../../static/images/3.png"></image>
         <text class="textcount">20</text>    
       </view> 
       <view class="footer">
        <image src="../../static/images/11.png"></image>
         <text class="textcount">10</text>    
       </view> 
      </view>
  </view> 
  </view>
    </view>    
 </view>
</template>

<script>
 export default {
  data() {
   return {
    height:0,
    pllist:[
     {
      title:"Weekend trip",
      time:"11.15pm",
      rizi:"Perhaps a very peaceful and brilliant weekend trip to Zales",
      count:180,
      src:"../../static/images/10.png",
      lover:true,    
     },
    ]
    
   }
  },
  onLoad() {
   this.height = Math.floor(uni.getSystemInfoSync().windowHeight);
   // #ifdef APP-PLUS
   this.height = Math.floor(uni.getSystemInfoSync().windowHeight - 56);
   // #endif
  
  },
  methods: {
       love(count,lover,index){
        if(lover){
         this.pllist[index].lover=false;
         this.pllist[index].count-=1;
        }else{
        this.pllist[index].lover=true;
        this.pllist[index].count+=1; 
        }
        
       
       }
  }
 }
</script>

<style lang="scss" scoped>
	.newscon{
			width:100%;
			background:#eff2fe;
		.newcontlist{
		   padding-top:105upx;	
		.newscont{
		  width:86%;
		  margin:0 auto;
		  background:#fff;
		  text-align:center;
		  position:relative;
		  border-radius:15upx;
		  .touxiang{
			border-radius:50%;
			 width:85upx;
			  height:85upx;
			  position:absolute;
			  left:42%;
			  top:-58upx;
		  }
		  .cont{
			 text-align: center;
			 padding:60upx 20upx;
			color:#4b485a; 
			 .cont-first{
			font-weight:bold;
			font-size:36upx;	 
			 }
			 .cont-sencond{
				color:#C0C0C0;
				font-size:24upx;
				margin-top:5upx;
			 }
			 .cont-third{
			   font-size:26upx;
			   font-weight:400;
			    width:96%;
			   margin:30upx auto 25upx;
			    overflow: hidden;
			   word-wrap:break-word;
			   word-break:break-all;		   
			 }
		  }
		  .cont-footer{
			 width:62%;
			 margin:0 auto;
			 border-radius:65upx;
			 padding:18upx 20upx;
			 display:flex;
			 background:#fff;
			 align-items:center;
			 justify-content:space-around;
			 border:1upx solid #fbfbfb;
			 position:absolute;
			 bottom:-34upx;
			 left:16%;
			 box-shadow:1upx -3upx 5upx #f2f2f2;
			 .footer{
				text-align:center; 
				display:flex;
				align-items:center;
			
			   image{
				 width:32upx;
				 height:32upx;
				 margin-right:20upx;  
				   }
			    .textcount{
				  font-size:24upx;
				  color:#C0C0C0;	  
				}   
				   
			   	
			 } 
		  }
		}
		}	
			
			}
</style>