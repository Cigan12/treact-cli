import chalk from 'chalk';
import fs from 'fs';
import { reactTsComponent } from './assets/reactTsComponent';
import { capitalize } from './utils/capitalize.util';

export const createComponent = (name: string): void => {
    fs.writeFile(
        capitalize(name) + '.component.ts',
        reactTsComponent(capitalize(name)),
        (err) => {
            if (err) throw err;
            console.log(chalk.green('Success'));
        }
    );
};
