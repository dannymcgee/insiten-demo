const Random = require('./random')
const LoremIpsum = require('./lipsum')
const lipsum = new LoremIpsum()

const suffixes = [
	'& Co.',
	'Books',
	'Brands',
	'Bureau',
	'Collective',
	'Consulting',
	'Creative',
	'Development',
	'Digital',
	'Direct',
	'Dynamics',
	'Enterprises',
	'Foods',
	'Group',
	'Holdings',
	'Inc.',
	'Industrial',
	'Industries',
	'Innovations',
	'Labs',
	'Logistics',
	'Limited',
	'LLC',
	'Online',
	'Partners',
	'Productions',
	'Properties',
	'Scientific',
	'Services',
	'Solutions',
	'Specialties',
	'Systems',
	'Tech',
	'Unlimited',
	'Ventures',
	'Works'
]
const tlds = ['com', 'co', 'net', 'org',]

class Company {
  constructor() {
		this.name = this._generateName()
		this.url = this._generateUrl()
		this.description = lipsum.getParagraph()
		this.status = 'Researching'
	}

  _generateName() {
		const baseLength = Random.range(1, 2)
    const minWordLength = (baseLength === 1) ? 5 : 0
		const nameWords = []

    for (let i = 0; i < baseLength; i++) {
      let word = lipsum.getWord(minWordLength)
			word = (i === 0 || word.length > 3)
				? LoremIpsum.capitalize(word)
				: word

      nameWords.push(word)
		}
		nameWords.push(this._getSuffix())

		return nameWords.join(' ')
	}

	_generateUrl() {
		const nameArr = this.name.split(' ')
		nameArr.pop()
		const baseName = (nameArr.length === 1)
			? nameArr[0].toLowerCase()
			: nameArr.reduce((acc, cur) => acc.toLowerCase() + cur.toLowerCase())

		const tldIndex = Random.range(0, tlds.length - 1)
		const tld = '.' + tlds[tldIndex]

		return baseName + tld
	}

  _getSuffix() {
    const index = Random.range(0, suffixes.length - 1)
    return suffixes[index]
  }
}

module.exports = Company;
