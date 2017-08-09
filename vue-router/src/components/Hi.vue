<template>
  <div class="hi">
    this is hi component;
    <router-view class="childRoute"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      name:'Hi'
  }
</script>
<style>
  .childRoute{
    width: 300px;
    height:100px;
    margin: 0 auto;
    padding-top:50px;
    font-size: 30px;
    border-radius: 10px;
    color:#fff;
    background: #8d7c96;
  }
</style>

