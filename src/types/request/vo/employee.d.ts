export interface EmployeeLoginVO {
    // 用户 token
    token: string;
    // 用户信息
    userInfo: {
        // 用户 id
        id: number;
        // 用户名
        username: string;
        // 用户姓名
        name: string;
        // 用户手机号
        phone: string;
        // 用户性别
        sex: "1" | "2";
    };
}