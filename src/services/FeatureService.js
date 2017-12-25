class FeatureService {
  constructor () {
    // eslint-disable-next-line
    this.features = featuresdb
  }

  getFeatures () {
    var features = []
    var no = 1
    for (let feature of this.features) {
      features.push({
        id: feature.id,
        no: no++,
        featureName: feature.gherkin.document.feature.name,
        scenarioCount: this.getScenarioCountByFeature(feature.gherkin.document.feature),
        tagCount: this.getTagCountByFeature(feature.gherkin.document.feature),
        createdBy: '',
        lastUpdated: ''
      })
    }
    return features
  }

  getFeatureById (id) {
    for (let feature of this.features) {
      if (feature.id === id) {
        return feature
      }
    }
  }

  getTagCountByFeature (feature) {
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
  }

  getScenarioCountByFeature (feature) {
    return feature.children.length
  }

  getTags () {
    let map = new Map()
    for (let feature of this.features) {
      for (let scenario of feature.gherkin.document.feature.children) {
        if (scenario.tags) {
          for (let tag of scenario.tags) {
            map.has(tag.name) ? map.set(tag.name, map.get(tag.name) + 1) : map.set(tag.name, 1)
          }
        }
      }
      let scenarioCount = feature.gherkin.document.feature.children.length
      for (let tag of feature.gherkin.document.feature.tags) {
        map.has(tag.name) ? map.set(tag.name, map.get(tag.name) + scenarioCount) : map.set(tag.name, scenarioCount)
      }
    }
    let sum = [...map.values()].reduce((a, b) => a + b)
    let result = []
    var id = 1
    for (var [key, value] of map) {
      result.push({id: id++, tag: key, count: value, percentage: (value / sum * 100).toFixed(2)})
    }
    return result
  }
}

export let service = new FeatureService()
