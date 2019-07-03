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
	let fileContents = `// tslint:disable\n\n`
	fileContents += `const companies = [`

	for (const company of companies) {
		fileContents += '\n'

		// stringify each company
		let companyString = JSON.stringify(company, null, '\t') + ','
		// Remove quotes around property names
		companyString = companyString.replace(/"([a-zA-Z]+)":/g, '$1:')
		// Convert double quotes to single quotes
		companyString = companyString.replace(/"/g, '\'')

		fileContents += companyString
	}
	fileContents += '\n];\n\n'
	fileContents += 'export default companies;\n'

	fs.writeFile('./companies.ts', fileContents, error => {
		if (error) {
			throw error
		}
		console.log('file written!')
	})
}
