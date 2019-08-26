<template>
  <div style="margin-top:20px">
    <tab-bar></tab-bar>
    <div style="height: 20px;"></div>
    <tab-bar select="2" text1="活动" text2="发现" text3="我的" tabnum="3" v-on:tabClick="tabClick"></tab-bar>
    <div style="height: 20px;"></div>
    <search-bar></search-bar>
    <div style="height: 20px;"></div>
    <search-bar placeholder="这是一个placeholder" v-on:textInput="textInput" v-on:inputBlur="inputBlur"
                v-on:inputFocus="inputFocus" v-on:onSearch="onSearch" defaultValue="这是一个默认值"></search-bar>
    <div style="height: 20px;"></div>
    <left-right-select :list="list" :index="index" loop="true" v-on:selectClick="selectClick"></left-right-select>
    <div style="height: 20px;"></div>
    <left-right-select :list="list"  v-on:selectClick="selectClick"></left-right-select>
    <div style="height: 20px;"></div>
    <calendar :list="can_select_list" default-value="2019-08-30" :isSelectDefault="isSelectDefault"></calendar>
    <modal :titleShow='titleShow' :footerShow="footerShow" :isShow="isShow" cancelText="取消按钮"
    confirmText="确认按钮" title="更换后的标题" v-on:onCancel="onCancel" v-on:onOk="onOk" v-on:close="onCancel" v-on:modalBlur="onCancel">
      <div>这是content这是content</div>
      <div>这是content</div>
      <div>这是content</div>
      <div>这是content</div>
      <div>这是content</div>
    </modal>
    <div style="height: 20px;"></div>
    <div class="open_modal"><button class="button" v-on:click="openModal">打开modal</button></div>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
import SearchBar from '../components/SearchBar'
import LeftRightSelect from '../components/LeftRightSelect'
import Modal from '../components/Modal'
import Calendar from '../components/Calendar'
export default {
  name: 'Example',
  components: {Calendar, Modal, LeftRightSelect, SearchBar, TabBar},
  methods: {
    tabClick (e) {
      console.log(e)
    },
    textInput (e) {
      console.log('textInput')
      console.log(e)
    },
    inputBlur (e) {
      console.log('inputBlur')
      console.log(e)
    },
    inputFocus (e) {
      console.log('inputFocus')
      console.log(e)
    },
    onSearch (e) {
      console.log('onSearch')
      console.log(e)
    },
    selectClick (e) {
      console.log(e)
    },
    openModal (e) {
      this.isShow = true
    },
    onOk (e) {
      this.isShow = false
      console.log(e)
    },
    onCancel (e) {
      this.isShow = false
      console.log(e)
    }
  },
  data () {
    return {
      list: [0, 1222, '允许循环', 3, 4, 5],
      index: 2,
      loop: true,
      content: 'hhh',
      titleShow: true,
      footerShow: true,
      isShow: false,
      can_select_list: ['2019-08-23', '2019-08-30', '2019-08-25', '2019-08-26', '2019-08-27', '2019-08-28', '2019-08-29'],
      isSelectDefault: true
    }
  }
}
</script>

<style scoped>
.open_modal{
  display: flex;
  flex: 1;
  justify-content: center;
}
.button{
  width:8em;
  text-align:center;
  line-height:2em;
  padding:0.3em;
  font:16px Arial,sans-serif bold;
  font-style:normal;
  text-decoration:none;
  margin:2px;
  vertical-align:text-bottom;
  zoom:1;
  outline:none;
  font-size-adjust:none;
  font-stretch:normal;
  border-radius:10px;
  box-shadow:0px 1px 2px rgba(0,0,0,0.2);
  text-shadow:0px 1px 1px rgba(0,0,0,0.3);
  color:#fefee9;
  border:0.2px solid #2299ff;
  background-repeat:repeat;
  background-size:auto;
  background-origin:padding-box;
  background-clip:padding-box;
  background-color:#3399ff;
  background: linear-gradient(to bottom, #eeeff9 0%,#3399ff 100%);
}
</style>
