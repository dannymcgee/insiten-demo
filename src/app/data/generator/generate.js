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