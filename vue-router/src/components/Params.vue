<template>
  <div class="params">
    <p>
      <i>通过name进行传参username：</i>{{$route.params.username}}<br>
      <i>通过name进行传参id：</i>{{$route.params.id}}
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      name:'params'
  }
</script>
