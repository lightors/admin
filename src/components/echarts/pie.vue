<template>
  <div :id="id" :style="{width,height}"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "pie",
    props: ["width", "height", "id"],
    mounted() {
      var myChart = echarts.init(document.getElementById(this.id));

      var option = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: ['软件', '教育', '广告', '金融', '服务','其他'],

          selected: ["a"]
        },
        series: [
          {
            name: '行业',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data:  [
              {value: 335, name: '软件'},
              {value: 310, name: '教育'},
              {value: 234, name: '广告'},
              {value: 135, name: '金融'},
              {value: 1548, name: '服务'},
              {value: 548, name: '其他'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
        };
      myChart.setOption(option);
    }
  }
</script>

<style scoped>

</style>