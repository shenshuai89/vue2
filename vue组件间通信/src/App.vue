<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="text-green">hello</h1>
    <child :child-msg="msg" @upup="change"></child>
    <child :child-msg="msg2" ></child>
    <child></child>
    <!-- 有几个child组件，就会触发几次eventName事件 -->

    <son @upup="changeSon"></son>
    <router-view></router-view>
  </div>
</template>

<script>
import child from "./views/child.vue"
import son from "./views/son.vue"

export default {
  name: 'app',
  data(){
    return {
      msg:"clickme",
      msg2:"message 2"
    }
  },
  methods:{
    change(msg){
      this.msg = msg
    },
    changeSon(m){
      console.log(m)
    }
  },
  components:{ child,son }
}
</script>

<style lang="less">
@import "./assets/css/base.less";
.text-green{
  color:@green;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
