<template>
  <div class="login-form">
    <div class="form-horizontal">
      <div class="form-group">
        <label for="inputUsername" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputUsername" v-model="usernameModel" placeholder="请输入用户名">
          <span class="error">{{ userErrors.errorText}}</span>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" v-model="passwordModel" placeholder="密码">
          <span class="error">{{ passwordErrors.errorText}}</span>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-default" @click="onLogin">登录</button>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors () {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '不包含@'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码不是1-6位'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
         // console.log(this.usernameModel, this.passwordModel)
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '部分选项未通过'
        }
        else {
          this.errorText = ''
          axios.get('../api/login').then((res) => {
              //console.log(res.data)
              this.$emit('hasLog', res.data)
          }, (error) =>{
              console.log(error)
          })
          /*this.$http.get('api/login')
            .then((res) => {
              this.$emit('has-log', res.data)
            }, (error) => {
              console.log(error)
            })*/
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .error{
    color:red;
  }
</style>
