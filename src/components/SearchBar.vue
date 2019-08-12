<template>
  <div class="container">
    <div class="search">
      <div class="search_box">
        <!--<span class="searchicon"></span>-->
        <img class="searchicon" src="../assets/imgs/search.png" v-on:click="search"/>
        <input type="search" class="search_input" id="searchInput" v-model="data" :placeholder="placeholder" v-on:input="change" v-on:blur="blur" v-on:focus="focus">
      </div>
      <div class="drop" v-show="list_show">
        <div class="list" v-for="item in list" v-bind:key="item.key" v-on:click="itemClick(item)">
          <div class="drop_left">
            {{item.left}}
          </div>
          <div class="drop_middle">
            {{item.center}}
          </div>
          <div class="drop_right">
            {{item.right}}
          </div>
        </div>
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
    },
    list: Array,
    list_show: {
      type: Boolean,
      default: false
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
    },
    itemClick (e) {
      this.$emit('itemClick', e)
    }
  }
}
</script>

<style scoped>
  .search{display: flex;}
  .search_box{flex: 1;position: relative;}
  .searchicon{ position: absolute; height: 1rem; width: 1rem; background: transparent; top: .5rem; left:.5rem;}
  .search_box input{
     height: 2.0rem; width: 100%; border-radius: 8px;border: none;outline:none;padding-left: 2rem;background-color: #F6F6F6
  }
  .drop{
    position: absolute;
    /*padding-top: 20px;*/
    width: 100%;
    z-index: 999;
    background-color: white;
    box-shadow: 1px 3px 3px #888888;
  }
  .list{
    display: flex;
    flex: 1;
    padding: 20px 30px;
    border-bottom: 1px solid #F6F6F6;
  }
  .drop_left{
    display: flex;
    flex: 2;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.8rem ;
  }
  .drop_middle{
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    font-size: 0.95rem ;
  }
  .drop_right{
    display: flex;
    flex: 2;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.9rem ;
  }
</style>
