"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactTsComponent = void 0;
const reactTsComponent = (name, stylesExt, notStyled) => `import React from 'react';
${!notStyled
    ? stylesExt
        ? "import './" + name + '.styles.' + stylesExt + "';"
        : 'import { ' +
            name +
            'Styles } from ' +
            "'./" +
            name +
            ".styles.ts';"
    : ''}

interface I${name}Props {}

export const ${name}: React.FC<I${name}Props> = () => {
        return ()
};
`;
exports.reactTsComponent = reactTsComponent;
//# sourceMappingURL=reactTsComponent.js.map