<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <hr>
    this is App vue's count:{{count}}
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import store from './vuex/store.js'
import childa from './components/Childa.vue'
import childb from './components/Childb.vue'

export default {
  name: 'app',
  data(){
      return{
          msg:"hello vuex"
      }
  },
  computed:mapState(['count']),
  components:{ childa, childb },
  methods:mapMutations(['add','reduce']),
  // 在根组件中添加store，就可以在各个子组件中使用
  store
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
