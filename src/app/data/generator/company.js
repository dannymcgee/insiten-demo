const Random = require('./random')
const LoremIpsum = require('./lipsum')
const Contact = require('./contact')
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
		this.isPublic = Random.chance(0.34)
		this.contacts = this._generateContacts()
		this.financials = this._generateFinancials()
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
		nameWords.push(Random.itemOf(suffixes))

		return nameWords.join(' ')
	}

	_generateUrl() {
		const nameArr = this.name.split(' ')
		nameArr.pop()
		let baseName = (nameArr.length === 1)
			? nameArr[0].toLowerCase()
			: nameArr.reduce((acc, cur) => acc.toLowerCase() + cur.toLowerCase())
		baseName = baseName.replace(/[^-a-z0-9]/, '')
		const tld = '.' + Random.itemOf(tlds)

		return baseName + tld
	}

	_generateContacts() {
		const contacts = []

		const number = Random.range(1, 3)
		const alreadyUsedPositions = []

		for (let i = 0; i < number; i++) {
			const newContact = new Contact(alreadyUsedPositions, this.url)
			contacts.push(newContact)
			alreadyUsedPositions.push(newContact.position)
		}

		return contacts
	}

	_generateFinancials() {
		const years = []
		const random = Math.random()
		const baseFactor =
			(random < 0.5)
				? 100000
				: (random < 0.85)
					? 1000000
					: 10000000

		for (let y = 2018; y > (2018 - 3); y--) {
			years.push({
				key: y,
				metrics: generateMetrics.apply(this)
			})
		}

		function generateMetrics() {
			const lastYear = years[years.length - 1]
			let metrics = {
				assets: 0,
				debt: 0,
				revenue: 0
			}
			if (this.isPublic) {
				metrics.mc = 0
			}

			if (!lastYear) {
				const keys = Object.keys(metrics)
				for (const key of keys) {
					const foo = Math.random() + 1
					metrics[key] = foo * baseFactor
				}
				const ratio = Random.range(25, 40) / 100
				metrics.ebitda = metrics.revenue * ratio
			} else {
				metrics = { ...lastYear.metrics }
				const keys = Object.keys(metrics)
				for (const key of keys) {
					const sign = Random.coinFlip() ? 1 : -1
					const changePercent = Math.random()
					const change = metrics[key] * changePercent * sign

					metrics[key] += change
				}
				const ratio = Random.range(25, 40) / 100
				metrics.ebitda = metrics.revenue * ratio
			}

			const keys = Object.keys(metrics)
			for (const key of keys) {
				metrics[key] = Math.round(metrics[key])
			}

			return metrics
		}
		return years
	}
}

module.exports = Company;
