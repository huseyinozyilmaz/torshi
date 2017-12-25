<template>
  <div>
    <h1 class="page-header">{{ title }}</h1>
    <chart :options="pie"></chart>
    <app-table
      title="Tag List"
      :columns="columns"
      :rows="rows">
    </app-table>
  </div>
</template>

<script>
import {service} from '../services/FeatureService'
import AppTable from './AppTable.vue'

import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Tags',
  components: {
    'app-table': AppTable
  },
  data () {
    var tags = service.getTags()
    return {
      title: 'Tags',
      columns: ['id', 'tag', 'count', 'percentage'],
      rows: tags,
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
          data: tags.map(a => a.tag)
        },
        series: [
          {
            name: 'Tag Name',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: tags.map(a => ({name: a.tag, value: a.count})),
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
