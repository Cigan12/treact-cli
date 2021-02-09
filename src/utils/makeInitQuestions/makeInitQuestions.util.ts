import inquirer from 'inquirer';
import { createReactApp } from '../createReactApp/createReactApp.util';
import { IQuestion } from '../makeQuestions/makeQuestions.types';

export const createInitQuestions = (): void => {
    const questionsListForComponent: Array<IQuestion> = [
        {
            type: 'input',
            name: 'name',
            message: 'Write project name',
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
