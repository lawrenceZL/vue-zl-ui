<template>
  <div style="margin-top:20px">
    <tab-bar></tab-bar>
    <div style="height: 20px;"></div>
    <tab-bar select="2" text1="活动" text2="发现" text3="我的" tabnum="3" v-on:tabClick="tabClick"></tab-bar>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
  name: 'Example',
  components: {TabBar},
  methods: {
    tabClick (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
