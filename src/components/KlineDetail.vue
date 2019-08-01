<template>
  <div>
    <div>
      <canvas id="KlineDetail"></canvas>
    </div>
  </div>
</template>

<script>
import '@antv/f2/lib/geom/interval'
import '@antv/f2/lib/component/guide'
import '@antv/f2/lib/geom/line'
import '@antv/f2/lib/geom/point'
import '@antv/f2/lib/geom/schema'
import '@antv/f2/lib/geom/adjust/'

const Core = require('@antv/f2/lib/core')
const Tooltip = require('@antv/f2/lib/plugin/tooltip')
const Guide = require('@antv/f2/lib/plugin/guide')
const Legend = require('@antv/f2/lib/plugin/legend')
Core.Chart.plugins.register(Guide)
Core.Chart.plugins.register(Legend)
Core.Chart.plugins.register(Tooltip)
export default {
  name: 'KlineDetail',
  props: {
    date: {
      type: String
    },
    data: {
      type: Array
    },
    mark: {
      type: String
    },
    mark_length: {
      type: Number
    }
  },
  watch: {
    data: function (newData, oldData) {
      if (newData !== {}) {
        console.log(newData)
        this.initChart(newData)
      }
    }
  },
  mounted () {
    this.initChart(this.data)
  },
  methods: {
    initChart (data) {
      console.log(data)
      // data = data.slice(0, 20)
      let max = this.findMax(data)
      let min = this.findMin(data)
      let chart = new Core.Chart({
        id: 'KlineDetail',
        pixelRatio: window.devicePixelRatio
        // padding: [40, 30, 40, 40]
      })

      chart.source(data, {
        'chip_x': {
          tickCount: 4,
          max: max + 0.2,
          min: min - 0.2
        },
        'chip_y': {
          tickCount: 2
        }
      })
      chart.coord({
        transposed: true
      })
      chart.interval().position('chip_x*chip_y').color('type', function (type) {
        if (type === 'profit') {
          return '#f17479'
        } else if (type === 'lock') {
          return '#4ee487'
        } else {
          return '#ffff99'
        }
      }).adjust('stack')
      chart.legend(false)
      console.log(this.mark_length)
      chart.guide().line({
        top: true,
        start: [parseFloat(this.mark), 'min'],
        end: [parseFloat(this.mark), this.mark_length],
        style: {
          stroke: '#309FEA',
          lineWidth: 1
          // lineCap: 'round'
        }
      })
      chart.guide().text({
        position: [parseFloat(this.mark), 'max'],
        content: this.mark,
        style: {
          textAlign: 'right',
          fill: '#309FEA'
        },
        offsetY: -2
      })
      chart.guide().text({
        position: [max, 'max'],
        content: max,
        style: {
          textAlign: 'right'
        },
        offsetY: -2
      })
      chart.guide().text({
        position: [min, 'max'],
        content: min,
        style: {
          textAlign: 'right'
        },
        offsetY: -2
      })
      chart.guide().text({
        top: true, // 指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
        position: [min, 'median'], // 文本的起始位置，值为原始数据值，支持 callback
        content: '(持仓比例)', // 显示的文本内容
        style: {
          fill: '#666', // 文本颜色
          fontSize: '12' // 文本大小
        }, // 文本的图形样式属性
        offsetY: 20 // y 方向偏移量
        // limitInPlot: true // 是否将 guide 元素限制在绘图区域图，默认为 false
      })
      chart.axis('chip_y', {
        label: function label (text) {
          text = text * 1
          let cfg = {
            text: text.toFixed(2) + '%'
          }
          // if (text > 0) {
          //   cfg.text = '+' + cfg.text
          // } else if (text === 0) {
          //   cfg.fill = '#000'
          //   cfg.fontWeight = 'bold'
          // }
          return cfg
        }
      })
      chart.render()
    },
    findMax (data) {
      let result = 0
      for (let i = 0; i < data.length; i++) {
        if (result < data[i].chip_x) {
          result = data[i].chip_x
        }
      }
      return result
    },
    findMin (data) {
      let result = 100
      for (let i = 0; i < data.length; i++) {
        if (result > data[i].chip_x) {
          result = data[i].chip_x
        }
      }
      return result
    }
  }
}
</script>

<style scoped>
#KlineDetail{
  width: 100%;
  height: 400px;
}
</style>
