<template>
  <div class="date_select">
    <div class="date_left_icon" v-on:click="leftClick">
      <img width="20" height="20" src="../assets/imgs/icon_pre_disable.png"/>
    </div>
    <div class="date">{{ formatDate }}</div>
    <div class="date_right_icon" v-on:click="rightClick">
      <img width="20" height="20" style="transform: rotate(180deg)" src="../assets/imgs/icon_pre_disable.png"/>
    </div>
  </div>
</template>

<script>
import { changeTimeFormatDate } from '@/utils'
export default {
  name: 'DateSelect',
  props: {
    date: {
      type: String,
      default: '20190601'
    },
    min: {
      type: String,
      default: '20190601'
    },
    max: {
      type: String,
      default: '20190630'
    }
  },
  methods: {
    leftClick (e) {
      this.$emit('selectClick', 'left')
    },
    rightClick (e) {
      this.$emit('selectClick', 'right')
    }
  },
  mounted () {
    // console.log(changeTimeFormatDate(this.date))
  },
  computed: {
    // 计算属性的 getter
    formatDate: function () {
      // `this` 指向 vm 实例
      // console.log(this.date)
      return changeTimeFormatDate(this.date)
    }
  }
}
</script>

<style scoped>
.date_select{
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px 30px 0px 30px;
}
.date_left_icon{
  display: flex;
  flex : 2;
  justify-content: flex-end;
}
.date{
  display: flex;
  flex: 2;
  justify-content: center;
  font-family: DINOT-Medium;
  font-size: 28px;
  color: #999999;
  line-height: 28px;
}
.date_right_icon{
  display: flex;
  flex: 2;
  justify-content: flex-start;
}
</style>
