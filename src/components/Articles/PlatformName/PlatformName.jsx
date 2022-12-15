import { Typography } from "@mui/material";

const getPName = (url) => {
    //obtiene el nombre de la plataforma segun su url
    let domain = (new URL(url));
    return domain = domain.hostname.replace('www.','');
    
}

const PlatformName = ({
    url
}) => {
    return (
        <Typography variant="body2">
            Fuente: { getPName( url ) }
        </Typography>

    )
}

export default PlatformName;