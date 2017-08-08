<template>
  <div class="login-form">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail" class="col-sm-2 control-label">注册</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" placeholder="请填写注册的邮箱">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="请输入注册密码">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-default">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      'isShow': 'boolean'
    },
    data () {
      return {

      }
    },
    computed: {
      userErrors () {
        let status, errorText
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '必须包含@'
        }
        else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let status, errorText
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '必须包含@'
        }
        else {
          status = true
          errorText = ''
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      closeMyself () {
        this.$emit('clickClose')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
