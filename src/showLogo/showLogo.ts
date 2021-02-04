import figlet from 'figlet';
import chalk from 'chalk';
import clear from 'clear';
import minimist from 'minimist';

export const showLogo = (): void => {
    clear();

    console.log(
        chalk.cyanBright(
            figlet.textSync('TS-REACT', { horizontalLayout: 'full' })
        )
    );
};

export const parseArguments = (): void => {
    console.log('​minimist', minimist(process.argv.slice(2)));
};
