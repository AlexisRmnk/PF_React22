import { Box, Typography } from "@mui/material";
import "./Footerr.css"

const Footerr = () => {
    return ( // no olvidar el copyright!
        <Box display="flex" component="footer"
        sx={{
            alignItems: "center",
            justifyContent:"center",
            marginTop:"20px"
        }}
        >
            <Typography variant="h6" component="p" sx={{textAlign: "center"}}>
                <span>Alexis Romaniuk</span> - <span>Copyright 2022</span>
            </Typography>
        </Box>
    )
}

export default Footerr;