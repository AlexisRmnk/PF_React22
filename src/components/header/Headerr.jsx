import Logo from "./Logo/Logo";
import { Grid, Typography } from "@mui/material";

const Headerr = () => {
    return (
        <Grid container component="header"> 
            <Grid item xs={12} sm={3} sx={{
                display: "flex",
                padding: "10px",
                justifyContent: "center"
            }}>
                <Logo />
            </Grid>
            <Grid item xs={12}  sm={9} sx={{
                display: "flex",
                flexDirection: "column" ,
                paddingRight: "8%",
                justifyContent: "center",
                alignItems: "flex-end",
                alignContent:"center",
                minWidth:"300px"
            }}>
                <Typography variant="h2" 
                component="h1"
                fontFamily={"serif"}
                > NESPACE </Typography> 
                <Typography variant="subtitle1" 
                component="h2" marginTop="-10px"
                paddingLeft="10px"
                paddingRight="10px"
                > Noticias En Español </Typography> 
            </Grid> 
        </Grid>
    )
}

export default Headerr;