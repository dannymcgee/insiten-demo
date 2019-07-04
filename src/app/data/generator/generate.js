const fs = require('fs')
const Company = require('./company')



const companies = generateCompanies(50)
writeDataModule(companies)



function generateCompanies(number = 10) {
	const companies = []

	for (let i = 0; i < number; i++) {
		companies.push(new Company())
	}

	return companies
}

function writeDataModule(companies) {
	let fileContents = `import { Status } from './status.enum';\n\n`
	fileContents += `const companies = [`

	for (const company of companies) {
		fileContents += '\n'

		// Add status property
		company.status = "Status.Researching"
		// stringify each company
		let companyString = JSON.stringify(company, null, '\t') + ','
		// Remove quotes around property names
		companyString = companyString.replace(/"([a-zA-Z]+)":/g, '$1:')
		// Convert double quotes to single quotes
		companyString = companyString.replace(/"/g, '\'')
		// Remove quotes from status value
		companyString = companyString.replace(/'(Status\.Researching)'/g, '$1')

		// Split lines that are longer than 130 characters
		let lines = companyString.split('\n')
		// for (let line of lines) {
		lines.forEach((line, index) => {
			if (line.length > 130) {
				const words = [];
				let charCount = 0;
				for (const word of line.split(' ')) {
					charCount += word.length + 1
					if (charCount > 130) {
						words.push('\'\n\t\t+ \'' + word)
						charCount = 0
					} else {
						words.push(word)
					}
				}
				line = words.join(' ')
				lines[index] = line
			}
		})
		companyString = lines.join('\n')

		fileContents += companyString
	}
	fileContents += '\n];\n\n'
	fileContents += 'export default companies;\n'

	fs.writeFile('./src/app/data/companies.ts', fileContents, error => {
		if (error) {
			throw error
		}
		console.log('file written!')
	})
}
