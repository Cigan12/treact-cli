import minimist from 'minimist';

import { createComponentQuestion } from './makeQuestions/makeQuestions.util';

export const parseArguments = (): void => {
    const args = minimist(process.argv.slice(2));

    if (args.g === 'c') {
        createComponentQuestion(args.name, args.rn);
    }
};
