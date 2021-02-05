export const rnStylesFile = (
    name: string
): string => `import { StyleSheet } from 'react-native';

export const ${name}Styles = StyleSheet.create({})
`;
