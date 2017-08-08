<template>
  <div id="dialog" >
    <div class="dialog-wrapper">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="drop-down">
        <div class="dialog-content"  v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'dialog',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {}
    },
    methods:{
        closeMyself(){
            this.$emit('clickClose')
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .drop-down-enter-active {
    transition: all 1s;
  }
  .drop-down-leave-active {
    transition: all .6s;
  }
  .drop-down-enter,.drop-down-leave-active {
    transform:translateY(-500px)
  }

  #dialog {
    .dialog-wrapper {
      width: 100%;
      height: 100%;
      .dialog-cover {
        background: #000;
        opacity: .3;
        position: fixed;
        z-index: 99;
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
        z-index: 100;
        border: 2px solid #464068;
        padding: 2%;
        line-height: 1.6;
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
      }
    }

  }

</style>
