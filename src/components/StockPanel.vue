<template>
    <div id="panel">
      <div class="panel_header">
        <div class="panel_header_left">
          <div id="stock_name">
            {{header_data.stockName}}&nbsp;
          </div>
          <div id="stock_code">
            [{{header_data.stockCode}}]
          </div>
        </div>
        <div class="panel_header_right">
          <div id="header_value_1">
            {{header_data.price}}
          </div>
          <div id="header_value_2" :class="color_trend">
            {{header_data.change}}
          </div>
          <div id="header_value_3" v-on:click="icon_click">
            <img v-if="icon===0" src="@/assets/imgs/add.png" height="18" width="18"/>
            <img v-if="icon===1" src="@/assets/imgs/del.png" height="18" width="18"/>
          </div>
        </div>
      </div>
      <div class="panel_item">
        <div class="panel_left">
          <div class="panel_name">
            流动持仓平均成本
          </div>
          <div class="panel_value">
            {{body_data.avgPrice}}
          </div>
        </div>
        <div class="panel_center">
        </div>
        <div class="panel_right">
          <div class="panel_name">
            主力持仓平均成本
          </div>
          <div class="panel_value">
            {{body_data.mainAvgPrice}}
          </div>
        </div>
      </div>
      <div class="panel_item">
        <div class="panel_left">
          <div class="panel_name">
            支撑位
          </div>
          <div class="panel_value">
            --
          </div>
        </div>
        <div class="panel_center">
        </div>
        <div class="panel_right">
          <div class="panel_name">
            阻力位
          </div>
          <div class="panel_value">
            --
          </div>
        </div>
      </div>
      <div class="panel_item">
        <div class="panel_left">
          <div class="panel_name">
            获利盘
          </div>
          <div class="panel_value">
            {{body_data.closePrice}}
          </div>
        </div>
        <div class="panel_center">
        </div>
        <div class="panel_right">
          <div class="panel_name">
            套牢盘
          </div>
          <div class="panel_value">
            {{body_data.closeProfit}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { obtainData } from '@/api'

export default {
  name: 'StockPanel',
  props: {
    header_data: {
      type: Object
    },
    body_data: {
      type: Object
    },
    stock_code: {
      type: String
    }
  },
  data () {
    return {
      stockCode: this.stock_code,
      headerData: this.header_data,
      color_trend: 'color_down',
      icon: 0
    }
  },
  mounted () {
    this.color_trend = this.trendJudgeColor(this.header_data.change)
    // console.log(this.color_trend)
    obtainData.getManualStocks().then(response => {
      let icon = 0
      for (let i = 0; i < response.length; i++) {
        if (this.stock_code === response[i]) {
          icon = 1
        }
      }
      this.icon = icon
    })
  },
  beforeUpdate () {
    // console.log(' before ')
    this.color_trend = this.trendJudgeColor(this.header_data.change)
  },
  methods: {
    // 通过增减调换颜色
    trendJudgeColor (change) {
      // console.log(change)
      if (change === undefined) {
        return ''
      } else {
        let colors = ['color_up', 'color_down']
        if (change[0] === '-') {
          return colors[1]
        } else {
          return colors[0]
        }
      }
    },
    // 增加、删除icon点击
    icon_click () {
      let icon
      let stock = {'stockName': this.headerData.stockName, 'stockCode': this.stockCode}
      console.log(stock)
      if (this.icon === 1) {
        obtainData.delManualStock(stock).then(response => {
          // console.log(response)
          alert('删除自选股成功')
        })
        icon = 0
      } else {
        obtainData.addManualStock(stock).then(response => {
          // console.log(response)
          alert('添加自选股成功')
        })
        icon = 1
      }
      this.icon = icon
    }
  }
}
</script>

<style scoped>
#panel{padding: 0 30px 12px 30px;}
.panel_item{padding:11px 0rem;display: flex;flex: 1;line-height: 26px}
.panel_left{
  display: flex;
  flex: 8;
  align-items: center;
}
.panel_center{
  display: flex;
  flex: 1;
}
.panel_right{
  display: flex;
  flex: 8;
  align-items: center;
}
.panel_name{
  display: flex;
  flex: 3;
  text-align: left;
  justify-content: flex-start;
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #999999;
  line-height: 26px;
}
.panel_value{
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-family: DINOT-Medium;
  font-size: 28px;
  color: #222222;
  line-height: 28px;
}
.panel_header{
  display: flex;
  flex: 1;
  align-items: center;
  padding-bottom: 25px;
}
.panel_header_left{
  display: flex;
  flex: 1;
  align-items: center;
}
.panel_header_right{
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
}
#stock_name{
  font-family: PingFangSC-Regular;
  font-size: 40px;
  color: #222222;
  line-height: 40px;
}
#stock_code{
  font-family: DINOT-Medium;
  font-size: 28px;
  color: #555555;
  text-align: center;
  line-height: 30px;
}
#header_value_1{
  display: flex;
  flex: 2;
  font-family: DINOT-Medium;
  font-size: 36px;
  color: #222222;
  line-height: 36px;
  justify-content: flex-start;
}
#header_value_2{
  display: flex;
  flex: 2;
  font-family: DINOT-Medium;
  font-size: 36px;
  line-height: 36px;
  justify-content: center;
}
.color_up{
  color: #EB333B;
}
.color_down{
  color: #1AAE52;
}
#header_value_3{
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
</style>
