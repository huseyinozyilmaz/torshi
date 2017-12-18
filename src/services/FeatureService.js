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
}

export let service = new FeatureService()
