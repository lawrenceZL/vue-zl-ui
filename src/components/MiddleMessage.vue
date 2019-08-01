<template>
  <div>
    <div class="fade"></div>
    <div class="succ-pop">
      <h3 class="title">
        中间填写内容
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleMessage'
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
    width: 400px;
    height: 300px;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -150px;
    z-index: 999;
    border-radius: 5px;
  }
  .succ-pop h3.title{
    text-align: center;
    font-size: 22px;
    color: #ce002c;
  }
</style>
