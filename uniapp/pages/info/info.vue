<template>
	<view class="info">
	  <view class="bg"></view>
	  <view class="infocon">
		  
		<view class="top">
			<view class="mname">{{audioList[audioPlaySrc].name}}</view>
			<view class="mzuo">{{audioList[audioPlaySrc].author}}</view>
			<view class="myz">
				<view>标准</view>
				<view>音效</view>
				<view>视频</view>
			</view>
		</view>
		<view class="mid">
		 <image :class="playState?'zhuan':''" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630762297&di=2c3317bf38f107287414b1b0cd33f0e5&imgtype=0&src=http%3A%2F%2Fsingerimg.kugou.com%2Fuploadpic%2Fpass%2Fsofthead%2F400%2F20140829%2F20140829161553861786.jpg" mode=""></image>	
		</view>
		<view class="bottom">
		  <view class="bar"><!--bar-->
			<view class="time star">00:00</view>
			<slider class="line" :value="nowmiao" min="0" :max="allmiao"  block-size="15" activeColor="#55A532"></slider>
			<view class="time end">03:40</view>  
		  </view><!--bar-->
		  
		  <view class="btn"><!--btn-->
		    <view class="lx">
			 <image v-if="audioWay==0" src="../../static/image/icon/xunhuanbofang.png"></image>
			 <image v-if="audioWay==2" src="../../static/image/icon/danquxunhuan.png"></image>
			 <image v-if="audioWay==1" src="../../static/image/icon/suijibofang.png"></image>
			</view>
		    <view class="go">
			  <view><image src="../../static/image/icon/shangyishou.png"></image></view>
			  <view @tap="play"> 
			<image v-if="!playState" class="play" src="../../static/image/icon/kaishi-2.png"></image>
			<image v-if="playState"  class="play" src="../../static/image/icon/zanting-2.png"></image>
			  </view>
			   <view><image src="../../static/image/icon/xiayishou.png"></image></view>
			</view>
		  <view class="lx"><image src="../../static/image/icon/yinleliebiao.png"></image></view>
		  </view>
		  
		  <view class="caozuo"><!--caozuo-->
			 <view @tap="shouc">
			 	<image v-if="!collect" src="../../static/image/icon/shoucang.png"></image>
			 	<image v-if="collect"  src="../../static/image/icon/shoucang-2.png"></image>
			 </view>
			 <view><image  src="../../static/image/icon/xiazai.png"></image></view>
			 <view><image  src="../../static/image/icon/share.png"></image></view>
			 <view><image  src="../../static/image/icon/liuyanjianyi.png"></image></view> 
		  </view>
		</view> 
		 
	  </view>
	</view>
</template>

