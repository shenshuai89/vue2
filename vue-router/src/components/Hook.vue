<template>
  <div class="hook">
    this is hook component;
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name:'hook',
    beforeRouteEnter:(to,from,next)=>{
      console.log(to)
      console.log(from)
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log(to)
      console.log(from)
      console.log("准备离开路由模板");
      next();
    }
  }
</script>
