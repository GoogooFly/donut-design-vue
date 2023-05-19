export function resultSuccess<T = any>(result: T, message = "ok") {
    return {
        code: 0,
        type: 'success',
        message,
        result
    }
}
export function resultError<T = any>(message = "Request failed", result?: T){
    return {
        code: 1,
        type: "error",
        message,
        result
    }
}