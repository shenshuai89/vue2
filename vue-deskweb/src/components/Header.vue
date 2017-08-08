<template>
  <div id="Header">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container head-con">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png" class="logo">
        </router-link>
        <ul class="login">
          <li v-show="username">{{ username }} |</li>
          <li @click="logClick" v-show="!username">登录 |</li>
          <li @click="regClick" v-show="!username">注册 |</li>
          <li @click="quitClick" v-show="username"> 退出 |</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </nav>
    <my-dialog :isShow="isShowLogDialog" @clickClose="closeDialog('isShowLogDialog')">
      <p>登录弹框</p>
      <log-form @hasLog="onSuccesslog"></log-form>
    </my-dialog>
    <my-dialog :isShow="isShowRegDialog" @clickClose="closeDialog('isShowRegDialog')">
      <p>注册弹框</p>
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :isShow="isShowAboutDialog" @clickClose="closeDialog('isShowAboutDialog')">
      <p>异步编程：JS是单线程，异步编程尤为重要。当我们向后端请求数据，是异步的，如果没有处理好相关的异步操作，是会有各种问题的。JS可以利用setTimeout、回调、Generator、Promise、Async。定时这种方式太麻烦，还是不推荐；回调层次多了，有回调地狱，代码维护性很差；Generator需要手动去执行，当然可以使用类似co的模块。相比之下Promise和Async是比较理想的。</p>
    </my-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
  import Dialog from './Dialog.vue'
  import regForm from './RegForm.vue'
  import logForm from './LogForm.vue'
  export default{
    name: 'Header',
    data(){
      return {
        isShowAboutDialog:false,
        isShowLogDialog:false,
        isShowRegDialog:false,
        username:''
      }
    },
    components:{
        myDialog:Dialog,logForm,regForm
    },
    methods: {
      logClick(){
        this.isShowLogDialog = true
      },
      regClick(){
        this.isShowRegDialog = true
      },
      aboutClick(){
        this.isShowAboutDialog = true
      },
      closeDialog(attr){
        this[attr] = false
      },
      onSuccesslog(data){
          //console.log(data)
        this.closeDialog('isShowLogDialog')
        this.username = data.data.username
      },
      quitClick(){
        this.username = ''
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Header {
    height: 60px;
    .navbar {
      height: 60px;
      padding: 0;
      .head-con {
        height: 60px;
        line-height: 60px
        .logo {
          width: 40px
          height: 40px
          float: left
          margin-top: 10px
        }
        .login {
          float: right;
          line-height: 60px;
          li {
            display: inline-block;
          }
        }
      }
    }
    .navbar-fixed-top{
      z-index : 9
    }
  }
</style>
