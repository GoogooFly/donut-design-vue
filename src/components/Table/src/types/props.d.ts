export interface IProps {
    pagination: {
        currentPage: number,
        pageSize: number,
        total: number,
        pageSizes: number[]
    };
    border?:boolean;
    stripe?:boolean;
    loading?: boolean;
    tableData: any[];
    columns: any[];
}
