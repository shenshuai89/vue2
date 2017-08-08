<template>
  <div>
    <v-Header></v-Header>
    <v-content></v-content>
    <v-footer></v-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from '../components/Header.vue'
  import vFooter from '../components/Footer.vue'
  import vContent from '../components/Content.vue'
  export default{
    name: 'Index',
    data(){
      return {}
    },
    components: {
      vHeader, vFooter, vContent
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
