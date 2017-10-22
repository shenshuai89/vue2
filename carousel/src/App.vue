<template>
  <div id="app">
    <router-link to="/">轮播1(常规左右轮播)&nbsp;&nbsp;</router-link>
    <router-link to="/second">轮播2(显示缩略图轮播)&nbsp;&nbsp;</router-link>
    <router-link to="/third">轮播3(控制双区域轮播)</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
a:hover{
  text-decoration: none;
  color: #2c3e50;
}
a:link{
  text-decoration: none;
  color: #2c3e50;
}
</style>
