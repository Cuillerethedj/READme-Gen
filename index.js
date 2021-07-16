	// packages needed for this app.
	const inquirer = require('inquirer')
	const fs = require('fs')
	const util = require('util');
	const generateMarkdown = require('./utils/generateMarkdown')

	// the questions
	const questions = [
		{
			type: 'input',
			message: 'What is your the title to your project?',
			name: 'title',
		},
		{
			type: 'input',
			message: 'What is the description of your project?',
			name: 'description',
		},
		{
			type: 'input',
			message: 'How do you install your project?',
			name: 'install',
		},
		{
			type: 'input',
			message: 'What can you do with your project?',
			name: 'use'
			
		},
		{
			type: 'input',
			message: 'did anyone help you with it?',
			name: 'help',
			
		},
		{
			type: 'list',
			message: 'What license do you want ??',
			choices: ['MIT','None', 'Apache License 2.0', 'GNU General Public License V3.0'],
			name: 'license'
		},
		{
			type: 'input',
			message: 'Run any tests for the project?',
			name: 'test'
		},
		{
			type: 'input',
			message: 'Enter toy GitHub userName',
			name: 'github'
		},
		{
			type: 'input',
			message: 'Enter you email here',
			name: 'email'
		}
	]

	
	inquirer
		.prompt(questions)
		.then((response) => 
			writeToFile('README1',response)

			);

			// create a functionto write the read me file
			function writeToFile(fileName, data){
				fs.writeFile(`${fileName}.md` , generateMarkdown(data),(err) => err ? console.log(err) : console.log('Success!')
				);
			}



