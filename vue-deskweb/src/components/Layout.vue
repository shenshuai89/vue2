<template>
  <div class="layout">
    <v-header></v-header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import VHeader from 'Header.vue'
  import VFooter from 'Footer.vue'
  export default{
    name: 'layout',
    components: {
      VHeader, VFooter
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
