import chalk from 'chalk';
import { exec, spawn } from 'child_process';
import { ICreateReactAppProps } from './createReactApp.types';

export const createReactApp = ({
    name,
    type,
    gitUrl,
}: ICreateReactAppProps): void => {
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
            if (gitUrl) {
                exec(`cd ${name}`, (err) => {
                    if (!err) {
                        exec(
                            `git remote add origin ${gitUrl.trim()}`,
                            (err) => {
                                if (!err) {
                                    console.log(chalk.green('success'));
                                }
                            }
                        );
                    }
                });
            }
        });
    }
};
