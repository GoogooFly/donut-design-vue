import type {ColumnsType} from '/@/types/Table';

export const columns: ColumnsType = [
    {type: "checkbox", width: 60, align: "center", showOverflow: true},
    {title: "姓名", field: "name", align: "center", width: 80, showOverflow: true},
    {title: "账号", field: "username", align: "center", width: 150, showOverflow: true},
    {title: "手机号码", field: "phone", align: "center", width: 150, showOverflow: true},
    {title: "性别", field: "sex", align: "center", width: 80, showOverflow: true, slots: {default: "sex"}},
    {title: "身份证号", field: "idNumber", align: "center", width: 200, showOverflow: true},
    {title: "状态", field: "status", align: "center", width: 80, showOverflow: true, slots: {default: "status"}},
    {title: "修改人", field: "updateUser", align: "center", showOverflow: true, width: 100},
    {title: "修改时间", field: "updateTime", align: "center", showOverflow: true, width: 150, slots: {default: "updateTime"}},
    {title: "创建人", field: "createUser", align: "center", showOverflow: true, width: 100},
    {title: "创建时间", field: "createTime", align: "center", showOverflow: true, width: 150, slots: {default: "createTime"}},
    {title: "操作", align: "center", width: 300, slots: {default: "action"}, fixed: "right"},
];