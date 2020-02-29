<template>
  <div :id="id" :style="{width,height}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "column",
    props: ["width","height","id"],
    mounted() {
      var myChart = echarts.init(document.getElementById(this.id));

      // 指定图表的配置项和数据
      var option = {

        tooltip: {},
        xAxis: {
          data: ["新增用户","新增帖子","新增投诉","新增会员"]
        },
        yAxis: {},
        series: [{
          name: '数量',
          type: 'bar',
          data: [36, 10, 10, 20]
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
</script>

<style scoped>

</style>