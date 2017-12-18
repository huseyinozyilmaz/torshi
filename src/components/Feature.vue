<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <pre><code class="language-gherkin">{{code}}</code></pre>
  </div>
</template>

<script>
import {service} from '../services/FeatureService'
import Prism from 'prismjs/prism.js'
import 'prismjs/components/prism-gherkin.js'
import 'prismjs/themes/prism.css'
import '../assets/css/prism-theme.css'

export default {
  name: 'Feature',
  props: ['id'],
  data () {
    return {
      title: service.getFeatureById(this.id).gherkin.document.feature.name,
      code: service.getFeatureById(this.id).source.data
    }
  },
  mounted () {
    this.$nextTick(function () {
      Prism.highlightAll()
    })
  }
}
</script>
<style scoped>
  .page {
    text-align: left;
  }
  h1 {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
</style>
