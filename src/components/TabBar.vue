<template>
  <div>
    <div class="tab">
      <div class="blank_tab">
      </div>
      <div :class="{tab_item: true,tab_item_select:select==='0'}" v-on:click="tab0Click">
        {{text1}}
      </div>
      <div class="blank_tab">
      </div>
      <div :class="{tab_item:true,tab_item_select:select==='1'}" v-on:click="tab1Click">
        {{text2}}
      </div>
      <div class="blank_tab" v-if="tabnum>=3">
      </div>
      <div :class="{tab_item: true,tab_item_select:select==='2'}" v-if="tabnum>=3" v-on:click="tab2Click">
        {{text3}}
      </div>
      <div class="blank_tab">
      </div>
    </div>
    <div class="blank_5">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    select: {
      type: String,
      default: '0'
    },
    text1: {
      type: String,
      default: 'tab1'
    },
    text2: {
      type: String,
      default: 'tab2'
    },
    text3: {
      type: String,
      default: 'tab3'
    },
    tabnum: {
      type: Number,
      default: 2
    }
  },
  methods: {
    tab0Click (e) {
      // console.log(e.toElement.innerText)
      let json = {}
      json['index'] = '0'
      json['item'] = e.toElement.innerText
      this.select = '0'
      this.sendMsg(json)
    },
    tab1Click (e) {
      let json = {}
      json['index'] = '1'
      json['item'] = e.toElement.innerText
      this.select = '1'
      this.sendMsg(json)
    },
    tab2Click (e) {
      let json = {}
      json['index'] = '2'
      json['item'] = e.toElement.innerText
      this.select = '2'
      this.sendMsg(json)
    },
    sendMsg (json) {
      this.$emit('tabClick', json)
    }
  }
}
</script>

<style scoped>
.tab{
  display: flex;
  flex: 1;
  padding: 12px 30px 0 30px;
}
.tab_item{
  /*font-family: PingFangSC-Regular;*/
  /*font-size: 28px;*/
  text-align: center;
  line-height: 28px;
  display: flex;
  flex: 3;
  padding-bottom: 12px;
  justify-content: center;
}
.tab_item_select{
  color: #309FEA;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color:#309FEA;
}
.blank_tab{
  display: flex;
  flex: 1;
}
.blank_5{
  background: #F6F6F6;
  height: 5px;
  width: 100%;
}
</style>
