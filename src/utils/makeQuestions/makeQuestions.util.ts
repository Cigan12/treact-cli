import { fstat, statSync } from 'fs';
import inquirer from 'inquirer';
import fs from 'fs';
import { createComponent } from '../createComponent.util';
import { cwd } from 'process';
import { join } from 'path';
import { IFindComponentStructureReturn } from './makeQuestions.types';

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

export const createComponentQuestion = (name?: string): void => {
    const componentsFolderStructure = findComponentFolderStructure();
    const questionsListForComponent = [
        {
            type: 'input',
            name: 'componentName',
            message: 'Write component name',
        },
        {
            type: 'list',
            name: 'componentFolder',
            message: 'Choose folder for component',
            choices: ['None', ...componentsFolderStructure.items],
        },
    ];

    if (name) {
        questionsListForComponent.splice(0, 1);
    }

    inquirer
        .prompt(questionsListForComponent)
        .then((answers) => {
            createComponent(
                componentsFolderStructure.pathToComponentsFolder +
                    (answers.componentFolder !== 'None'
                        ? '/' + answers.componentFolder
                        : ''),
                answers.componentName
            );
        })
        .catch((err) => {
            console.error(err);
        });
};
