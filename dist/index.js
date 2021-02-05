#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArguments_util_1 = require("./utils/parseArguments.util");
const showLogo_util_1 = require("./utils/showLogo.util");
const init = () => {
    showLogo_util_1.showLogo();
    parseArguments_util_1.parseArguments();
};
init();
//# sourceMappingURL=index.js.map