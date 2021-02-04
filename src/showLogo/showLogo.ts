import figlet from 'figlet';
import chalk from 'chalk';
import clear from 'clear';
import minimist from 'minimist';
import inquirer from 'inquirer';
import { createComponent } from '../createComponent';

export const showLogo = (): void => {
    clear();

    console.log(
        chalk.cyanBright(
            figlet.textSync('TS-REACT', { horizontalLayout: 'full' })
        )
    );
};

export const parseArguments = (): void => {
    const args = minimist(process.argv.slice(2));

    if (args.g === 'c') {
        if (args.name) createComponent(args.name);

        if (!args.name) {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'componentName',
                        message: 'Write component name',
                    },
                ])
                .then((answers) => {
                    if (answers) createComponent(answers.componentName);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }
};
