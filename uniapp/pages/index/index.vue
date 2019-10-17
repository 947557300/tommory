<template>
	<view class="content">
		<tob-bar></tob-bar>
		<swi-per></swi-per>
		<na-va></na-va>
		<gx-dt></gx-dt>
		<re-co :prot="recommend" :changmore="changmore" @changec="changing"></re-co>
		<re-co :prot="newest"></re-co>
		<re-co :prot="sole" owidth='49.5%'></re-co>
		</view>
	</view>
</template>

<script>
	import TobBar from '../../components/tobbar'
	import SwiPer from '../../components/swiper'
	import NaVa from '../../components/nav'
	import GxDt from '../../components/gxdt'
	import ReCo from '../../components/recommend'
	export default {
		components:{
			TobBar,
			SwiPer,
			NaVa,
			GxDt,
			ReCo,
		},
		data() {
			return {
			  changmore:true,	
			  recommend:{
			  	title:"为你推荐",
			  	list:[
			  		{name:"你的独家品味推荐",src:"../static/image/sc5.jpg",count:"53133000",updateTime:"刚刚更新"},
			  		{name:"慢跑随身听",src:"../static/image/sc7.jpg",count:"210000",updateTime:"刚刚更新"},
			  		{name:"失恋解药",src:"../static/image/sc8.jpg",count:"4000",updateTime:"刚刚更新"},
			  		{name:"薛之谦创作歌曲集",src:"../static/image/sc9.jpg",count:"9200000",updateTime:"刚刚更新"},
			  		{name:"青春是一场未知的探险",src:"../static/image/sc10.jpg",count:"8909",updateTime:"刚刚更新"},
			  		{name:"欧美|渐入佳境的入耳暖心旋律",src:"../static/image/sc11.jpg",count:"120000",updateTime:"刚刚更新"}
			  	]
			  },
			  newest:{
			  	title:"最新专辑",
			  	list:[
			  		{name:"离开的接口",author:"刘瑞琪",src:"../static/image/sc12.jpg"},
			  		{name:"Cerll ls:The Albuild",author:"Made Will Made It",src:"../static/image/sc13.jpg"},
			  		{name:"SSS.GRIDMANIDSFEF",author:"OTX",src:"../static/image/sc14.jpg"},
			  		{name:"No place",author:"Backstreet",src:"../static/image/sc15.jpg"},
			  		{name:"别再闹了",author:"毛不易",src:"../static/image/sc16.jpg"},
			  		{name:"即刻电音",author:"即可电音",src:"../static/image/sc17.jpg"}
			  	]
			  },
			  sole:{
			  	title:"独家内容",
			  	list:[
			  		{name:"乐见大牌|靖佩瑶清唱《清风是》又勾起广大会议",count:"531330000",src:"../static/image/sc22.jpg"},
			  		{name:"精心专用！法兰的歌声让你情绪在温暖的夜色和平",count:"53130000",src:"../static/image/sc19.jpg"},
			  		{name:"你妹听过的\"成功学\"说唱：人生赢家的秘诀在于洗澡",count:"31330000",src:"../static/image/sc20.jpg"},
			  		{name:"为N对情侣现场恋爱BGM.Kris Wu甘当电灯泡",count:"1338000",src:"../static/image/sc21.jpg"},
			  	]
			  },
			  
			}
		},
		onLoad() {

		},
		methods: {
			 shuffle(arr) {
			   arr.sort(function () {
			      return Math.random() - 0.5;
			   });
			},
           changing(val){
			   let a=val;
			   this.shuffle(a);
			  this.recommend.list=a;
			  
		   }
		}
	}
</script>

<style>
	
</style>
