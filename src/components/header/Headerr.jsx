import Logo from "./Logo/Logo";
import { Typography } from "@mui/material";

const Headerr = () => {
    return (
        <header> 
            <Logo/>

            <Typography variant="h3" component="h1"> Noticias en español </Typography> 
        </header>
    )
}

export default Headerr;