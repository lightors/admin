<template>
  <div :id="id" :style="{width,height}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "line",
    props: ["width","height","id"],
    mounted() {
      var myChart = echarts.init(document.getElementById(this.id));

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        tooltip:{},
        series: [{
          name:"访问量",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
</script>

<style scoped>

</style>