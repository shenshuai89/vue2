<template>
  <div class="wrapper">
    <button id="left"  @click="tLeft"></button>
		<button id="right"  @click="tRight"></button>
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
</template>

<script scoped>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 0,
			overNum:-1,
      arrImg:['../../static/img/1.jpg', '../../static/img/2.jpg', '../../static/img/3.jpg', 
      '../../static/img/4.jpg', '../../static/img/5.jpg'],
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
    tLeft(){
      if(this.num <= 0){
        this.num = this.arrImg.length-1
      }else{
        this.num --;
      }
    },
    tRight(){
      if(this.num >= this.arrImg.length-1){
        this.num = 0
      }else{
        this.num ++;
      }
    },
    tab(n){
      this.num = n
    },
		show(n){
			this.overNum = n
    },
		hidden(n){
			this.overNum = -1
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
			margin: 0px;
			padding: 0px;
			list-style: none;
		}
		.wrapper{
			width: 700px;
			position: relative;
			margin:0 auto;
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
		#left{
			top: 280px;
			left: 0;
			background: url("../../static/img/arrows.png") no-repeat 0px 0px;
		}
		#left:hover{
			background: url("../../static/img/arrows.png") no-repeat -80px 0px;
		}
		#right{
			background: url("../../static/img/arrows.png") no-repeat -40px 0px;
			right: 10px;
			top: 280px;
		}
		#right:hover{
			background: url("../../static/img/arrows.png") no-repeat -120px 0px;
		}
		#image{
			position: absolute;
			left: 45px;
		}
		#list{
			width: 210px;
			list-style: none;
			position: absolute;
			top: 600px;
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
