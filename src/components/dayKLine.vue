<template>
    <div>
      <canvas id="dayKLine"></canvas>
    </div>
</template>

<script>
import '@antv/f2/lib/geom/interval'
import '@antv/f2/lib/component/guide'
import '@antv/f2/lib/geom/line'
import '@antv/f2/lib/geom/point'
import '@antv/f2/lib/geom/schema'
import '@antv/f2/lib/interaction/'

const Core = require('@antv/f2/lib/core')
const Tooltip = require('@antv/f2/lib/plugin/tooltip')
const Guide = require('@antv/f2/lib/plugin/guide')
const Legend = require('@antv/f2/lib/plugin/legend')
Core.Chart.plugins.register(Guide)
Core.Chart.plugins.register(Legend)
Core.Chart.plugins.register(Tooltip)
export default {
  name: 'dayKLine',
  props: {
    kline_data: {
      type: Array
    }
  },
  methods: {
    returnTooltip (origin) {
      // console.log(date)
      this.$emit('returnTooltip', origin)
    },
    goBarChart (data) {
      // 数据处理，按照时间排序
      let that = this
      data.sort(function (obj1, obj2) {
        return obj1.time > obj2.time ? 1 : -1
      })
      let dates = []
      let length = data.length
      data.forEach(function (obj) {
        obj.range = [obj.start, obj.end, obj.max, obj.min]
        obj.trend = obj.start <= obj.end ? 0 : 1
        dates.push(obj.time)
      })
      let chart = new Core.Chart({
        id: 'dayKLine',
        pixelRatio: window.devicePixelRatio
      })
      chart.source(data, {
        range: {
          tickCount: 2,
          formatter: function formatter (val) {
            return val.toFixed(2)
          }
        },
        time: {
          tickCount: 4,
          values: dates.slice(length - 31, length)
        }
      })
      chart.tooltip({
        showCrosshairs: true,
        showXTip: true,
        showYTip: true,
        crosshairsType: 'xy',
        custom: true,
        yTip: function yTip (val) {
          return {
            text: val.toFixed(2),
            fill: '#333',
            fontSize: 10
          }
        },
        xTip: {
          fill: '#333',
          fontSize: 10
        },
        xTipBackground: {
          fill: '#EDF2FE'
        },
        yTipBackground: {
          fill: '#EDF2FE'
        },
        crosshairsStyle: {
          stroke: '#0F8DE8'
        },
        onShow (ev) {
          // console.log(ev.items[0].origin)
          // console.log('show')
          let origin = ev.items[0].origin
          origin.toolTipShow = true
          that.origin = origin
          that.returnTooltip(origin)
        }
      })
      chart.axis('range', {
        grid: {
          stroke: '#ddd',
          lineWidth: 1,
          lineDash: null
        },
        label: {
          fill: '#999'
        }
      })
      chart.axis('time', {
        label: function label (text, index, total) {
          var textCfg = {
            fill: '#999'
          }
          if (index === 0) {
            textCfg.textAlign = 'left'
          }
          if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.interaction('pan', {
        speed: 1,
        step: 10
      })
      chart.schema().position('time*range').color('trend', function (trend) {
        trend = parseInt(trend)
        return ['#EB333B', '#1AAE52'][trend]
      }).shape('candle')
      chart.render()
    }
  },
  watch: {
    kline_data: function (newData, oldData) {
      if (newData !== []) {
        this.goBarChart(newData)
      }
    }
  },
  mounted () {
    this.goBarChart(this.kline_data)
  },
  data () {
    return {
      origin: {},
      date: ''
    }
  }
}
</script>

<style scoped>
#dayKLine{
  width: 100%;
  height: 400px;
}
</style>
