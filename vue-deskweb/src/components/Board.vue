<template>
  <div id="boardList">
    <div class="index-board-list">
      <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last': index%2 !==0}]">
        <div class="index-board-item-inner">
          <img :src="item.src" alt="">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <div class="index-board-button">
            <button class="btn btn-info"><a :href="item.href">立即购买</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'board',
    data(){
      return {
        boardList: [
          {title: '开放产品',href:'/detail/count', src: require('../assets/img/earth.jpg'), description: '开放产品是一款拥抱时代变化的产品', saleout: false},
          {title: '品牌营销',href:'/detail/forecast', src: require('../assets/img/loud.jpg'), description: '品牌营销帮助你的产品更好的找到产品定位', saleout: false},
          {title: '使命必达',href:'/detail/analysis', src: require('../assets/img/car.jpg'), description: '使命必达是快速迭代，永远保持最前端的速度', saleout: true},
          {title: '勇攀高峰',href:'/detail/publish', src: require('../assets/img/hill.jpg'), description: '帮你到达顶级，到达事业的顶峰', saleout: false},
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #boardList {
    margin-top: 20px;
    .index-board-list {
      margin-bottom: 20px;
      padding: 0;
      .index-board-item {
        width: 49%;
        min-height: 245px;
        display: inline-block;
        text-align: center;
        margin-bottom: 20px;
        margin-right: 2%;
        border: 1px solid #ccc;
        h2 {
          font-size: 18px;
          font-weight: 600
          margin-top: 10px;
        }
        p {
          padding: 0 20px;
          height: 40px;
          overflow hidden
        }
        img {
          width: 100px;
          height: 100px;
        }
        .index-board-item-inner {
          padding-bottom: 20px;
          .index-board-button{
            a{
              color:#fff;
            }
          }
        }
      }
      .line-last {
        margin-right: 0;
      }
    }
  }
</style>
