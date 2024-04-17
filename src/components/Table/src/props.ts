export const basicProps = {
    pagination: ()=> ({
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 20, 30, 40]
    }),
        loading: false,
    tableData: ()=> [],
    columns: ()=> [],
    border: false,
    stripe: false,

};