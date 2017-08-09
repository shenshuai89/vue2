<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>
      <p>编程式导航</p>
      <button @click="goBack">back</button>
      <button @click="forward">forward</button>
      <button @click="goUrl">goUrl</button>
    </div>
    <router-link to="/">home</router-link>
    <router-link to="/hi">Hi</router-link>
    <router-link to="/hi/hi1">Hi1</router-link>
    <router-link to="/hi/hi2">Hi2</router-link>
    <router-link :to="{name:'params',params:{username:'sam',id:'10001'}}">params</router-link>
    <router-link to="/left">left</router-link>
    <router-link to="/right">rigth</router-link>
    <router-link to="/url/110/police">url</router-link>
    <router-link to="/redirect">redirect</router-link>
    <router-link to="/alis">alias</router-link>
    <router-link to="/hook">hook</router-link>


    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>


  </div>
</template>

<script>
  export default {
    name: 'app',
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      forward(){
        this.$router.go(1)
      },
      goUrl(){
          this.$router.push('/url/666/setUrl')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .left {
    width: 50%;
    height: 300px;
    float: left;
    padding-top:30px;
    font-size: 36px;
    background-color: #d2d6da;
  }

  .right {
    width: 50%;
    height: 300px;
    float: right;
    padding-top:30px;
    font-size: 36px;
    background-color: #41b883;
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-enter-active{
    transition:opacity 0.5s;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
