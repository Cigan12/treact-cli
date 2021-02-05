import chalk from 'chalk';
import fs from 'fs';

import { reactTsComponent } from '../assets/reactTsComponent';
import { rnStylesFile } from '../assets/rnStylesFile';
import { EPreprocessors } from './makeQuestions/makeQuestions.types';
import { capitalize } from './small.util';

export const createComponent = (
    path: string,
    name: string,
    preprocessor: EPreprocessors
): void => {
    const nameCap = capitalize(name);
    fs.mkdir(path + '/' + capitalize(name), {}, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log(
                    chalk.red(`Component with name "${name}" already exist`)
                );
            }
        } else {
            if (preprocessor !== EPreprocessors.NONE) {
                generateStylesFile(
                    nameCap,
                    path + '/' + nameCap + '/' + nameCap,
                    preprocessor
                );
            } else {
                generateReactTSComponent(
                    path + '/' + nameCap + '/' + nameCap,
                    nameCap,
                    preprocessor,
                    true
                );
            }
        }
    });
};

const generateStylesFile = (
    name,
    path: string,
    preprocessor: EPreprocessors
): void => {
    switch (preprocessor) {
        case EPreprocessors.CSS:
            generateEmptyStylesFile(name, path, EPreprocessors.CSS);
            break;
        case EPreprocessors.LESS:
            generateEmptyStylesFile(name, path, EPreprocessors.LESS);
            break;
        case EPreprocessors.SCSS:
            generateEmptyStylesFile(name, path, EPreprocessors.SCSS);
            break;
        case EPreprocessors.STYLUS:
            generateEmptyStylesFile(name, path, EPreprocessors.STYLUS);
            break;
        case EPreprocessors.RN:
            generateRNStylesFile(name, path);
            break;
        default:
            break;
    }
};

const generateEmptyStylesFile = (
    componentName: string,
    path: string,
    ext: string
) => {
    fs.writeFile(path + '.styles.' + ext, '', (err) => {
        if (err) {
            throw err;
        } else {
            generateReactTSComponent(path, componentName, ext);
        }
    });
};

const generateRNStylesFile = (componentName: string, path: string) => {
    fs.writeFile(path + '.styles.ts', rnStylesFile(componentName), (err) => {
        if (err) {
            throw err;
        } else {
            generateReactTSComponent(path, componentName);
        }
    });
};

const generateReactTSComponent = (
    path: string,
    componentName: string,
    stylesExt?: string,
    notStyled?: boolean
): void => {
    fs.writeFile(
        path + '.component.ts',
        reactTsComponent(componentName, stylesExt, notStyled),
        (err) => {
            if (err) {
                throw err;
            } else {
                console.log(
                    chalk.green(
                        `Component with name "${componentName}" successfully created`
                    )
                );
            }
        }
    );
};
