<template>
  <div class="leftNav" id="leftnav">
    <ul>
      <li>
        <i class="icon iconfont icon-cart"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-shop"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-favor"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-profile"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-notification"></i>
        <div>统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-settings"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'leftNav',
    data(){
      return {}
    },
    mounted(){
      console.log('width '+(document.getElementById("leftnav").clientWidth));
    }
  }
</script>

<style>
  .leftNav {
    width: 5%;
    height: 100%;
    float: left;
    color: #fff;
    font-size: 10px;
    background-color: #1D8ce0;
  }

  .iconfont {
    font-size: 24px;
  }

  .leftNav ul {
    padding: 0px;
    padding-top: 20px;
    margin: 0px;
  }

  .leftNav li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
</style>
