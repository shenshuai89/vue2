<template>
  <div id="son">
  	<div @click="up">
  		this is son component;
  	</div>
    <div @click="changeHub">click Hub event</div>
  </div>
</template>

<script>
import {Hub} from "../main.js"
export default {
  name: 'son',
  // props:["childMsg"]
  props:{
    childMsg:{
      type:String,
      default:"hello props"
    }
  },
  methods:{
    up(){
      this.$emit('upup','msg from son')
    },
    changeHub(){
    	Hub.$emit('eventName')
    }
  }
}
</script>

<style lang="less">

</style>
