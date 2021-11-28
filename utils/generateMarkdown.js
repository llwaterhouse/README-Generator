// Return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case 'Eclipse 1.0':
			// return badge
			return '[![License: Eclipse 1.0](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
			break;
		case 'Apache 2.0':
			return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
			break;
		case 'GNU GPL v3':
			return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
			return;
		case 'MIT':
			return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
			break;
		default:
			return '';
	}
}

// Returns the license link for the table of contents
// If there is no license, return an empty string so no there's no link in table of contents

function renderLicenseLink(license) {
	if (!license || license === 'None') {
		return ``;
	} else {
		return `- [License](#license)`;
	}
}

// Returns the description link for the table of contents
// If there is no description, return an empty string so no there's no link in table of contents

function renderDescriptionLink(description) {
	if (!description || description === 'None') {
		return ``;
	} else {
		return `- [Description](#description)`;
	}
}

// Returns the description link for the table of contents
// If there is no description, return an empty string so no there's no link in table of contents

function renderInstallationLink(installation) {
	if (!installation || installation === 'None') {
		return ``;
	} else {
		return `- [Installation](#installation)`;
	}
}

// Returns the usage link for the table of contents
// If there is no usage info, return an empty string so no there's no link in table of contents

function renderUsageLink(usage) {
	if (!usage) {
		return ``;
	} else {
		return `- [Usage](#usage)`;
	}
}
// Returns the test Instructions link for the table of contents
// If there are no test instructions, return an empty string so no there's no link in table of contents

function renderTestInstructionsLink(testInstructions) {
	testInstructions = testInstructions.trim();
	if (testInstructions === "" ) {
		return ``;
	} else {
		return `- [Testing](#testing)`;
	}
}
// Returns the contribution link for the table of contents
// If there is no contribution, return an empty string so no there's no link in table of contents

function renderContributionLink(contribution) {
	if (!contribution || contribution === 'None') {
		return ``;
	} else {
		return `- [How to Contribute](#how-to-contribute)`;
	}
}

// Returns the questions link for the table of contents
// If there is no supplied email or github repository, return an empty string so no there's no link in table of contents

function renderQuestionsLink(email, github) {
	if (!email && !github) {
		return ``;
	} else {
		return `- [Questions](#questions)`;
	}
}
// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (!license || license === 'None') {
		return '';
	} else {
		return `## License
  This application is covered under the ${license} license.`;
	}
}

// Returns the description section of README
// If there is no description, return an empty string
function renderDescriptionSection(description) {
	if (description) {
		return `## Description
  ${description}`;
	} else {
		return '';
	}
}

// Returns the usage section of README
// If there is no usage, return an empty string
function renderUsageSection(usage) {
	if (usage) {
		return `## Usage
  ${usage}`;
	} else {
		return '';
	}
}
// Returns the contribution section of README
// If there is no contriubtion, return an empty string
function renderContributionSection(contribution) {
	if (contribution) {
		return `## How To Contribute
  ${contribution}`;
	} else {
		return '';
	}
}

// Returns the installation section of README
// If there is no installation, return an empty string
function renderInstallationSection(installation) {
	if (installation) {
		return `## Installation Instructions
  ${installation}`;
	} else {
		return '';
	}
}

// Returns the test Instructions section of README
// If there are no test instructions, return an empty string
function renderTestInstructionsSection(testInstructions) {
	testInstructions = testInstructions.trim();
	if (testInstructions != "") {
		return `## Testing
  ${testInstructions}`;
	} else {
		return '';
	}
}

// Returns the Questions section of README
// If there is no supplied email or github, return an empty string
function renderQuestionsSection(email, github) {
	if (!email && !github) {
		return '';
	} else {
		return `## Questions
  For questions about this project, please contact me by a link below:
  
  ${email}
  
  www.github.com/${github}
 `;
	}
}
// Generate markdown for a README file
function generateMarkdown({
	title,
	description,
	installation,
	usage,
	contribution,
	testInstructions,
	github,
	email,
	license
}) {



	//  Return README text with all parameters filled in.
	return `# ${title}

${renderDescriptionSection(description)}


${renderLicenseBadge(license)}


## Table of Contents
${renderInstallationLink(installation)}

${renderUsageLink(usage)}

${renderContributionLink(contribution)}

${renderTestInstructionsLink(testInstructions)}

${renderQuestionsLink(email, github)}

${renderLicenseLink(license)}


${renderInstallationSection(installation)}

${renderUsageSection(usage)}

${renderContributionSection(contribution)}

${renderTestInstructionsSection(testInstructions)}

${renderQuestionsSection(email,github)}

${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
