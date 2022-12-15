import { Pagination } from "@mui/material";

const Paginationn = ({
    pageAmount,
    onChange2
}) => {
    const pageChange = (_event, pageFromOnChange) => {
        return(
            onChange2(pageFromOnChange)
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