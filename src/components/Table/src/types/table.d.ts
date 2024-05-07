import type {Type} from 'vxe-table';
import type {RoleEnum} from '/@/enums/roleEnum';

export type BasicColumnTypeProps = Type | undefined;

export interface BasicTableProps<T = any> {
    // 是否显示斑马纹
    stripe?: boolean;
    // 是否显示边框
    border?: boolean;
    // 是否显示加载中
    loading?: boolean;
    // 表格数据
    datasource: any[];
    // 表格列配置
    columns: BasicColumnProps[];
    // 分页配置
    pagination?: PaginationProps;
    // 是否自适应高度
    canResize?: boolean;
}

export interface BasicColumnProps {
    // 列标题
    title?: string;
    // 列字段
    field: string;
    slots: any[];
    // 列类型
    type: BasicColumnTypeProps;
    // 是否固定表头
    fixed?: 'left' | 'right';
    // 是否超出省略
    showOverflow?: boolean;
    // 列对齐方式
    align?: 'left' | 'center' | 'right';
    // 列宽度
    width?: string | number;
    // 根据权限判断是否显示
    auth?: RoleEnum | RoleEnum[] | string | string[];
    // 是否展示
    ifShow?: boolean;
}

export interface PaginationProps {
    currentPage: number,
    pageSize: number,
    total: number,
    pageSizes: number[]
}