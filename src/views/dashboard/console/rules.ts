import type {FormItemRule, FormRules} from 'naive-ui';

export const formModalRules: FormRules = {
    name: {required: true, message: '请输入姓名', trigger: 'blur'},
    username: {required: true, message: '请输入账号', trigger: 'blur'},
    phone: {required: true, message: '请输入手机号', trigger: 'blur', validator: validatePhone},
    idNumber: {required: true, trigger: 'blur', validator: validateIdNumber},
    sex: {required: true, message: '请选择性别', trigger: 'blur'},
    status: {required: true, message: '请选择状态', trigger: 'blur', validator: validateStatus}
};

function validatePhone(rule: FormItemRule, value: string): boolean | Error {
    const reg = /^1[3-9]\d{9}$/;
    if (!value) return new Error('请输入手机号');
    if (!reg.test(value)) return new Error('请输入正确的手机号');
}

function validateIdNumber(rule: FormItemRule, value: string): boolean | Error{
    const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (!value) return new Error('请输入身份证');
    if (!reg.test(value)) return new Error('请输入正确的身份证');
}

function validateStatus(rule: FormItemRule, value: number): boolean {
    return value === 0 || value === 1;
}

function validatePassword(rule: FormItemRule, value: string): boolean | Error{
    const lengthReg = /^[a-zA-Z0-9]{6,20}$/;
    if (!value) return new Error("请输入密码");
    else if (!lengthReg.test(value)) return new Error("密码长度为6-20位");
    else return true;
}

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean | Error {
    const lengthReg = /^[a-zA-Z0-9]{6,20}$/;
    if (!value) return new Error("请输入确认密码");
    else if (!lengthReg.test(value)) return new Error("确认密码长度为6-20位");
    return true;
}