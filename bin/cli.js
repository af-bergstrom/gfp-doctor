#!/usr/bin/env node
const doctor = require('../lib');
const program = require('commander');
const chalk = require('chalk');
const emoji = require('node-emoji').emoji;
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({ pkg }).notify();

let options;

program
    .version(require('../package.json').version)
    .option('-v, --verbose', '')
    .parse(process.argv);

options = {
    verbose: program.verbose
};

try {
    console.log(`${emoji.syringe}  Running gfp-doctor v${program.version()}`);
    doctor(options);
    console.log('');
    console.log('DONE');
} catch (err) {
    console.error(chalk.red(err));
    process.exit(1);
}
