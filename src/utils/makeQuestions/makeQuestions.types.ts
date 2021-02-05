export interface IFindComponentStructureReturn {
    items: Array<string>;
    pathToComponentsFolder: string;
}

export enum EPreprocessors {
    NONE = 'None',
    CSS = 'CSS',
    SCSS = 'SASS/SCSS',
    LESS = 'Less',
    STYLUS = 'Stylus',
    RN = 'rn',
}
