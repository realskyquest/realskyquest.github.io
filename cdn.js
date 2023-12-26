import { writeFileSync } from 'fs';

const args = process.argv;

if (args.length !== 3) {
	console.log('missing version, please write 0.0.0');
	process.exit();
}

const path = './dist/package.json';
const config = {
	name: '@skyquest/realskyquest-github-io',
	description: 'cdn for realskyquest.github.io using jsdelivr',
	version: args[2],
	scripts: {
		test: 'echo "Error: no test specified" && exit 1'
	},
	repository: {
		type: 'git',
		url: 'https://github.com/realskyquest/realskyquest.github.io'
	},
	keywords: [],
	author: '',
	license: 'ISC',
	bugs: {
		url: 'https://github.com/realskyquest/realskyquest.github.io/issues'
	},
	homepage: 'https://github.com/realskyquest/realskyquest.github.io'
};

try {
	writeFileSync(path, JSON.stringify(config, null, 2), 'utf8');
	console.log('The cdn config has been setup successfully, version ', args[2]);
} catch (error) {
	console.log('An error has occurred for cdn config ', error);
}
