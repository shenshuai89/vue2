/**
 * Created by sam on 2017/2/8.
 */
new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        list: [],
        productList: [],
        checkAll: false,
        showModal:false,
        curProduct:''
    },
    filters: {
        formatMoney: function (value,type) {
            return "￥ " + value.toFixed(2)+type;
        }
    },
    computed:{
        isEmpty(){
            return !this.totalMoney;
        },
        toLink(){
            if(this.totalMoney == 0){
                return 'javascript:void(0)';
            }else {
                return 'address.html';
            }
        }
    },
    //实例创建并加载完成
    mounted: function () {
        this.cartView();
    },
    methods: {
        cartView(){
            var that = this;
            this.$http.get("data/cartData.json").then(function (res) {
                that.productList = res.body.result.list;
                // that.totalMoney = res.body.result.totalMoney;
            })
        },
        changeMoney(product, way){
            if (way > 0) {
                product.productQuentity++;
            } else {
                product.productQuentity--;
                if (product.productQuentity < 1) {
                    product.productQuentity = 1;
                }
            }
            this.calcTotalPrice();
        },
        selectedProduct(product){
            if (typeof product.check == 'undefined') {
                Vue.set(product, "check", true);
            } else {
                product.check = !product.check;
            }
            this.calcTotalPrice();
        },
        checkAllHandle(flag){
            this.checkAll = flag;
            var that = this;
            this.productList.forEach(function (product, index) {
                if (typeof product.check == 'undefined') {
                    that.$set(product, "check", that.checkAll);
                } else {
                    product.check = that.checkAll;
                }
            })
            this.calcTotalPrice();
        },
        calcTotalPrice(){
            var that = this;
            this.totalMoney = 0;
            this.productList.forEach(function (product, index) {
                if (product.check) {
                    that.totalMoney += product.productQuentity * product.productPrice;
                }
            })
        },
        delConfirm(item){
            this.showModal = true;
            this.curProduct = item;
        },
        delProduct(){
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index,1);
            this.showModal = false;
        }
    }
})
//全局过滤器
Vue.filter("moneyF", function (vaule, type) {
    return "￥" + vaule.toFixed(2) + type;
})