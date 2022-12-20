import { Box, Typography } from "@mui/material";
import "./Footerr.css"

const Footerr = () => {
    return ( 
        <Box display="flex" component="footer"
        sx={{
            alignItems: "center",
            justifyContent:"center",
            marginTop:"20px"
        }}
        >
            <Typography variant="h6" component="p" 
                sx={{textAlign: "center", marginBottom:"10px"}}>
                <a className="link" href="https://github.com/AlexisRmnk/PF_React22" target="_blank" rel="noreferrer"> 
                    <span className="blocks">Alexis Romaniuk</span> - <span className="blocks" >Copyright 2022</span>
                </a>
            </Typography>
        </Box>
    )
}
export default Footerr;