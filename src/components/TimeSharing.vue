<template>
   <div>
     <canvas id="timeSharing"></canvas>
   </div>
</template>

<script>
import '@antv/f2/lib/geom/interval'
import '@antv/f2/lib/component/guide'
import '@antv/f2/lib/geom/line'
import '@antv/f2/lib/geom/point'
import '@antv/f2/lib/geom/schema'
import '@antv/f2/lib/geom/area'

const Core = require('@antv/f2/lib/core')
const Tooltip = require('@antv/f2/lib/plugin/tooltip')
const Guide = require('@antv/f2/lib/plugin/guide')
const Legend = require('@antv/f2/lib/plugin/legend')
Core.Chart.plugins.register(Guide)
Core.Chart.plugins.register(Legend)
Core.Chart.plugins.register(Tooltip)
var COLOR_MAP = ['#FF4433', '#32A532'] // 涨跌
var BASIC_PRICE = 3.55
// var barChart = void 0
var lineChart = void 0
export default {
  name: 'TimeSharing',
  props: {
    time_sharing_data: {
      type: Array
    }
  },
  methods: {
    initChart (data) {
      let prices = []
      let lastVolumn = data[0].volumn
      // 构造数据结构
      data.forEach(function (obj, index) {
        obj.trend = obj.price > BASIC_PRICE ? 0 : 1 // 0 表示涨，1 表示跌
        if (index > 0) {
          obj.text = obj.volumn - lastVolumn
          lastVolumn = obj.volumn
        } else {
          obj.text = obj.volumn
        }
        prices.push(obj.price)
      })
      let maxPrice = Math.max.apply(null, prices)
      let minPrice = (BASIC_PRICE - (maxPrice - BASIC_PRICE)).toFixed(2) * 1
      // 绘制分时折线图
      lineChart = this.drawlineChart(data, maxPrice, minPrice)
    },
    drawlineChart (data, max, min) {
      var chart = new Core.Chart({
        id: 'timeSharing',
        padding: [15, 15, 20, 35],
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        time: {
          // ticks: ['09:30', '11:30', '15:00']
          tickCount: 4
        },
        price: {
          tickCount: 2,
          max: parseInt(max) + 0.1
        }
      })
      chart.tooltip({
        // custom: true,
        alwaysShow: true,
        showCrosshairs: true,
        crosshairsType: 'xy',
        showYTip: true,
        showXTip: true,
        crosshairsStyle: {
          stroke: '#D1D3D4',
          lineWidth: 1
        },
        xTip: function xTip (val) {
          // console.log(val)
          return {
            fill: '#80888F',
            fontSize: 10,
            text: val
          }
        },
        xTipBackground: {
          fill: '#232C39',
          fillOpacity: 0.85,
          radius: 2,
          stroke: '#252F3D'
        },
        yTip: function yTip (val) {
          return {
            fill: '#80888F',
            fontSize: 10,
            text: val.toFixed(2)
          }
        },
        yTipBackground: {
          fill: '#232C39',
          fillOpacity: 0.85,
          radius: 2,
          stroke: '#252F3D'
        },
        custom: true
      })
      chart.line().position('time*price').color('#98BCDE')
      chart.area().position('time*price').color('#98BCDE')
      chart.render()
      return chart
    },
    // 绘制成交量柱状图
    drawBarChart (data) {
      var chart = new Core.Chart({
        id: 'timeSharing',
        padding: 0,
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data)
      chart.axis(false)
      chart.tooltip({
        alwaysShow: true,
        showCrosshairs: true,
        crosshairsStyle: {
          stroke: '#D1D3D4',
          lineWidth: 1
        },
        showTooltipMarker: false,
        custom: true,
        onChange: function onChange (obj) {
          var currentPoint = {
            x: obj.x,
            y: obj.y
          }
          lineChart.showTooltip(currentPoint)
        }
      })
      chart.interval().position('time*text').color('trend', function (val) {
        val = parseInt(val)
        return COLOR_MAP[val]
      })
      chart.render()
      return chart
    }
  },
  watch: {
    time_sharing_data: function (newData, oldData) {
      if (newData !== []) {
        this.initChart(newData)
      }
    }
  },
  mounted () {
    this.initChart(this.time_sharing_data)
  }
}
</script>

<style scoped>
#timeSharing{
  width: 100%;
  height: 400px;
}
</style>
