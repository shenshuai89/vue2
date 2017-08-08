<template>
  <div id="proList">
    <h2>全部产品</h2>
    <template v-for="product in productList">
      <h3>{{ product.title }}</h3>
      <ul class="pcApp" v-for="item in product.list">
        <li>
          <a :href="item.url">{{ item.name }}</a>
          <span v-if="item.hot" class="hotTag">HOT</span>
        </li>
      </ul>
      <hr v-if="!product.last">
    </template>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'prolist',
    data(){
      return {
        productList: {
          pc: {
            title: 'pc产品',
            list: [
              { name: '数据统计', url: '/detail/count'},
              { name: '数据预测', url: '/detail/forecast'},
              { name: '数据分析', url: '/detail/analysis', hot: true},
              { name: '广告发布', url: '/detail/publish'}
            ]
          },
          app: {
            title: 'app应用类',
            last: true,
            list: [
              { name: '91助手', url: 'http://imooc.com'},
              { name: '百度网盘', url: 'http://imooc.com'},
              { name: '百度地图', url: 'http://imooc.com'},
              { name: '迅雷下载', url: 'http://imooc.com'}
            ]
          }
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #proList {
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
    hr {
      border-top 1px solid #ddd
    }
    h3 {
      font-size: 16px
      font-weight: bold
      line-height: 32px;
      padding: 0;
      margin: 0;
      color: #6a6a6a
      padding-left 20%
      text-align left
    }
    .pcApp {
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
