#!/usr/bin/env node
import { parseArguments } from './utils/parseArguments.util';
import { showLogo } from './utils/showLogo.util';
import { spawn } from 'child_process';

const init = (): void => {
    showLogo();

    parseArguments();
};

init();
