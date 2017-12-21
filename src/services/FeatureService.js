class FeatureService {
  constructor () {
    // eslint-disable-next-line
    this.features = featuresdb
  }

  getFeatureById (id) {
    for (let feature of this.features) {
      if (feature.id === id) {
        return feature
      }
    }
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
    let result = []
    for (var [key, value] of map) {
      result.push({name: key, value: value})
    }
    return {
      keys: [...map.keys()],
      data: result
    }
  }
}

export let service = new FeatureService()
