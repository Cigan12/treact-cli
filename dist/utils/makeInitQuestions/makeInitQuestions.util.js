"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitQuestions = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const createReactApp_util_1 = require("../createReactApp/createReactApp.util");
const makeQuestions_types_1 = require("../makeQuestions/makeQuestions.types");
const createInitQuestions = () => {
    const questionsListForComponent = [
        {
            type: 'input',
            name: 'name',
            message: 'Write project name',
        },
        {
            type: 'input',
            name: 'repository',
            message: 'Write repository url or leave it empty',
        },
        {
            type: 'list',
            name: 'typeOfProject',
            message: 'Type of project?',
            choices: [
                { name: 'Spa', value: 'spa' },
                { name: 'Ssr', value: 'ssr' },
            ],
        },
        {
            type: 'list',
            name: 'eslint',
            message: 'Will you use ESLint',
            choices: [
                { name: 'Yes', value: 'yes' },
                { name: 'No', value: 'no' },
            ],
        },
        {
            type: 'list',
            name: 'preprocessor',
            message: 'Which preprocessor you will use?',
            choices: [
                { name: 'SASS', value: makeQuestions_types_1.EPreprocessors.SCSS },
                { name: 'LESS', value: makeQuestions_types_1.EPreprocessors.LESS },
                { name: 'Stylus', value: makeQuestions_types_1.EPreprocessors.STYLUS },
                { name: 'None', value: makeQuestions_types_1.EPreprocessors.NONE },
            ],
        },
        {
            type: 'list',
            name: 'docker',
            message: 'Will you use docker',
            choices: [
                { name: 'Yes', value: 'yes' },
                { name: 'No', value: 'no' },
            ],
        },
        {
            type: 'list',
            name: 'redux',
            message: 'Will you use redux',
            choices: [
                { name: 'Yes', value: 'yes' },
                { name: 'No', value: 'no' },
            ],
        },
        {
            type: 'list',
            name: 'reduxSaga',
            message: 'Will you use redux-saga',
            choices: [
                { name: 'Yes', value: 'yes' },
                { name: 'No', value: 'no' },
            ],
        },
    ];
    inquirer_1.default
        .prompt(questionsListForComponent)
        .then((answers) => {
        if (answers.name && answers.typeOfProject) {
            createReactApp_util_1.createReactApp({
                name: answers.name,
                type: answers.typeOfProject,
            });
        }
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.createInitQuestions = createInitQuestions;
//# sourceMappingURL=makeInitQuestions.util.js.map