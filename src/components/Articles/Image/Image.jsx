import { Box } from "@mui/material";
import { DEFAULT_NEWS_IMG_URL as DEFAULT_URL } from "../../../lib/constants";

const checkImg = (imgUrl) => ((imgUrl === null) ? DEFAULT_URL : imgUrl);

const Image = ({imageUrl, titlee}) => {
    return (
        <Box sx={{
            height: "225px",
            width: "200px",
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",  
            margin: "0 auto",
            display:"block"
        }}
            component="img" 
            alt={ titlee } 
            src={ checkImg(imageUrl) }
        />
    )
}

export default Image;