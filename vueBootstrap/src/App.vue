<template>
  <div id="app">
    <Header-bs></Header-bs>
    <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>

    <Footer-bs></Footer-bs>
  </div>

</template>

<script>
import Hello from './components/Hello'
import HeaderBs from './components/Header'
import FooterBs from './components/Footer'

export default {
  name: 'app',
  components: {
    HeaderBs,FooterBs
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
</style>
