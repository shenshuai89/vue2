<template>
  <div class="childa">
    <p>this is a component</p>
    count:{{count}}
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
    <hr>
    <p>actions方法的调用</p>
    <div>
      <button @click="addActions">+</button>
      <button @click="reduceActions">-</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default{
    name:"childa",
    computed:{
      ...mapState(['count']),
      // ...mapGetters(['count'])
    },
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addActions','reduceActions'])
    }
  }
</script>

