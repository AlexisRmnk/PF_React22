import { CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <CircularProgress size={100} disableShrink
        color="primary" 
        sx={{
            display:"block", margin:"0 auto",
        }}/>
    )
       
}

export default Loading;