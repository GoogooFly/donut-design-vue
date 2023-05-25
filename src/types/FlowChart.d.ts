export type TPlugins =
    "Snapline"
    | "History"
    | "Transform"
    | "Clipboard"
    | "Keyboard"
    | "Selection"
    | "Scroller"
    | "Export";

export interface IConfig {
    containers: HTMLElement;
    width?: number;
    height?: number;
    scaling?: {
        min?: number;
        max?: number;
    };
    plugins?: TPlugins[];
}
