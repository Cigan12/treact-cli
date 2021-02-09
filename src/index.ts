#!/usr/bin/env node
import { parseArguments } from './utils/parseArguments.util';
import { showLogo } from './utils/showLogo.util';

const init = (): void => {
    showLogo();
    parseArguments();
};

init();
