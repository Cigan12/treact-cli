import chalk from 'chalk';
import { spawn } from 'child_process';
import { ICreateReactAppProps } from './createReactApp.types';

export const createReactApp = ({ name, type }: ICreateReactAppProps): void => {
    if (type === 'spa') {
        const createApp = spawn('npx', [
            'create-react-app',
            name,
            '--template',
            'typescript',
        ]);
        createApp.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        createApp.on('exit', () => {
            console.log(chalk.green('success'));
        });
    }
};
