<template>
  <div class="pos">
    <el-row>
      <el-col id="orderList" :span="9">
        <el-tabs v-model="activeName">
          <el-tab-pane label="点餐" name="first">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="240" fixed="right">
                <template scope="scope">
                  <!--这个里有两个参数，scope.$index和scope.row-->
                  <el-button type="danger" size="small" @click="delOne(scope.row,scope.$index)">删除</el-button>
                  <el-button type="info" size="small" @click="reduceOne(scope.$index)">- 减少</el-button>
                  <el-button type="success" size="small" @click="addOrderList(scope.row)">+ 增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div>
              共计购买数量：{{totalCount}},消费共计：￥{{totalMoney}}元
            </div>
            <div class="btn order-btn">
              <el-button type="warning" >挂单</el-button>
              <el-button type="danger" @click="delAll">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>

          </el-tab-pane>

          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>


      </el-col>
      <el-col :span="15">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">

            <ul>
              <li v-for="(goods,index) in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>

            </ul>
          </div>
        </div>

        <div class="goods-type">

          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods"  @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods"  @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>

          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "pos",
    data(){
      return {
        activeName: 'first',
        tableData: [],
        oftenGoods:[],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        totalCount:0,
        totalMoney:0
      }
    },
    created(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response=>{
          this.oftenGoods=response.data;
        })
        .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
        })
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response=>{
          this.type0Goods=response.data[0];
          this.type1Goods=response.data[1];
          this.type2Goods=response.data[2];
          this.type3Goods=response.data[3];
        })
        .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
        })
    },
    mounted() {
      var orderHeight = document.body.clientHeight;
      document.getElementById("orderList").style.height = orderHeight+'px';
    },
    methods: {
      // 添加商品到购物车
      addOrderList(goods){
        this.totalCount=0;
        this.totalMoney=0;

        let isHave =false
        // 如果tableData数据为空，则无法进行循环
        this.tableData.forEach((item,index)=>{
          if (item.goodsId == goods.goodsId){
            isHave = true
          }

        })
        if (!isHave){
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newGoods)
        }else{
          let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId)
          arr[0].count++

        }
        this.tableData.forEach(item=>{
          this.totalCount +=item.count;
          this.totalMoney=this.totalMoney+(item.price*item.count);
        })
      },

      addOne(n){
        this.tableData[n].count++
        this.totalCount++
        this.totalMoney=this.totalMoney+(this.tableData[n].price);

      },
      reduceOne(n){
        this.tableData[n].count--;
        this.totalCount--;
        this.totalMoney=this.totalMoney-this.tableData[n].price;
        if(this.tableData[n].count==0){
          this.tableData.splice(n,1);
        }
      },

      delOne(goods,n){
        this.totalCount= this.totalCount - this.tableData[n].count;
        this.totalMoney= this.totalMoney-this.tableData[n].price*this.tableData[n].count;
        // this.tableData.splice(n,1)
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
      },

      delAll(){
        this.tableData=[]
        this.totalCount=0
        this.totalMoney=0
      },

      checkout() {
        if (this.totalCount!=0) {
          this.tableData = [];
          this.totalCount = 0;
          this.totalMoney = 0;
          this.$message({
            message: '结账成功，感谢你又为店里出了一份力!',
            type: 'success'
          });

        }else{
          this.$message.error('不能空结。老板了解你急切的心情！');
        }

      }

    }
  }
</script>

<style scoped>
  #orderList{
    border-right:2px solid #c9cbd0;
  }
  .order-btn{
    text-align: center;
    margin-top:30px;
  }
  .title{
    font-size: 18px;
    height: 21px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
  }

  .often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
  }
  .goods-type{
    clear: both;
  }
  .o-price{
    color:#58B7FF;
  }
  .cookList li{
    list-style: none;
    width: 178px;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;

  }
  .cookList li span{

    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }

</style>
