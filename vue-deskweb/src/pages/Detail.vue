<template>
  <div>
    <v-Header></v-Header>
    <div class="wrapper">
      <div class="detail-left">
        <div class="product-board">
          <img :src="productIcon">
          <ul>
            <router-link v-for="(item,index) in products" :key="index" :to="{ path: item.path }" tag="li" active-class="active">
              {{ item.name }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

    <v-footer></v-footer>

  </div>
</template>
<script type="text/ecmascript-6">
  import vHeader from '../components/Header'
  import vFooter from '../components/Footer'
  export default{
    name: 'detail',
    components: {
      vHeader, vFooter
    },
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/img/car.jpg'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require("../assets/img/car.jpg"),
          '/detail/forecast': require("../assets/img/earth.jpg"),
          '/detail/analysis': require("../assets/img/hill.jpg"),
          '/detail/publish': require("../assets/img/loud.jpg")
        }
      }
    },
    computed: {
      productIcon () {
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom:50px;
    padding-top: 20px;
  }

  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }

  .detail-right {
    float: left;
    width: 980px;
    background: #e6e6e6;
    padding:20px;
    margin-left: 20px;
  }

  .product-board {
    background: #e6e6e6;
    padding: 20px 0;
  }

  .product-board ul {
    margin:0;
    padding: 0;
    margin-top: 20px;
  }

  .product-board li {
    text-align: left;
    list-style: none;
    padding: 10px 35px;
    cursor: pointer;
  }

  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }

  .product-board li a {
    display: block;
  }

  .sales-board {
    background: #fff;
  }

  .sales-board-form {

  }

  .sales-board-intro h2 {
    font-size: 20px;
    margin:0;
    padding: 20px;
  }

  .sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
  }

  .sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
  }

  .sales-board-line {
    clear: both;
    padding-bottom: 20px;
  }

  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }

  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }

  .sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
  }

  .sales-board-des p {
    line-height: 1.6;
  }

  .sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }

  .sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }

  .sales-board-des li {
    padding: 5px 0;
  }

  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }

  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }

  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
</style>
