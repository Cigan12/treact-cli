"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponentQuestion = void 0;
const fs_1 = require("fs");
const inquirer_1 = __importDefault(require("inquirer"));
const fs_2 = __importDefault(require("fs"));
const createComponent_util_1 = require("../createComponent.util");
const process_1 = require("process");
const path_1 = require("path");
const findComponentFolderStructure = () => {
    //GET CURRENT FOLDER STRUCTURE
    const currentFolderStructure = fs_2.default
        .readdirSync(process_1.cwd())
        .filter((file) => fs_1.statSync(path_1.join(process_1.cwd(), file)).isDirectory());
    //  CHECK IS SRC FOLDER IN THE PROJECT
    const isSrcFolder = !!currentFolderStructure.find((folder) => folder === 'src');
    if (isSrcFolder) {
        //  FIND COMPONENTS FOLDER
        const srcFolderStructure = fs_2.default.readdirSync(process_1.cwd() + '/src');
        const isComponentsFolder = !!srcFolderStructure.find((folder) => folder === 'components');
        if (isComponentsFolder) {
            const componentsFolderStructure = fs_2.default.readdirSync(process_1.cwd() + '/src/components');
            return {
                items: componentsFolderStructure,
                pathToComponentsFolder: process_1.cwd() + '/src/components',
            };
        }
        else {
            fs_2.default.mkdirSync(process_1.cwd() + '/src/components');
            return {
                items: [],
                pathToComponentsFolder: process_1.cwd() + '/src/components',
            };
        }
    }
    else {
        //  FIND COMPONENTS FOLDER
        const srcFolderStructure = fs_2.default.readdirSync(process_1.cwd());
        const isComponentsFolder = !!srcFolderStructure.find((folder) => folder === 'components');
        if (isComponentsFolder) {
            const componentsFolderStructure = fs_2.default.readdirSync(process_1.cwd() + '/components');
            return {
                items: componentsFolderStructure,
                pathToComponentsFolder: process_1.cwd() + '/components',
            };
        }
        else {
            fs_2.default.mkdirSync(process_1.cwd() + '/components');
            return {
                items: [],
                pathToComponentsFolder: process_1.cwd() + '/components',
            };
        }
    }
};
const createComponentQuestion = ({ name, rn, style, }) => {
    const componentsFolderStructure = findComponentFolderStructure();
    const questionsListForComponent = [
        {
            type: 'input',
            name: 'componentName',
            message: 'Write component name',
        },
        {
            type: 'list',
            name: 'preprocessor',
            message: 'Which preprocessor you will use?',
            choices: [
                { name: 'None', value: 'no' },
                { name: 'CSS', value: 'css' },
                { name: 'SASS/SCSS', value: 'scss' },
                { name: 'Less', value: 'less' },
                { name: 'Stylus', value: 'styl' },
            ],
        },
        {
            type: 'list',
            name: 'componentFolder',
            message: 'Choose folder for component',
            choices: ['Root', ...componentsFolderStructure.items],
        },
    ];
    if (name) {
        removeQuestionByName('componentName', questionsListForComponent);
    }
    if (rn) {
        changeQuestionByName('preprocessor', questionsListForComponent, {
            type: 'list',
            name: 'preprocessor',
            message: 'Generate styles file?',
            choices: [
                { name: 'No', value: 'no' },
                { name: 'Yes', value: 'rn' },
            ],
        });
    }
    if (style) {
        removeQuestionByName('preprocessor', questionsListForComponent);
    }
    inquirer_1.default
        .prompt(questionsListForComponent)
        .then((answers) => {
        createComponent_util_1.createComponent(componentsFolderStructure.pathToComponentsFolder +
            (answers.componentFolder !== 'Root'
                ? '/' + answers.componentFolder
                : ''), name ? name : answers.componentName, style ? style : answers.preprocessor);
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.createComponentQuestion = createComponentQuestion;
const removeQuestionByName = (name, arr) => {
    const index = arr.findIndex((question) => question.name === name);
    arr.splice(index, 1);
};
const changeQuestionByName = (name, arr, change) => {
    const index = arr.findIndex((question) => question.name === name);
    arr[index] = change;
};
//# sourceMappingURL=makeQuestions.util.js.map