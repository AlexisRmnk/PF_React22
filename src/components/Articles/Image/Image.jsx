import { Box } from "@mui/material";

const Image = ({urlImage}) => {
    return (
        <Box sx={{
            // width: "100%",
            // maxHeight: "150px",
            height: "225px",
            width: "200px",
            maxHeight: "100%",
            maxWidth: "100%",


            objectFit: "cover",  
            // maxHeight: "300px",
            // margin:"0 auto ",
            
            margin: "0 auto",
            display:"block"

            
        }}
            component="img" 
            alt="Imagen_articulo" 
            src={urlImage}

        />

    )
}

export default Image;