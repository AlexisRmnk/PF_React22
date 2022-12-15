import { Pagination } from "@mui/material";

const Paginationn = ({
    pageAmount,
    onChange
}) => {
    const pageChange = (_event, page) => {
        return(
            onChange(page)
        )
    }

    return (
        <Pagination count={pageAmount}
            shape="rounded"
            color="primary" showFirstButton showLastButton 
            onChange={pageChange}
            />
    )
}

export default Paginationn;