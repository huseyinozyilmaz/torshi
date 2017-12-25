<template>
  <div>
    <h1 class="page-header">{{ title }}</h1>
    <app-table
      title="Feature List"
      :columns="columns"
      :rows="rows">
      <template slot="table-row" slot-scope="props">
        <td>{{ props.row.no }}</td>
        <td><router-link :to="{ name: 'Feature', params: { id: props.row.id }}">{{ props.row.featureName }}</router-link></td>
        <td>{{ props.row.scenarioCount }}</td>
        <td>{{ props.row.tagCount }}</td>
        <td>{{ props.row.createdBy }}</td>
        <td>{{ props.row.lastUpdated }}</td>
      </template>
    </app-table>
  </div>
</template>

<script>
import {service} from '../services/FeatureService'
import AppTable from './AppTable.vue'

export default {
  data () {
    return {
      title: 'Features',
      columns: [
        { key: 'no', name: 'No' },
        { key: 'featureName', name: 'Feature' },
        { key: 'scenarioCount', name: 'Scenarios' },
        { key: 'tagCount', name: 'Tags' },
        { key: 'createdBy', name: 'Created By' },
        { key: 'lastUpdated', name: 'Last Updated' }
      ],
      rows: service.getFeatures()
    }
  },
  components: {
    'app-table': AppTable
  }
}
</script>
