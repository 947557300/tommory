<template>
	<view class="newcon">
	 <view class="newtar">
	    <view v-for="(item,index) of tlist" :key="index"  :class="current==index? 'black':''" @tap="changcurrent(index)">{{item.name}}</view>
	 </view>
	 <view class="newmid">
		<swiper class="swiperw" :current="current"  @change="changeBar">
		 <swiper-item>
			 <play-all></play-all>
			 <scroll-view scroll-y="true"  class="scroll-Y">
			 	<play-list  v-for='(item,index) of newList' :list="item" :key="index"></play-list>
			 </scroll-view>
		 </swiper-item>
		 <swiper-item>
          <view class="xdtar">
			 <view class="cs">推荐</view>
			 <view>内地</view>
			<view>港台</view>
			<view>欧美</view>
            <view>英文</view>			
		  </view>
		  <scroll-view scroll-y="true" class="scroll-Y">
		   <co-nt :prot="newDiscList" owidth="49.5%"></co-nt>
		   </scroll-view>
		 </swiper-item>
		 <swiper-item>
		 	<view class="ys">
			 <view class="newFilms">热映动画片原生</view>	
			 <scroll-view scroll-y="true" class="scroll-Y">
			  <co-nt :prot="newFilmsList" owidth="49.5%"></co-nt>	 
			 </scroll-view>	
			</view>	
		 </swiper-item>
			
		</swiper> 
	 </view>
	 <play-bot></play-bot>
	 
	</view>
</template>

<script>
	import PlayAll from "../../components/playall.vue"
	import PlayList from "../../components/playlist.vue"
	import CoNt from '../../components/content'
	import PlayBot from "../../components/playbottom.vue"
	export default {
		components:{
			PlayList,
			PlayAll,
			CoNt,
			PlayBot,
		},
		data() {	
			return {
				current:0,
			   tlist:[
				   {name:'新歌'},
				   {name:'新碟'},
				   {name:'影视'},
			   ],
			   newList:[
			   	{
			   		Name:"像我这样的人1",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:0,
			   		VIP:1
			   		},{
			   		Name:"像我这样的人2",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:1,
			   		DJ:1,
			   		HQ:0,
			   		VIP:1
			   		},{
			   		Name:"像我这样的人3",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:0,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人4",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:0,
			   		HQ:0,
			   		VIP:1
			   		},{
			   		Name:"像我这样的人5",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:1,
			   		DJ:1,
			   		HQ:0,
			   		VIP:1
			   		},{
			   		Name:"像我这样的人6",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人7",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人8",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人9",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人10",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		},{
			   		Name:"像我这样的人11",
			   		SrcAudio:"http://m10.music.126.net/20190117183019/a55ba6ea85a64f26e106b6115a23e934/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3",
			   		Author:'毛不易',
			   		Album:"平凡的一天sjb出校门才能农村明细表模板弄明白每年相比你每次下班是们重新报聪明程序包",
			   		SQ:0,
			   		DJ:1,
			   		HQ:1,
			   		VIP:0
			   		}
			   ],
			   newDiscList:[
			   	{name:"你的独家品味推荐",src:"../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
			   	{name:"慢跑随身听",src:"../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
			   	{name:"失恋解药",src:"../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
			   	{name:"薛之谦创作歌曲集",src:"../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
			   	{name:"青春是一场未知的探险",src:"../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
			   	{name:"欧美|渐入佳境的入耳暖心旋律",src:"../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"},
			   	{name:"你的独家品味推荐",src:"../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
			   	{name:"慢跑随身听",src:"../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
			   	{name:"失恋解药",src:"../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
			   	{name:"薛之谦创作歌曲集",src:"../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
			   	{name:"青春是一场未知的探险",src:"../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
			   	{name:"欧美|渐入佳境的入耳暖心旋律",src:"../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
			   ],
			   newFilmsList:[
			   	{name:"离开的接口",author:"刘瑞琪",src:"../static/image/sc12.jpg"},
			   	{name:"Cerll ls:The Albuild",author:"Made Will Made It",src:"../static/image/sc13.jpg"},
			   	{name:"SSS.GRIDMANIDSFEF",author:"OTX",src:"../static/image/sc14.jpg"},
			   	{name:"No place",author:"Backstreet",src:"../static/image/sc15.jpg"},
			   	{name:"别再闹了",author:"毛不易",src:"../static/image/sc16.jpg"},
			   	{name:"即刻电音",author:"即可电音",src:"../static/image/sc17.jpg"},
			   	{name:"失恋解药",src:"../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
			   	{name:"薛之谦创作歌曲集",src:"../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
			   	{name:"青春是一场未知的探险",src:"../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
			   	{name:"欧美|渐入佳境的入耳暖心旋律",src:"../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
			   ],
			  
			   
			}
		},
		methods:{
			changcurrent(index){
				this.current=index;
			},
			changeBar:function(e){
				this.current = e.detail.current
			}
		},
	}
</script>

<style lang="scss" scoped>
	.newcon{
		width:100%;
	 .newtar{
		 margin-top:50upx;
		 display:flex;
		 justify-content: center;
		 align-items: center;
		 text-align: center;
		 color:#000;
		 
		view{
		  border:2upx solid  #000;
		  padding:14upx 44upx;
		  font-size:25upx;
		}
		.black{
			background:#000;
			color:#fff;
		}
	 }
	 .newmid{
		 margin-top:35upx;
		 .swiperw{
				height:calc(100vh - 330upx);
					.scroll-Y{
						height:calc(100vh - 440upx);
					}
			.xdtar{
				display:flex;
				justify-content:space-around;
				font-size:28upx;
				margin-top:20upx;
				view{
					padding-bottom:25upx;
				}
			 .cs{
				 border-bottom:8upx solid #f55500;
				 color: #f55500;
			 }	
			}		
		 }
		 .newFilms{
			 font-size:40upx;
			 text-align: center;
			 margin-bottom:10upx;
		 }
	 }
		 
	}
	

</style>
