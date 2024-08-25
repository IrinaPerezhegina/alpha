declare module '*.scss'{
    interface IClassNames{
        [className:string]:string
    }
    const classNames:IClassNames;
    export = classNames
}

declare module '*.png';
declare module '*.ipg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg'
 {

    const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
export default svg;
}

declare const __IS_DEV__:boolean;
declare const __API__:string;
type DeepPartial<T>=T extends object ?{
    [P in keyof T]?:DeepPartial<T[P]>;
}:T
