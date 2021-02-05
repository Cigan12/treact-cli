import chalk from 'chalk';
import fs from 'fs';
import { cwd } from 'process';
import { reactTsComponent } from '../assets/reactTsComponent';
import { capitalize } from './small.util';

export const createComponent = (path: string, name: string): void => {
    fs.mkdir(path + '/' + capitalize(name), {}, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log(
                    chalk.red(`Component with name "${name}" already exist`)
                );
            }
        } else {
            fs.writeFile(
                path +
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
        }
    });
};
