import minimist from 'minimist';
import { createInitQuestions } from './makeInitQuestions/makeInitQuestions.util';
import { EPreprocessors } from './makeQuestions/makeQuestions.types';

import { createComponentQuestion } from './makeQuestions/makeQuestions.util';

export const parseArguments = (): void => {
    const args = minimist(process.argv.slice(2));

    if (Object.keys(args).length && args._.length === 0) {
        createInitQuestions();
    }
    if (args.g === 'c') {
        createComponentQuestion({
            name: args.name,
            rn: args.rn,
            style: validateStyleArgument(args.s, args.rn) ? args.s : undefined,
        });
    }
};

const validateStyleArgument = (arg: EPreprocessors, rn?: boolean): boolean => {
    if (!rn) {
        if (
            arg === EPreprocessors.CSS ||
            arg === EPreprocessors.LESS ||
            arg === EPreprocessors.SCSS ||
            arg === EPreprocessors.STYLUS ||
            arg === EPreprocessors.NONE
        )
            return true;
        return false;
    } else {
        if (arg === EPreprocessors.NONE || arg === EPreprocessors.RN)
            return true;
        else return false;
    }
};
