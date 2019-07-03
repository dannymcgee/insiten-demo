class Random {
  constructor() {}

  static range(min, max) {
    return Math.round(Math.max(min, Math.random() * max))
  }
}

module.exports = Random
