<template>
  <div class="content">
    <i id="arrow-left" class="arrow" @click="tLeft"></i>
		<i id="arrow-right" class="arrow" @click="tRight"></i>
		<p id="topInfo" class="info">这是第{{num+1}}/{{arrImg.length}}</p>
		<p id="btomInfo" class="info">{{arrText[num].msg}}</p>
    <span v-for="(img, index) in arrImg" :key="index" v-if="index==num">
		  <img id="imgsrc" :src="arrImg[index]">
    </span>
		<ul id="lists">
			<li v-for="(txt, index) in arrText" :key="index" :class="[index==num ? 'active' :'']" @mouseenter='tab(index)'>
        {{index+1}}
      </li>
		</ul>
  </div>
</template>

<script scoped>
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 0,
      arrImg:['../../static/img/img_01.jpg', '../../static/img/img_02.jpg', '../../static/img/img_03.jpg', 
      '../../static/img/img_04.jpg', '../../static/img/img_05.jpg'],
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div,p{
        margin:0;
      }

		.content{
			width: 1000px;
			height: 504px;
			margin: 0 auto;
			position: relative;
		}
		#imgsrc{
			width: 1000px;
			height: 504px;
		}
		.arrow{
			position: absolute;
			width: 50px;
			height: 100px;
			top: 200px;
			background-color: #e1e1e1;
			opacity: 0.4;
		}
		.arrow:hover{
			opacity: 1;
			cursor: pointer;
		}
		#arrow-left{
			left: 0;
			background-image: url("../../static/img/arrows.png");
			background-repeat: no-repeat;
			background-position: -4px -22px;
		}
		#arrow-right{
			right: 0;
			background-image: url("../../static/img/arrows.png");
			background-repeat: no-repeat;
			background-position: -84px -22px;
		}
		.info{
			width: 100%;
			height: 30px;
			font-size: 18px;
			line-height: 30px;
			margin: 0 auto;
			padding: 0;
			position: absolute;
			text-align: center;
			background-color: #f1f1f1;
			opacity: 0.6;
		}
		#btomInfo{
			bottom: 0px;
		}

		#lists{
			width: 580px;
			margin: 0 auto;
			padding: 0;
			list-style: none;
		}
		#lists li{
			width: 100px;
			height: 40px;
			float: left;
			margin-right: 15px;
			font-size: 12px;
			line-height: 40px;
			text-align: center;
			color: #ccc;
			background-color: #333;
		}
		#lists li.active{
			background-color: #de3d10;
		}
</style>
