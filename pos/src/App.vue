<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import leftNav from "@/components/common/leftNav"
export default {
  name: 'app',
  mounted(){
    console.log('width app  '+(document.getElementById("leftnav").clientWidth));
  },
  components:{
      leftNav
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei UI",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 920px;
  text-align: left;
  color: #2c3e50;
}
.main{
  float:left;
  background-color: #EFF2F7;
  width:95%;
  height:100%;
  overflow: auto;
}
</style>
