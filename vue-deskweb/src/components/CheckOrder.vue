<template>
  <div>
    <this-dialog :isShow="isShowCheckDialog" @clickClose="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :isShow="isShowSuccessDialog" @clickClose="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :isShow="isShowFailDialog" @clickClose="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import Dialog from './Dialog.vue'
  export default {
    components: {
      thisDialog: Dialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: [String, Number]
      }
    },
    data () {
      return {
        isShowSuccessDialog: false,
        isShowFailDialog: false
      }
    },
    methods: {
      checkStatus () {
        this.$http.post('/api/checkOrder', {
          orderId: this.orderId
        })
          .then((res) => {
            this.isShowSuccessDialog = true
            this.$emit('on-close-check-dialog')
          }, (err) => {
            this.isShowFailDialog = true
            this.$emit('on-close-check-dialog')
          })
      },
      toOrderList () {
          //在组件内的路由跳转，和router-link效果一样
        this.$router.push({path: '/orderList'})
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
