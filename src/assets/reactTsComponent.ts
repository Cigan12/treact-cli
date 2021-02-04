export const reactTsComponent = (
    name: string
): string => `import React from 'react'

interface I${name}Props {}

export const ${name}: React.FC<I${name}Props> = () => {
        return ()
};
`;
