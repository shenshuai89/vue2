<template>
  <div id="slide" @mouseover="clearInv" @mouseout="runInv">
    <div class="slideImg">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans" mode="out-in">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old" mode="out-in">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
        <!--<img :src="slides[nowIndex].src">-->
      </a>
    </div>
    <ul class="slidePages">
      <li @click="goto(goPrev)">&lt; </li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{ highLight:index === nowIndex}"> {{index + 1}} </a>
      </li>
      <li @click="goto(goNext)"> &gt;</li>
    </ul>
    <h2>{{slides[nowIndex].title}}</h2>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'slide',
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data(){
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    computed: {
      goPrev(){
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      goNext(){
        if (this.nowIndex === this.slides.length - 1) {
          return  0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goto(index){
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
      goLeft(){
        if (this.nowIndex == 0) {
          this.nowIndex = this.slides.length - 1
        } else {
          this.nowIndex--
        }
      },
      goRight(){
        if (this.nowIndex == this.slides.length - 1) {
          this.nowIndex = 0
        } else {
          this.nowIndex++
        }
      },
      runInv(){
        this.invId = setInterval(() => {
          this.goRight(this.nowIndex)
        }, this.inv)
      },
      clearInv(){
        clearInterval(this.invId)
      }
    },
    mounted() {
      this.runInv()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .slide-trans-enter-active {
    transition: all 0.5s
  }

  .slide-trans-enter {
    transform: translateX(-750px)
  }

  .slide-trans-old-leave-active {
    transition: all 0.5s;
    transform: translateX(750px)
  }

  #slide {
    width: 750px;
    height: 422px;
    overflow: hidden;
    margin-top: 20px;
    background-color: #d9dfe2;
    position: relative;
    .slideImg {
      width: 100%;
      img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    h2 {
      position: absolute;
      bottom: 0px;
      left: 10px;
      line-height: 28px;
      margin-bottom: 0;
      color: #fff;
      font-size: 16px;
      font-family: "Microsoft YaHei UI";
      font-weight: 400;
    }
    .slidePages {
      width: 100%;
      height: 28px;
      text-align:center;
      position: absolute;
      bottom: 0px;
      padding: 0;
      margin: 0;
      margin-bottom: 0;
      background-color: #000;
      opacity: 0.6;
      li {
        display: inline-block;
        list-style: none;
        line-height: 28px;
        font-size: 18px;
        color: #fff;
        margin-right: 10px;
        cursor: pointer;
        a {
          font-size: 18px;
          color: #fff;
        }
        .highLight {
          display: inline-block;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          line-height: 22px;
          background-color: #d1d1d1;
          color: #000000;
        }
      }
    }
  }

</style>
