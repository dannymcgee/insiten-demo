const Random = require('./random')

const firstNames = [
	'Phylis',
	'Marlo',
	'Leona',
	'Denver',
	'Jin',
	'Joseph',
	'Sergio',
	'Brady',
	'Lucrecia',
	'Lela',
	'Suzi',
	'Nohemi',
	'Diego',
	'Kelli',
	'Barbera',
	'Yoshiko',
	'Emmett',
	'Osvaldo',
	'Bradford',
	'Valarie',
	'Milagro',
	'Adelina',
	'Hector',
	'Deeann',
	'Ileen',
	'Sebrina',
	'Kandis',
	'Oma',
	'Wilber',
	'Fleta',
	'Malisa',
	'Imelda',
	'Tamie',
	'Fidelia',
	'Ching',
	'Lashonda',
	'Earle',
	'Julieann',
	'Veola',
	'Tobie',
	'Stefani',
	'Mirian',
	'Ute',
	'Lorri',
	'Lelah',
	'Nicole',
	'Elia',
	'Bridgett',
	'Nannie',
	'Antony'
]
const lastNames = [
	'Anderton',
	'Wilker',
	'Bergevin',
	'Alegria',
	'Towle',
	'Sones',
	'Perron',
	'Reece',
	'Kennard',
	'Koppes',
	'Parkhill',
	'Puig',
	'Ruckman',
	'Rudman',
	'Zahl',
	'Oiler',
	'Andrea',
	'Keala',
	'Pridgeon',
	'Hunte',
	'Morgan',
	'Nagata',
	'Kee',
	'Jeffords',
	'Lamarre',
	'Castagna',
	'Lariviere',
	'Blea',
	'Conte',
	'Cancel',
	'Kinard',
	'Mccallister',
	'Legendre',
	'Hains',
	'Woodie',
	'Breitenstein',
	'Mercado',
	'Demoura',
	'Hellen',
	'Tallarico',
	'Evens',
	'Client',
	'Dutra',
	'Moyle',
	'Ellett',
	'Leland',
	'Giard',
	'Seabury',
	'Hou',
	'Lantz',
]
const positions = ['CEO', 'President', 'Vice President', 'CFO']

class Contact {
	constructor(alreadyUsedPositions, companyUrl) {
		this.name = this._generateName()
		this.position = this._generatePosition(alreadyUsedPositions)
		this.phone = this._generatePhoneNumber()
		this.email = this._generateEmail(companyUrl)
	}

	_generateName() {
		const fnIndex = Random.range(0, firstNames.length - 1)
		const lnIndex = Random.range(0, lastNames.length - 1)

		return {
			first: firstNames[fnIndex],
			last: lastNames[lnIndex]
		}
	}

	_generatePosition(alreadyUsedPositions) {
		const index = Random.range(0, positions.length - 1)
		const maybePosition = positions[index]

		if (alreadyUsedPositions.indexOf(maybePosition) !== -1) {
			return this._generatePosition(alreadyUsedPositions)
		} else {
			return maybePosition
		}
	}

	_generatePhoneNumber() {
		let phone = ''
		for (let i = 0; i < 10; i++) {
			phone += Random.range(0, 9)
		}

		return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
	}

	_generateEmail(url) {
		const firstInitial = this.name.first.charAt(0).toLowerCase()
		const lastName = this.name.last.toLowerCase()

		return `${firstInitial + lastName}@${url}`
	}
}

module.exports = Contact
