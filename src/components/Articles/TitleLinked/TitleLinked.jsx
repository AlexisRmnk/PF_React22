import { Typography } from "@mui/material";

const TitleLinked = ({
    titlee, linkToUrl
}) => {
    return (
        <Typography variant="h5" component="h2" marginBottom={1}>
            <a 
            href={linkToUrl}
            target="_blank"
            >
                {titlee} 
            </a>
        </Typography>
    )
}

export default TitleLinked;