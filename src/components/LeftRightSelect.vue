<template>
  <div class="select">
    <div class="left_icon" v-on:click="leftClick">
      <img width="20" height="20" src="../assets/imgs/icon_pre_disable.png"/>
    </div>
    <div class="select_text">{{list[index]}}</div>
    <div class="right_icon" v-on:click="rightClick">
      <img width="20" height="20" style="transform: rotate(180deg)" src="../assets/imgs/icon_pre_disable.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftRightSelect',
  props: {
    list: {
      type: Array
    },
    index: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    leftClick (e) {
      let json = {}
      let index = this.index
      json['direction'] = 'left'
      json['lastIndex'] = index
      json['list'] = this.list
      console.log(this.loop)
      if (index === 0) {
        if (!this.loop) {
          json['nowIndex'] = index
          json['msg'] = '已不能再往左'
        } else {
          json['nowIndex'] = this.list.length - 1
          json['msg'] = 'ok'
          this.index = this.list.length - 1
        }
      } else {
        json['nowIndex'] = index - 1
        json['msg'] = 'ok'
        this.index = index - 1
      }
      this.$emit('selectClick', json)
    },
    rightClick (e) {
      let json = {}
      let index = this.index
      json['direction'] = 'right'
      json['lastIndex'] = index
      json['list'] = this.list
      if (index === this.list.length - 1) {
        if (!this.loop) {
          json['nowIndex'] = index
          json['msg'] = '已不能再往右'
        } else {
          json['nowIndex'] = 0
          json['msg'] = 'ok'
          this.index = 0
        }
      } else {
        json['nowIndex'] = index + 1
        json['msg'] = 'ok'
        this.index = index + 1
      }
      this.$emit('selectClick', json)
    }
  }
}
</script>

<style scoped>
  .select{
    display: flex;
    flex: 1;
    align-items: center;
    /*padding: 20px 30px 0px 30px;*/
  }
  .left_icon{
    display: flex;
    flex : 1;
    justify-content: flex-end;
  }
  .select_text{
    display: flex;
    flex: 2;
    justify-content: center;
  }
  .right_icon{
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }
</style>
