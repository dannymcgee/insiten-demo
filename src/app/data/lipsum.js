const Random = require('./random')

class LoremIpsum {
  constructor() {
    this.words = [
      'ad',
      'adipisicing',
      'aliqua',
      'aliquip',
      'amet',
      'anim',
      'aute',
      'cillum',
      'commodo',
      'consectetur',
      'consequat',
      'culpa',
      'cupidatat',
      'deserunt',
      'do',
      'dolor',
      'dolore',
      'duis',
      'ea',
      'eiusmod',
      'elit',
      'enim',
      'esse',
      'est',
      'et',
      'eu',
      'ex',
      'excepteur',
      'exercitation',
      'fugiat',
      'id',
      'in',
      'incididunt',
      'ipsum',
      'irure',
      'labore',
      'laboris',
      'laborum',
      'Lorem',
      'magna',
      'minim',
      'mollit',
      'nisi',
      'non',
      'nostrud',
      'nulla',
      'occaecat',
      'officia',
      'pariatur',
      'proident',
      'qui',
      'quis',
      'reprehenderit',
      'sint',
      'sit',
      'sunt',
      'tempor',
      'ullamco',
      'ut',
      'velit',
      'veniam',
      'voluptate'
    ]
  }

  static capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1)
  }

  getWord(minLength = 0) {
    const wordsPool = minLength
      ? this.words.filter(word => word.length >= minLength)
      : this.words
    const index = Random.range(0, wordsPool.length - 1)

    return wordsPool[index]
  }

  getSentence() {
    const sentenceLength = Random.range(5, 10)
    const sentenceWords = []

    for (let i = 0; i < sentenceLength; i++) {
      sentenceWords.push(this.getWord())
    }

    const firstWord = sentenceWords[0]
    sentenceWords[0] = LoremIpsum.capitalize(firstWord)
    sentenceWords[sentenceWords.length - 1] += '.'

    return sentenceWords.join(' ')
  }

  getParagraph() {
    const paraLength = Random.range(2, 4)
    const paraSentences = []

    for (let i = 0; i < paraLength; i++) {
      paraSentences.push(this.getSentence())
    }

    return paraSentences.join(' ')
  }
}

module.exports = LoremIpsum
