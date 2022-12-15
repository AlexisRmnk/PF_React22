import { Typography } from "@mui/material";

const TitleLinked = () => {
    return (
        <Typography variant="h5" component="h2" marginBottom={1}>
            <a 
            href="https://www.google.com"
            target="_blank"
            >
                Titulo interesante de noticia TitleLinked.jsx 
            </a>
        </Typography>
    )
}

export default TitleLinked;