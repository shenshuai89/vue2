<template>
  <div id="newslist">
    <h2>新闻列表</h2>
    <ul class="news" v-for="news in newsList">
      <li>
        <a :href="news.url" class="new-item">{{ news.title }}</a>
        <span v-if="news.hot" class="hotTag">HOT</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  export default{
    name: 'newslist',
    created(){
      axios.get('api/newsList').then((response) =>{
          /// console.log(response.data)
          this.newsList = response.data.data
      },(err) => {
        console.log(err)
      })
    },
    data(){
      return {
        newsList: []
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #newslist {
    width: 100%;
    background: #f1f1f1;
    margin-bottom: 20px;
    padding-bottom: 20px;
    h2 {
      background: #32bd97
      text-align left
      padding-left 20%
      color: #fff
      font-size: 18px
      line-height: 32px;
    }
    .news {
      margin-left: 0px;
      padding-left: 0px;
      li {
        list-style: none;
        line-height: 30px;
        text-align: left;
        margin-left: 25%;
        a {
          font-size: 14px;
        }
        .new-item{
          display: inline-block
          width: 100px
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap
        }
        .hotTag {
          font-size: 12px;
          background: #d00000;
          color: #fff;
          vertical-align: top
        }
      }
    }
  }
</style>
