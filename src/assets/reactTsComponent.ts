export const reactTsComponent = (
    name: string,
    stylesExt?: string,
    notStyled?: boolean
): string => `import React from 'react';
${
    !notStyled
        ? stylesExt
            ? "import './" + name + '.styles.' + stylesExt + "';"
            : 'import { ' + name + 'Styles } from ' + "'./" + name + ".styles';"
        : ''
}

interface I${name}Props {}

export const ${name}: React.FC<I${name}Props> = () => {
        return ()
};
`;
