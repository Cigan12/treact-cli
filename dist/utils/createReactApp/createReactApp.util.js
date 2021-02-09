"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReactApp = void 0;
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const createReactApp = ({ name, type, gitUrl, }) => {
    if (type === 'spa') {
        const createApp = child_process_1.spawn('npx', [
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
                    const bash = child_process_1.spawn('bash');
                    bash.stdin.end(`cd ${name} && git init && git remote add origin ${gitUrl.trim()} && git add . && git commit -m "Initial commit" &&  git push --set-upstream origin master`);
                    bash.on('exit', () => {
                        console.log(chalk_1.default.green('Success'));
                    });
                }
                catch (error) {
                    console.log('​}catch -> error', error);
                }
            }
        });
    }
};
exports.createReactApp = createReactApp;
//# sourceMappingURL=createReactApp.util.js.map