"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const reactTsComponent_1 = require("./assets/reactTsComponent");
const capitalize_util_1 = require("./utils/capitalize.util");
const createComponent = (name) => {
    fs_1.default.writeFile(capitalize_util_1.capitalize(name) + '.component.ts', reactTsComponent_1.reactTsComponent(capitalize_util_1.capitalize(name)), (err) => {
        if (err)
            throw err;
        console.log(chalk_1.default.green('Success'));
    });
};
exports.createComponent = createComponent;
//# sourceMappingURL=createComponent.js.map