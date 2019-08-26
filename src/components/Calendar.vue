<template>
  <div class="calendar">
    <div class="month">
      <div class="month_select_left" v-on:click='prevMonth'>
        <div class='left'></div>
      </div>
      <div class="month_select">{{year}}年{{month}}月</div>
      <div class="month_select_right" v-on:click='nextMonth'>
        <div class='right'></div>
      </div>
    </div>
    <div class="week">
      <div v-for="(item,index) in weekArr" :key="index" class='weekday'>{{item}}</div>
    </div>
    <div class="date">
      <div class="column" v-for="(item, index) in columnArr" :key="index">
        <div class="day" v-for="(item2,index2) in item" :key="index2" v-on:click="day_click(item2)">
          <div :class="{day_text:true, day_select:value === item2.value&&value!=='',day_disabled:!item2.canSelect}">{{item2.index}}</div>
        </div>
      </div>
    </div>
    <!-- <view class='message'>请选择设备开始使用日期，</view> -->
  </div><!--end calendar-->
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      year: '',
      month: '',
      day: '',
      weekArr: ['日', '一', '二', '三', '四', '五', '六'],
      dateArr: [],
      firstDay: '',
      lastDay: '',
      columnArr: []
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    },
    defaultValue: {
      type: String,
      default: new Date()
    },
    isSelectDefault: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    let selectDay = this.value === '' ? this.defaultValue : this.value
    this.getDate(selectDay)
    this.setDate()
  },
  methods: {
    getDate: function (time) { // 获取当月日期
      let mydate = new Date(time)
      let year = mydate.getFullYear()
      let month = mydate.getMonth()
      let months = month + 1
      this.year = year
      this.month = months
      this.day = mydate.getDate()
      let fist = new Date(year, month, 1)
      this.firstDay = fist.getDay()
      let last = new Date(year, months, 0)
      this.lastDay = last.getDate()
      if (this.isSelectDefault) {
        this.value = this.formatTimeToDate(time)
      }
    },
    // 构建日历数组
    setDate () {
      let dateArr = []
      let json = {}
      for (let i = 0; i < this.firstDay; i++) {
        json = {}
        json['index'] = ''
        json['value'] = ''
        json['canSelect'] = false
        dateArr.push(json)
      }
      for (let i = 1; i < this.lastDay + 1; i++) {
        json = {}
        json['index'] = i
        let value = this.formatTimeToDate(this.year + '-' + this.month + '-' + i)
        json['value'] = value
        json['canSelect'] = this.check_select(value)
        dateArr.push(json)
      }
      this.dateArr = dateArr
      let columnArr = []
      let array = []
      for (let i = 0; i < dateArr.length; i++) {
        array.push(dateArr[i])
        if (i % 7 === 6) {
          columnArr.push(array)
          array = []
        }
      }
      this.columnArr = columnArr
      console.log(columnArr)
      console.log(dateArr)
    },
    // 判断某日期是不是在可选范围内
    check_select (date) {
      let canSelectList = this.list
      for (let i = 0; i < canSelectList.length; i++) {
        if (date === canSelectList[i]) {
          return true
        }
      }
      return false
    },
    prevMonth () { // 上一月
      let months = ''
      let years = ''
      if (this.month === 1) {
        years = this.year - 1
        this.month = 12
        months = this.month
      } else {
        years = this.year
        months = this.month - 1
      }

      let first = new Date(years, months - 1, 1)
      this.firstDay = first.getDay()
      let last = new Date(years, months, 0)
      this.lastDay = last.getDate()
      this.month = months
      this.year = years
      this.setDate()
    },
    nextMonth () { // 下一月
      let months = ''
      let years = ''
      if (this.month === 12) {
        this.month = 0
        months = this.month
        years = this.year + 1
      } else {
        months = this.month + 1
        years = this.year
      }
      months = this.month + 1
      let first = new Date(years, months - 1, 1)
      this.firstDay = first.getDay()
      let last = new Date(years, months, 0)
      this.lastDay = last.getDate()
      this.month = months
      this.year = years
      this.setDate()
    },
    day_click (e) {
      if (e.index !== '' && e.canSelect) {
        this.value = e.value
        this.$emit('daySelect', e)
      }
      // console.log(this.data.day_select)
    },
    formatTimeToDate (time) {
      let today = new Date(time)
      let year = today.getFullYear()
      let month = ('0' + (today.getMonth() + 1)).slice(-2).toString()
      let date = ('0' + today.getDate()).slice(-2).toString()
      let dateString = year + '-' + month + '-' + date
      return dateString
    }
  }
}
</script>

<style scoped>
  .calendar{
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .week{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background:  #f2f2f2;
    font-size: 26px;
    padding: 20px;
  }
  .weekday{
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .month{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    height: 60px;
  }
  .month_select{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .month_select_left{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding-left:50px;
  }
  .month_select_left:active{
    background-color: #e6e6e6
  }
  .month_select_right:active{
    background-color: #e6e6e6
  }
  .month_select_right{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    padding-right:50px;
  }
  .left {
    border: solid #00A6E4;
    border-width: 0 3px 3px 0;
    /* display: inline-block; */
    padding: 5px;
    transform: rotate(135deg);
    height: 3px;
    width: 3px;
  }
  .right {
    border: solid #00A6E4;
    border-width: 0 3px 3px 0;
    /* display: inline-block; */
    padding: 5px;
    transform: rotate(-45deg);
    height: 3px;
    width: 3px;
  }
  .date{
    padding:0px 20px;
    text-align: center;
    font-size: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .column{
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .day{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  .day_text{
    width: 70px;
    float: left;
    height: 70px;
    line-height: 70px;
    /*margin:20px;*/
    /* background: blue; */
    border-radius: 70px;
  }
  .day_disabled{
    color:  #d9d9d9
  }
  .day_select{
    background:#00A6E4;
    color:white;
  }
</style>
