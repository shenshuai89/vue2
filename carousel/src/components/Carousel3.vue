<template>
  <div class="wrapper">
		<div class="group">
			<button id="prev" class="group" @click="prev">上一组</button>
			<button id="next" class="group" @click="next">下一组</button>
		</div>
		
		<div class="first">
			<button id="left" class="arrow" @click="tLeft"></button>
			<button id="right" class="arrow" @click="tRight"></button>
			<span v-for="(img, index) in arrImg" :key="index" v-if="index==num">
				<img id="image" :src="arrImg[index]">
			</span>
			<ul id="list">
				<li v-for="(txt, index) in arrText" :key="index" 
				:class="[index==num ? 'active' :'']" @click='tab(index)' @mouseenter='show(index)' @mouseout="hidden(index)">
					{{index+1}}
				</li>
				<span v-for="(txt, index) in arrImg" :key="index">
					<transition name="fade">
						<img class="sml" :src="arrImg[index]" :style="{left:(index*40)-210+'px'}" v-show="index==overNum">
					</transition>
				</span>
			</ul>
		</div>
		<div class="second">
			<button id="left2" @click="tLeft1"></button>
			<button id="right2" @click="tRight1"></button>
			<span v-for="(img, index) in arrImg2" :key="index" v-if="index==num1">
				<img id="image2" :src="arrImg2[index]">
			</span>
			<ul id="list2">
				<li v-for="(txt, index) in arrImg2" :key="index" 
				:class="[index==num1 ? 'active' :'']" @click='tab1(index)' @mouseenter='show1(index)' @mouseout="hidden1(index)">
					{{index+1}}
				</li>
				<span v-for="(txt, index) in arrImg2" :key="index">
					<transition name="fade">
						<img class="sml" :src="arrImg2[index]" :style="{left:(index*40)-130+'px'}" v-show="index==overNum1">
					</transition>
				</span>
			</ul>
		</div>
	</div>
    
</template>

<script>
export default {
  name: 'third',
  data () {
    return {
      num: 0,
      num1: 0,
			overNum:-1,
			overNum1:-1,
      arrImg:['../../static/img/1.jpg', '../../static/img/2.jpg', '../../static/img/3.jpg', 
      '../../static/img/4.jpg', '../../static/img/5.jpg'],
			arrImg2:['../../static/img/b1.jpg', '../../static/img/b2.jpg', '../../static/img/b3.jpg'],
      arrText:[ 
        {msg:'这是第一张图片'},
        {msg:'这是第二张图片'},
        {msg:'这是第三张图片'},
        {msg:'这是第四张图片'},
        {msg:'这是第五张图片'}]
    }
  },
  mounted(){
  },
  methods:{
		prev(){
			if(this.num <= 0){
        this.num = this.arrImg.length-1
      }else{
        this.num --;
      }
			if(this.num1 <= 0){
        this.num1 = this.arrImg2.length-1
      }else{
        this.num1 --;
      }
		},
		next(){
			if(this.num >= this.arrImg.length-1){
        this.num = 0
      }else{
        this.num ++;
      }
			if(this.num1 >= this.arrImg2.length-1){
        this.num1 = 0
      }else{
        this.num1 ++;
      }
		},
    tLeft(){
      if(this.num <= 0){
        this.num = this.arrImg.length-1
      }else{
        this.num --;
      }
    },
		tLeft1(){
      if(this.num1 <= 0){
        this.num1 = this.arrImg2.length-1
      }else{
        this.num1 --;
      }
    },
    tRight(){
      if(this.num >= this.arrImg.length-1){
        this.num = 0
      }else{
        this.num ++;
      }
    },
		tRight1(){
      if(this.num1 >= this.arrImg2.length-1){
        this.num1 = 0
      }else{
        this.num1 ++;
      }
    },
    tab(n){
      this.num = n
    },
		tab1(n){
      this.num1 = n
    },
		show(n){
			this.overNum = n
    },
		show1(n){
			this.overNum1 = n
    },
		hidden(n){
			this.overNum = -1
		},
		hidden1(n){
			this.overNum1 = -1
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
			margin: 0px;
			padding: 0px;
			list-style: none;
		}
		.wrapper{
			width: 1000px;
			position: relative;
			margin:0 auto;
		}
		.group{
			width: 150px;
			height: 60px;
			position: relative;
			left: 0;
			right: 0;
			margin: auto;
			padding: 15px 0;
		}
		#next{
			top: -60px;
			left: 160px;
		}
		button{
			width: 36px;
			height: 36px;
			border:none;
			position: absolute;
			z-index: 99;
		}
		button:hover{
			cursor: pointer;
		}
		button:focus{
			outline:0px;
			-webkit-outline:0px;
		}
		.first{
			width: 460px;
			position: relative;
		}
		.second{
			width: 340px;
			left: 600px;
			position: relative;
		}
		#left{
			top: 160px;
			left: 0;
			background: url("../../static/img/arrows.png") no-repeat 0px 0px;
		}
		#left:hover{
			background: url("../../static/img/arrows.png") no-repeat -80px 0px;
		}
		#right{
			background: url("../../static/img/arrows.png") no-repeat -40px 0px;
			right: 10px;
			top: 160px;
		}
		#right:hover{
			background: url("../../static/img/arrows.png") no-repeat -120px 0px;
		}
		#left2{
			top: 180px;
			left: 0px;
			background: url("../../static/img/arrows.png") no-repeat 0px 0px;
		}
		#left2:hover{
			background: url("../../static/img/arrows.png") no-repeat -80px 0px;
		}
		#right2{
			background: url("../../static/img/arrows.png") no-repeat -40px 0px;
			right: 0px;
			top: 180px;
		}
		#right2:hover{
			background: url("../../static/img/arrows.png") no-repeat -120px 0px;
		}
		#image{
			width: 360px;
			position: absolute;
			left: 45px;
		}
		#image2{
			height: 400px;
			position: absolute;
			left: 45px;
		}
		#list{
			width: 210px;
			list-style: none;
			position: absolute;
			top: 360px;
			left: 0;
			right: 0;
			margin: auto;
			font-size: 0;
		}
		#list li{
			width: 30px;
			height: 30px;
			display: inline-block;
			font-size: 16px;
			border-radius: 15px;
			margin-right: 10px;
			position: relative;
			background-color: #ccc;
			text-align: center;
			line-height: 30px;
		}
		#list li:hover{
			cursor: pointer;
		}
		#list li.active{
			background-color: #d00;
			color: white;
		}
		#list span{
			position: absolute;
			top:28px;
		}
		#list2{
			width: 210px;
			list-style: none;
			position: absolute;
			top: 410px;
			left: 0;
			right: 0;
			margin: auto;
			font-size: 0;
		}
		#list2 li{
			width: 30px;
			height: 30px;
			display: inline-block;
			font-size: 16px;
			border-radius: 15px;
			margin-right: 10px;
			position: relative;
			background-color: #ccc;
			text-align: center;
			line-height: 30px;
		}
		#list2 li:hover{
			cursor: pointer;
		}
		#list2 li.active{
			background-color: #d00;
			color: white;
		}
		#list2 span{
			position: absolute;
			top:28px;
		}
		.sml{
			position: relative;
			left: -12px;
			top: 5px;
			width: 50px;
			height: 50px;
			border-radius: 10px;
		}
		.fade-enter-active, .fade-leave-active {
			transition: opacity 1s
		}
		.fade-enter, .fade-leave-to {
			opacity: 0
		}
</style>
