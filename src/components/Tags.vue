<template>
  <div>
    <h1 class="page-header">{{ msg }}</h1>
    <chart :options="pie"></chart>
  </div>
</template>

<script>
import {service} from '../services/FeatureService'

import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Tags',
  data () {
    let tags = service.getTags()
    return {
      msg: 'Tags',
      pie: {
        title: {
          text: 'All Tags',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: tags.keys
        },
        series: [
          {
            name: 'Tag Name',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: tags.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      tags: service.getTags()
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 650px;
}
</style>
