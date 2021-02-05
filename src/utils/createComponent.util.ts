import chalk from 'chalk';
import fs from 'fs';
import { cwd } from 'process';
import { reactTsComponent } from '../assets/reactTsComponent';
import { capitalize } from './small.util';

export const createComponent = (name: string): void => {
    fs.mkdir(cwd() + '/' + capitalize(name), {}, (err) => {
        if (err) throw err;
        fs.writeFile(
            cwd() +
                '/' +
                capitalize(name) +
                '/' +
                capitalize(name) +
                '.component.ts',
            reactTsComponent(capitalize(name)),
            (err) => {
                if (err) throw err;
                console.log(chalk.green('Success'));
            }
        );
    });
};
