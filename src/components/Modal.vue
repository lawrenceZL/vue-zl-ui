<template>
  <div v-if="isShow">
    <div class="fade" v-on:click="modalBlur"></div>
    <div class="succ-pop">
      <div v-if="!free">
        <div class='modal_title' v-if="titleShow">
          <div class="title">{{title}}</div>
          <div class="icon" v-on:click="close">
            <div class="close"></div>
          </div>
        </div>
        <div class="modal_content">
          <slot>
          </slot>
        </div>
        <div class="modal_footer" v-if="footerShow">
          <div class="footer_left" v-on:click="cancelClick">
            {{cancelText}}
          </div>
          <div class="footer_right" v-on:click="confirmClick">
            {{confirmText}}
          </div>
        </div>
      </div>
      <div v-if="free">
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    free: {
      type: Boolean,
      default: false
    },
    titleShow: {
      type: Boolean,
      default: true
    },
    footerShow: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    title: {
      type: String,
      default: '这是一个标题'
    }
  },
  methods: {
    returnData () {
      let json = {}
      json['isShow'] = this.isShow
      json['titleShow'] = this.titleShow
      json['footerShow'] = this.footerShow
      json['cancelText'] = this.cancelText
      json['confirmText'] = this.confirmText
      json['title'] = this.title
      return json
    },
    modalBlur (e) {
      // this.isShow = false
      this.$emit('modalBlur', this.returnData())
    },
    cancelClick (e) {
      // this.isShow = false
      this.$emit('onCancel', this.returnData())
    },
    confirmClick (e) {
      // this.isShow = false
      this.$emit('onOk', this.returnData())
    },
    close (e) {
      // this.isShow = false
      this.$emit('close', this.returnData())
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
  .fade{
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
  /*弹出层*/
  .succ-pop{
    width: 80%;
    /*height: 100%;*/
    background: #fff;
    position: fixed;
    left: 10%;
    top: 20%;
    /*margin-left: -200px;*/
    /*margin-top: -150px;*/
    z-index: 999;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #888888;
  }
  .modal_title{
    display: flex;
    flex: 1;
    align-items: center;
    padding: 23px 30px;
    border-bottom: 1px solid  #e6e6e6;
  }
  .title{
    display: flex;
    flex: 8;
  }
  .icon{
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .close{ display: inline-block; width: 30px;height:5px; background:  #b3b3b3;line-height: 0;font-size:0;vertical-align: middle;-webkit-transform: rotate(45deg);}
  .close:after{content:'/';display:block;width: 30px;height:5px; background:  #b3b3b3;-webkit-transform: rotate(-90deg);}
  .modal_content{
    padding: 30px 30px;
    border-bottom: 1px solid #e6e6e6;
  }
  .modal_footer{
    display: flex;
    flex: 1;
    align-items: center;
  }
  .footer_left{
    display: flex;
    flex: 1;
    justify-content: center;
    border-right: 0.02px solid #cccccc;
    padding: 20px 0;
  }
  .footer_right{
    display: flex;
    flex: 1;
    justify-content: center;
    border-left: 0.02px solid #cccccc;
    padding: 20px 0;
    color: #309FEA;
  }
  .footer_left:active{
    background-color:  #e6e6e6;
  }
  .footer_right:active{
    background-color:  #e6e6e6;
  }
</style>
