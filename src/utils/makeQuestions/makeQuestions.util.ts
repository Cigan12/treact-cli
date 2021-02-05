import { statSync } from 'fs';
import inquirer from 'inquirer';
import fs from 'fs';
import { createComponent } from '../createComponent.util';
import { cwd } from 'process';
import { join } from 'path';
import {
    EPreprocessors,
    ICreateComponentQuestionProps,
    IFindComponentStructureReturn,
    IQuestion,
} from './makeQuestions.types';

const findComponentFolderStructure = (): IFindComponentStructureReturn => {
    //GET CURRENT FOLDER STRUCTURE
    const currentFolderStructure = fs
        .readdirSync(cwd())
        .filter((file) => statSync(join(cwd(), file)).isDirectory());

    //  CHECK IS SRC FOLDER IN THE PROJECT
    const isSrcFolder = !!currentFolderStructure.find(
        (folder) => folder === 'src'
    );

    if (isSrcFolder) {
        //  FIND COMPONENTS FOLDER
        const srcFolderStructure = fs.readdirSync(cwd() + '/src');
        const isComponentsFolder = !!srcFolderStructure.find(
            (folder) => folder === 'components'
        );

        if (isComponentsFolder) {
            const componentsFolderStructure = fs.readdirSync(
                cwd() + '/src/components'
            );

            return {
                items: componentsFolderStructure,
                pathToComponentsFolder: cwd() + '/src/components',
            };
        } else {
            fs.mkdirSync(cwd() + '/src/components');
            return {
                items: [],
                pathToComponentsFolder: cwd() + '/src/components',
            };
        }
    } else {
        //  FIND COMPONENTS FOLDER
        const srcFolderStructure = fs.readdirSync(cwd());
        const isComponentsFolder = !!srcFolderStructure.find(
            (folder) => folder === 'components'
        );

        if (isComponentsFolder) {
            const componentsFolderStructure = fs.readdirSync(
                cwd() + '/components'
            );

            return {
                items: componentsFolderStructure,
                pathToComponentsFolder: cwd() + '/components',
            };
        } else {
            fs.mkdirSync(cwd() + '/components');
            return {
                items: [],
                pathToComponentsFolder: cwd() + '/components',
            };
        }
    }
};

export const createComponentQuestion = ({
    name,
    rn,
    style,
}: ICreateComponentQuestionProps): void => {
    const componentsFolderStructure = findComponentFolderStructure();
    const questionsListForComponent: Array<IQuestion> = [
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

    inquirer
        .prompt(questionsListForComponent)
        .then((answers) => {
            createComponent(
                componentsFolderStructure.pathToComponentsFolder +
                    (answers.componentFolder !== 'Root'
                        ? '/' + answers.componentFolder
                        : ''),
                name ? name : answers.componentName,
                style ? style : (answers.preprocessor as EPreprocessors),
                rn
            );
        })
        .catch((err) => {
            console.error(err);
        });
};

const removeQuestionByName = (name: string, arr: Array<IQuestion>): void => {
    const index = arr.findIndex((question) => question.name === name);
    arr.splice(index, 1);
};

const changeQuestionByName = (
    name: string,
    arr: Array<IQuestion>,
    change: IQuestion
): void => {
    const index = arr.findIndex((question) => question.name === name);
    arr[index] = change;
};
