<template>
  <div class="container">
    <div class="search">
      <div class="search_box">
        <!--<span class="searchicon"></span>-->
        <img class="searchicon" src="../assets/imgs/search.png"/>
        <input type="search" class="search_input" id="searchInput" placeholder="股票代码/名称/首字母">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
  .search{display: flex;padding:30px ;}
  .search_box{flex: 1;position: relative;}
  .searchicon{ position: absolute; height: 1rem; width: 1rem; background: transparent; top: .5rem; left:.5rem;}
  /*.searchicon:after { content: ""; position: absolute; background:  #999999; height: 6px; width: 3px; bottom: -5px;right: -3px;transform: rotate(-45deg);}*/
  .search_box input{ font-family: PingFangSC-Regular;font-size: 0.8rem;height: 2.0rem; width: 100%; border-radius: 8px;border: none;outline:none;padding-left: 2rem;background-color: #F6F6F6}
</style>
