import { Box } from "@mui/material";

const Image = () => {
    return (
        <Box sx={{
            // width: "100%",
            // maxHeight: "150px",
            height: "150px",
            width: "150px",
            maxWidth: "100%",
            objectFit: "cover",  
            // maxHeight: "300px",
            // margin:"0 auto ",
            
           margin: "0 auto",
            display:"block"

            
        }}
            component="img" 
            alt="Imagen_articulo" 
            src="https://source.unsplash.com/random"

        />

    )
}

export default Image;