import { Box } from "@mui/material";
import { LOGO_IMG_URL } from "../../../lib/constants";
import "./Logo.css";

const Logo = () => {
    return (
        <a href="/">
            <Box 
            component="img"
            className="Logo" 
            src={LOGO_IMG_URL} 
            alt="Logo"
            sx={{width: "100%", height: "100%",
                minWidth: "100px"}}
        />
        </a>
    )
}

export default Logo;