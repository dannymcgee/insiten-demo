class Random {
  constructor() {}

  static range(min, max) {
    return Math.round(Math.max(min, Math.random() * max))
	}

	static coinFlip() {
		return Math.random() < 0.5
	}

	static chance(percent) {
		return Math.random() < percent
	}

	static itemOf(array) {
		const index = Random.range(0, array.length - 1)
		return array[index]
	}
}

module.exports = Random
