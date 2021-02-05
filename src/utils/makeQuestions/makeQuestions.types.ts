export interface IFindComponentStructureReturn {
    items: Array<string>;
    pathToComponentsFolder: string;
}

export interface IQuestion {
    type: string;
    name: string;
    message: string;
    choices?: Array<
        | string
        | {
              name: string;
              value: string;
          }
    >;
}

export enum EPreprocessors {
    NONE = 'no',
    CSS = 'css',
    SCSS = 'scss',
    LESS = 'less',
    STYLUS = 'styl',
    RN = 'rn',
}

export interface ICreateComponentQuestionProps {
    name?: string;
    rn?: boolean;
    style?: EPreprocessors;
}
