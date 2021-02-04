import figlet = require('figlet');
import chalk = require('chalk');
import clear = require('clear');

const showLogo = (): void => {
    clear();

    console.log(
        chalk.cyanBright(
            figlet.textSync('TS-REACT', { horizontalLayout: 'full' })
        )
    );
};

export = showLogo;
