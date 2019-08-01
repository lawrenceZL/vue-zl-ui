<template>
  <div>
    PositionRatio
    <canvas id="PositionRatio"></canvas>
  </div>
</template>

<script>
export default {
  name: 'PositionRatio',
  props: {
    data: {
      type: Object
    },
    mark: {
      type: String
    }
  }
}
</script>

<style scoped>
#PositionRatio{
  width: 100%;
  height: 300px;
}
</style>
