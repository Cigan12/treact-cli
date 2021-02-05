"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArguments = void 0;
const minimist_1 = __importDefault(require("minimist"));
const makeQuestions_types_1 = require("./makeQuestions/makeQuestions.types");
const makeQuestions_util_1 = require("./makeQuestions/makeQuestions.util");
const parseArguments = () => {
    const args = minimist_1.default(process.argv.slice(2));
    console.log('​args', args);
    if (args.g === 'c') {
        makeQuestions_util_1.createComponentQuestion({
            name: args.name,
            rn: args.rn,
            style: validateStyleArgument(args.s, args.rn) ? args.s : undefined,
        });
    }
};
exports.parseArguments = parseArguments;
const validateStyleArgument = (arg, rn) => {
    if (!rn) {
        if (arg === makeQuestions_types_1.EPreprocessors.CSS ||
            arg === makeQuestions_types_1.EPreprocessors.LESS ||
            arg === makeQuestions_types_1.EPreprocessors.SCSS ||
            arg === makeQuestions_types_1.EPreprocessors.STYLUS ||
            arg === makeQuestions_types_1.EPreprocessors.NONE)
            return true;
        return false;
    }
    else {
        if (arg === makeQuestions_types_1.EPreprocessors.NONE || arg === makeQuestions_types_1.EPreprocessors.RN)
            return true;
        else
            return false;
    }
};
//# sourceMappingURL=parseArguments.util.js.map