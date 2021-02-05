"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLogo = void 0;
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const clear_1 = __importDefault(require("clear"));
const showLogo = () => {
    clear_1.default();
    console.log(chalk_1.default.cyanBright(figlet_1.default.textSync('TS-REACT', { horizontalLayout: 'full' })));
};
exports.showLogo = showLogo;
//# sourceMappingURL=showLogo.util.js.map