"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArguments = exports.showLogo = void 0;
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const clear_1 = __importDefault(require("clear"));
const minimist_1 = __importDefault(require("minimist"));
const inquirer_1 = __importDefault(require("inquirer"));
const createComponent_1 = require("../createComponent");
const showLogo = () => {
    clear_1.default();
    console.log(chalk_1.default.cyanBright(figlet_1.default.textSync('TS-REACT', { horizontalLayout: 'full' })));
};
exports.showLogo = showLogo;
const parseArguments = () => {
    const args = minimist_1.default(process.argv.slice(2));
    if (args.g === 'c') {
        if (args.name)
            createComponent_1.createComponent(args.name);
        if (!args.name) {
            inquirer_1.default
                .prompt([
                {
                    type: 'input',
                    name: 'componentName',
                    message: 'Write component name',
                },
            ])
                .then((answers) => {
                if (answers)
                    createComponent_1.createComponent(answers.componentName);
            })
                .catch((err) => {
                console.error(err);
            });
        }
    }
};
exports.parseArguments = parseArguments;
//# sourceMappingURL=showLogo.js.map