<template>
  <div class="content container">
    <div class="row">
      <div class="leftContent col-md-4">
        <pro-list></pro-list>
        <news-list></news-list>
      </div>
      <div class="rightContent col-md-8">
        <slide-show :slides="slides" :inv="invTime"></slide-show>
        <board></board>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import newsList from './NewsList.vue'
  import proList from './ProList.vue'
  import slideShow from './SlideShow.vue'
  import board from './Board.vue'
  export default{
    name: 'content',
    data(){
      return{
        invTime: 2500,
        slides:[
          {
            src:require('../assets/img/slide1.jpg'),
            title:'轮播图片1111',
            href:'detail/analysis'
          },
          {
            src:require('../assets/img/slide2.jpg'),
            title:'轮播图片2222',
            href:'detail/count'
          },
          {
            src:require('../assets/img/slide3.jpg'),
            title:'轮播图片3333',
            href:'detail/forecast'
          },
          {
            src:require('../assets/img/slide4.jpg'),
            title:'轮播图片4444',
            href:'detail/publish'
          }
        ]
      }
    },
    components: {
      newsList, proList, slideShow, board
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content{
  }

</style>
