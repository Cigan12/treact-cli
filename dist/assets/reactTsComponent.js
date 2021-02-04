"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactTsComponent = void 0;
const reactTsComponent = (name) => `import React from 'react'

interface I${name}Props {}

export const ${name}: React.FC<I${name}Props> = () => {
        return ()
};
`;
exports.reactTsComponent = reactTsComponent;
//# sourceMappingURL=reactTsComponent.js.map