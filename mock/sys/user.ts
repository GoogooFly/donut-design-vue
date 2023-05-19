import type {MockMethod} from 'vite-plugin-mock';
import {resultSuccess, resultError} from '../utils';

export function createFakeUserList() {
    return [
        {
            userId: '100001',
            username: 'admin',
            realName: '超级管理员',
            avatar:
                'https://img2.baidu.com/it/u=871257820,3217841916&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=400',
            desc: 'manager',
            password: '123456',
            token: 'fakeToken1',
        }
    ]
}

export default [
    {
        url: "/api/login",
        method: "post",
        timeout: 500,
        response: ({body}) => {
            const {username, password} = body;
            const checkUser = createFakeUserList().find(
                itm => itm.username == username && itm.password == password
            )
            if(!checkUser) return resultError('Incorrect account or password！');
            const { userId, username: _username, token, realName, desc } = checkUser;
            return resultSuccess({userId, username: _username, token, realName, desc});
        }
    }
] as MockMethod[]