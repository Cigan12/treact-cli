#!/usr/bin/env node
import { parseArguments, showLogo } from './utils/showLogo.util';

const init = (): void => {
    showLogo();
    parseArguments();
};

init();
