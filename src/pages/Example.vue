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
    <left-right-select style="width: 200px" :list="list" :index="index" loop="true" v-on:selectClick="selectClick"></left-right-select>
    <div style="height: 20px;"></div>
    <left-right-select :list="list"  v-on:selectClick="selectClick"></left-right-select>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
import SearchBar from '../components/SearchBar'
import LeftRightSelect from '../components/LeftRightSelect'
export default {
  name: 'Example',
  components: {LeftRightSelect, SearchBar, TabBar},
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
    }
  },
  data () {
    return {
      list: [0, 1222, '允许循环', 3, 4, 5],
      index: 2,
      loop: true
    }
  }
}
</script>

<style scoped>

</style>
