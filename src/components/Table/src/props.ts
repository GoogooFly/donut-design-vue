import type {BasicTableProps} from '/@/components/Table/src/types/table';

export const basicTableProps: BasicTableProps = {
    pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 20, 30, 40]
    },
    loading: false,
    datasource: [],
    columns: [],
    border: false,
    stripe: false,
};