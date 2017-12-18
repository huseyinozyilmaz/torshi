<template>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Feature</th>
        <th>Scenarios</th>
        <th>Tags</th>
        <th>Created By</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(feature, index) in sortedFilteredFeatures">
        <td>{{ index+1 }}</td>
        <td><router-link :to="{ name: 'Feature', params: { id: feature.id, feature: feature }}">{{ feature.gherkin.document.feature.name }}</router-link></td>
        <td>{{ getScenarioCount(feature.gherkin.document.feature) }}</td>
        <td>{{ getTagCount(feature.gherkin.document.feature) }}</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'FeatureList',
  props: {
    search: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      // eslint-disable-next-line
      features: featuresdb
    }
  },
  computed: {
    sortedFilteredFeatures: function () {
      function compare (a, b) {
        if (a.gherkin.document.feature.name < b.gherkin.document.feature.name) {
          return -1
        }
        if (a.gherkin.document.feature.name > b.gherkin.document.feature.name) {
          return 1
        }
        return 0
      }
      this.features.sort(compare)
      return this.features.filter(function (feature) {
        return feature.gherkin.document.feature.name.toLocaleLowerCase().indexOf(this.search.toLowerCase()) > -1
      }.bind(this))
    }
  },
  methods: {
    getTagCount (feature) {
      let tags = new Set()
      feature.tags.forEach((tag) => {
        tags.add(tag.name)
      })
      feature.children.forEach((child) => {
        if (child.tags) {
          child.tags.forEach((tag) => {
            tags.add(tag.name)
          })
        }
      })
      return tags.size
    },
    getScenarioCount (feature) {
      return feature.children.length
    }
  }
}
</script>

<style scoped>

</style>
