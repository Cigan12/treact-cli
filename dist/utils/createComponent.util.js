"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const reactTsComponent_1 = require("../assets/reactTsComponent");
const rnStylesFile_1 = require("../assets/rnStylesFile");
const makeQuestions_types_1 = require("./makeQuestions/makeQuestions.types");
const small_util_1 = require("./small.util");
const createComponent = (path, name, preprocessor) => {
    const nameCap = small_util_1.capitalize(name);
    fs_1.default.mkdir(path + '/' + small_util_1.capitalize(name), {}, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                console.log(chalk_1.default.red(`Component with name "${name}" already exist`));
            }
        }
        else {
            if (preprocessor !== makeQuestions_types_1.EPreprocessors.NONE) {
                generateStylesFile(nameCap, path + '/' + nameCap + '/' + nameCap, preprocessor);
            }
            else {
                generateReactTSComponent(path + '/' + nameCap + '/' + nameCap, nameCap, preprocessor, true);
            }
        }
    });
};
exports.createComponent = createComponent;
const generateStylesFile = (name, path, preprocessor) => {
    switch (preprocessor) {
        case makeQuestions_types_1.EPreprocessors.CSS:
            generateEmptyStylesFile(name, path, makeQuestions_types_1.EPreprocessors.CSS);
            break;
        case makeQuestions_types_1.EPreprocessors.LESS:
            generateEmptyStylesFile(name, path, makeQuestions_types_1.EPreprocessors.LESS);
            break;
        case makeQuestions_types_1.EPreprocessors.SCSS:
            generateEmptyStylesFile(name, path, makeQuestions_types_1.EPreprocessors.SCSS);
            break;
        case makeQuestions_types_1.EPreprocessors.STYLUS:
            generateEmptyStylesFile(name, path, makeQuestions_types_1.EPreprocessors.STYLUS);
            break;
        case makeQuestions_types_1.EPreprocessors.RN:
            generateRNStylesFile(name, path);
            break;
        default:
            break;
    }
};
const generateEmptyStylesFile = (componentName, path, ext) => {
    fs_1.default.writeFile(path + '.styles.' + ext, '', (err) => {
        if (err) {
            throw err;
        }
        else {
            generateReactTSComponent(path, componentName, ext);
        }
    });
};
const generateRNStylesFile = (componentName, path) => {
    fs_1.default.writeFile(path + '.styles.ts', rnStylesFile_1.rnStylesFile(componentName), (err) => {
        if (err) {
            throw err;
        }
        else {
            generateReactTSComponent(path, componentName);
        }
    });
};
const generateReactTSComponent = (path, componentName, stylesExt, notStyled) => {
    fs_1.default.writeFile(path + '.component.tsx', reactTsComponent_1.reactTsComponent(componentName, stylesExt, notStyled), (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log(chalk_1.default.green(`Component with name "${componentName}" successfully created`));
        }
    });
};
//# sourceMappingURL=createComponent.util.js.map