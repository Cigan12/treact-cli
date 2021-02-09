import inquirer from 'inquirer';
import { createReactApp } from '../createReactApp/createReactApp.util';
import {
    EPreprocessors,
    IQuestion,
} from '../makeQuestions/makeQuestions.types';

export const createInitQuestions = (): void => {
    const questionsListForComponent: Array<IQuestion> = [
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
                { name: 'SASS', value: EPreprocessors.SCSS },
                { name: 'LESS', value: EPreprocessors.LESS },
                { name: 'Stylus', value: EPreprocessors.STYLUS },
                { name: 'None', value: EPreprocessors.NONE },
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

    inquirer
        .prompt(questionsListForComponent)
        .then((answers) => {
            if (answers.name && answers.typeOfProject) {
                createReactApp({
                    name: answers.name,
                    type: answers.typeOfProject,
                });
            }
        })
        .catch((err) => {
            console.error(err);
        });
};
