<template>
  <div class="container">
    <div class="search">
      <div class="search_box">
        <!--<span class="searchicon"></span>-->
        <img class="searchicon" src="../assets/imgs/search.png" v-on:click="search"/>
        <input type="search" class="search_input" id="searchInput" v-model="data" :placeholder="placeholder" v-on:input="change" v-on:blur="blur" v-on:focus="focus">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String
    },
    defaultValue: {
      type: String
    }
  },
  data () {
    return {
      data: this.defaultValue
      // height: '3rem'
    }
  },
  methods: {
    change (e) {
      e.value = this.data
      this.$emit('textInput', e)
      // console.log(this.data)
    },
    blur (e) {
      e.value = this.data
      this.$emit('inputBlur', e)
    },
    focus (e) {
      e.value = this.data
      this.$emit('inputFocus', e)
    },
    search (e) {
      e.value = this.data
      this.$emit('onSearch', e)
    }
  }
}
</script>

<style scoped>
  .search{display: flex;}
  .search_box{flex: 1;position: relative;}
  .searchicon{ position: absolute; height: 1rem; width: 1rem; background: transparent; top: .5rem; left:.5rem;}
  /*.searchicon:after { content: ""; position: absolute; background:  #999999; height: 6px; width: 3px; bottom: -5px;right: -3px;transform: rotate(-45deg);}*/
.search_box input{
  /*font-family: PingFangSC-Regular;*/
    /*font-size: 0.8rem;*/
  height: 2.0rem; width: 100%; border-radius: 8px;border: none;outline:none;padding-left: 2rem;background-color: #F6F6F6}
</style>
