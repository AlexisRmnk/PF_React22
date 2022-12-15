import { Typography } from "@mui/material";

const TitleLinked = ({
    titlee
}) => {
    return (
        <Typography variant="h5" component="h2" marginBottom={1}>
            <a 
            href="https://www.google.com"
            target="_blank"
            >
                {titlee} 
            </a>
        </Typography>
    )
}

export default TitleLinked;