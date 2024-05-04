export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 500,
    TIMEOUT = 401,
    TYPE = 'success'
}

export enum RequestMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum ContentTypeEnum {
    FORM_DATA = 'multipart/form-data',
    FORM_URLENCODED = 'application/x-www-form-urlencoded',
    JSON = 'application/json',
    TEXT = 'text/plain'
}