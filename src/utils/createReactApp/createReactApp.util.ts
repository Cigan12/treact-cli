import chalk from 'chalk';
import { spawn } from 'child_process';
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
                try {
                    const bash = spawn('bash');
                    bash.stdin.end(
                        `cd ${name} && git init && git remote add origin ${gitUrl.trim()} && git add . && git commit -m "Initial commit" &&  git push --set-upstream origin master`
                    );
                    bash.on('exit', () => {
                        console.log(chalk.green('Success'));
                    });
                } catch (error) {
                    console.log('​}catch -> error', error);
                }
            }
        });
    }
};
