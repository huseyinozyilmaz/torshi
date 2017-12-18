<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <input type="text" v-model="search" @keyup.esc="resetSearch" placeholder="Search features...">
    <feature-list :search="search"></feature-list>
  </div>
</template>

<script>
import FeatureList from './FeatureList.vue'

export default {
  name: 'Features',
  data () {
    return {
      title: 'Features',
      search: ''
    }
  },
  components: {
    'feature-list': FeatureList
  },
  methods: {
    resetSearch: function () {
      this.search = ''
    }
  }
}
</script>

<style scoped>
  .page {
    text-align: left;
  }
  input {
    display: block;
    width: 100%;
    padding: 8px;
  }
</style>
