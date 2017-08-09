<template>
  <div class="url">
    this is url params;
    <p>
      <i>通过url进行传参newsid：</i>{{$route.params.newsid}}<br>
      <i>通过url进行传参newstitle：</i>{{$route.params.newsTitle}}
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      name:'url'
  }
</script>

