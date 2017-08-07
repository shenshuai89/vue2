<template>
  <div id="child" @click="up">
      {{ childMsg }}
  </div>
</template>

<script>
import {Hub} from "../main.js"
export default {
  name: 'child',
  // props:["childMsg"]
  props:{
    childMsg:{
      type:String,
      default:"hello props"
    }
  },
  data(){
    return {
      
    }
  },
  created(){
    Hub.$on('eventName', () => {
      console.log("this is Hub $on message，count follow child Component number")
    })
  },
  methods:{
    up(){
      this.$emit('upup','msg from child')
    }
  },
  beforeDestroy() {
    Hub.$off('eventName')
  }
}
</script>

<style lang="less">

</style>
