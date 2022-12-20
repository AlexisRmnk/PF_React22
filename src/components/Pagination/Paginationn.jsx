import { Box, Pagination } from "@mui/material";

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
        <Box display={"flex"} 
            sx={{
                alignItems: "center",
                justifyContent:"center",
                marginTop:"10px",
            }} >
            <Pagination count={pageAmount}
            onChange={pageChange}
            shape="rounded"
            color="primary" showFirstButton showLastButton 
            sx={{backgroundColor: "rgba(255, 255, 255, 0.25)"}}
            />
        </Box>
    )
}
export default Paginationn;