<script>
	let innerAudioContext = ''
	export default {
		data() {
			return {
				nowmiao:0,//当前时间
				allmiao:'50%',//全部时间
				playState:0,//1开始0暂停
				collect:0,//收藏
				audioPlaySrc:0,//当前播放的歌曲index
				audioWay:0,//播放方式 0顺序播放 1随机播放 2单曲循环
				lineBarWid:520,//进度条的宽度跟css一只
				audioCont:'',
				audioList:[
					{name:'英雄联盟群雄齐聚',
					 author:'毛不易',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/414/66335414.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630762297&di=2c3317bf38f107287414b1b0cd33f0e5&imgtype=0&src=http%3A%2F%2Fsingerimg.kugou.com%2Fuploadpic%2Fpass%2Fsofthead%2F400%2F20140829%2F20140829161553861786.jpg',
					 },
					{name:'你的微笑',
					 author:'Shart Foeir',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/556/66405556.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630730529&di=f37e409de12f9930e25507c3252a462c&imgtype=0&src=http%3A%2F%2Fmp2.iqiyipic.com%2Fimage%2F20180827%2F03%2F41%2Fh_1199242471_h_601_400_400.jpg',
					 },
					{name:'TryEverything',
					 author:'Shakira',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/480/66379480.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547471202346&di=bd9b5e27beb9341b058d21e521e8d75e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F27%2F20170727210705_zcijE.jpeg',
					 },
					{name:'我爱过几个人',
					 author:'邓论',
					 src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/339/65390339.aac',
					 img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547630610810&di=1a0c6d9557aa2bba822c54694a55429e&imgtype=0&src=http%3A%2F%2Fmp0.iqiyipic.com%2Fimage%2F20180827%2Fff%2F79%2Fh_1199249539_h_601_400_400.jpg',
					 },
					 {name:'浪子回头',
					  author:'辉气*蛋',
					  src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/645/66725645.aac',
					  img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631130547&di=076c9275ce160baa2ff5cb66eed4ad53&imgtype=0&src=http%3A%2F%2Fwww.mixtapetorrent.com%2Fsystem%2Ffiles%2Ffollowmernb.jpg',
					  },
					 {name:'生僻字心动不已',
					  author:'〃°ω°〃',
					  src:'http://cdnringbd.shoujiduoduo.com/ringres/userv1/a48/359/64750359.aac',
					  img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631330468&di=517d6b42ed32567a5798fd9bbe13ff9c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170830%2F2dbe36dfa0a14c0c94b672f445c02a21.jpeg',
					  }
				],
				
			}
		},
		computed:{
			width:function (){
				return 'width:' + this.nowmiao/this.allmiao * this.lineBarWid + 'upx'
			},
			playWidth:function () {
				return 'transform:translate3d(' + (this.nowmiao / this.allmiao) * this.lineBarWid + 'upx,0,0);'
			},
			nowmiaoForc:function (){
				return this.$pubFuc.secondFormact(this.nowmiao)
			},
			allmiaoForc:function(){
				return this.$pubFuc.secondFormact(this.allmiao)
			},
			bgStyle:function (){
				return 'background-image:url('+this.audioList[this.audioPlaySrc].img+')'
			}
		},
		methods: {
               audioInit(){
				let src = this.audioList[this.audioPlaySrc].src
				if(innerAudioContext){
					innerAudioContext.destroy()
					innerAudioContext = ''
					//销毁====================
				}
				innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.src = src
				innerAudioContext.autoplay = true
				//获取时长
				let dura = setInterval(()=>{
					this.allmiao = Math.floor(innerAudioContext.duration)
					if(this.allmiao){
						clearInterval(dura)
					}
				})
				//监听事件
				innerAudioContext.onPlay(()=>{
					this.playFunc()
				})
				innerAudioContext.onPause(()=>{
					this.pauseFunc()
				})
				innerAudioContext.onTimeUpdate((e)=>{
					this.nowmiao = Math.floor(innerAudioContext.currentTime)
				})
				innerAudioContext.onEnded(()=>{
					this.nextPlay()
				})
			},
			playFunc(){
				this.playState=1
			},
			pauseFunc(){
				this.playState= 0
			},
			sliderChange(e) {
				this.nowmiao = e.detail.value
				innerAudioContext.seek(this.nowmiao)
			},
			play(){
				if(this.playState){
					//暂停
					innerAudioContext.pause()
				}else{
					//播放
					innerAudioContext.play()
				}
			},
			nextPlay(){
				if(this.audioWay==1){
					//随机
					this.audioPlaySrc = Math.floor(Math.random()*10)%this.audioList.length;
				}else if(this.audioWay==0){
					//顺序
					if(this.audioPlaySrc >= (this.audioList.length-1)){
						this.audioPlaySrc = 0
					}else{
						this.audioPlaySrc = this.audioPlaySrc+1
					}
				}//单曲循环
				this.audioInit()
			},
			upPlay(){
				if(this.audioWay==1){
					//随机
					this.audioPlaySrc = Math.floor(Math.random()*10)%this.audioList.length;
				}else if(this.audioWay==0){
					//顺序
					if(this.audioPlaySrc < 1){
						this.audioPlaySrc = this.audioList.length-1
					}else{
						this.audioPlaySrc = this.audioPlaySrc-1
					}
				}//单曲循环
				this.audioInit()
			},
			audioWayFunc(){
				if(this.audioWay>1){
					this.audioWay = 0
				}else{
					this.audioWay = this.audioWay+1
				}
			},
			collectFunc(){
				this.collect = !this.collect
			},
			
		},
	    mounted:function() {
	    	this.audioPlaySrc = 0
	    	this.audioInit()
	    },
		destroyed(){
			innerAudioContext.destroy()
			innerAudioContext = ''
		}
	}
</script>

<style lang="scss" scoped>
	  .info{
		  width:100%;
		  height:100%;
		 position:fixed;
		 background-position:center;
		 background-repeat:no-repeat;
		 background-size:cover;
		 background-image: url("../../static/image/sc24.jpeg");
		 .bg{
		    width:100%;
			height:100%;
			position: fixed;
			filter: blur(40upx);
		    background: inherit;
		 }
		 .infocon{
			 z-index:1;
			width:100%;
			height:100%;
			position:fixed;
			color:#fffdef;
			.top{
				margin:0 auto;
				text-align:center;
				color:#fff;
				margin-top:20upx;
				.mname{
				 font-size:46upx;
				
				}
				.mzuo{
					font-size:34upx;
					 margin:10upx 0;
				}
				.myz{
					display:flex;
					font-size:28upx;
					justify-content:center;
					margin:25upx 0 20upx;
				 view{
					border:2upx solid #fff;
					 margin:0 2upx;
					 width:100upx;
					 height:40upx;
					 border-radius:2upx;
					 
				 }	
				}
				
				
			}
			.mid{
				 text-align:center;
				 margin-top:25upx;
			image{
			width: 600rpx;
			height: 600rpx;
			border: solid 16upx rgba(0, 0, 0, 0.15);
			border-radius: 50%;
			  &.zhuan{
			  	-webkit-transform: rotate(360deg);
			  	animation: rotation 8s linear infinite;
			  }
			 }
			}
			.bottom{
			 width:95%;
			 margin:0 auto;
			 .bar{
				display:flex;
				color:#fff;
				font-size:30upx;
				align-items: center;
				justify-content: space-between;
				.line{
				 width:520upx;
				}
			 }
			 .btn{
			   width:95%;
			   margin:0 auto;
			   display:flex;
			  justify-content: space-between;
			 align-items: center;
			 margin-top:25upx;
			 .lx{
              image{
				 width:50upx;
				 height:50upx;
			  }	 
			 }
			 .go{
				 display:flex;
				 justify-content:space-between;
				 align-items:center;
				image{
				width:80upx;
				height:80upx;	
				}
			   .play{
				   width:110upx;
				   height:110upx;
				   margin:0 50upx;
			   } 
			 }						
			 }
			 .caozuo{
				width:80%;
				margin:25upx auto;
				display: flex;
				justify-content:space-between;
				align-items: center;
				image{
				  width:50upx;
				  height:50upx;	  
				}
			 }
             
			}
		 }
		  
	  }

</style>
