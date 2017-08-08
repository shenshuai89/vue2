<template>
  <div class="childb">
    <p>this is b component,+5</p>
    count:{{count}}
    <div>
      <button @click="$store.commit('addb',5)">+</button>
      <button @click="$store.commit('reduceb',5)">-</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default{
    name:"childb",
    computed:mapState(['count'])
  }
</script>

