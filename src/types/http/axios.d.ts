export type ResultType = "success" | "error" | "warning";
export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export type SuccessMessageMode = ErrorMessageMode;

export interface Result<T = any> {
    code: number;
    type: ResultType,
    data: T;
    message: string;
}

export interface RequestOptions {
    errorMessageMode?: ErrorMessageMode,
    successMessageMode?: SuccessMessageMode,
    withToken?: boolean,
}