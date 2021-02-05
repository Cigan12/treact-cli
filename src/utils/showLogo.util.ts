import figlet from 'figlet';
import chalk from 'chalk';
import clear from 'clear';

export const showLogo = (): void => {
    clear();

    console.log(
        chalk.cyanBright(
            figlet.textSync('TS-REACT', { horizontalLayout: 'full' })
        )
    );
};
