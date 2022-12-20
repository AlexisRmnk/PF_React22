import { useRouteError } from "react-router-dom";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { ERROR_IMG_URL } from "../lib/constants";
import Headerr from "../components/header/Headerr";
import Footerr from "../components/footer/Footerr";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
  <Container id="error-page" sx={{minWidth: "300px", width:"100%"}} >
    <Headerr/>
    <Paper elevation={3}
      sx={{marginTop: "50px", minWidth: "300px",
          marginBottom: "100px", padding:"10px"}} >
      <Grid container 
        sx={{display: "flex", alignItems: "center"}}>
        <Grid item xs={12} sm={12} md={6} minWidth="200px">
          <Typography variant="h1" component="h1" color="error"
            marginBottom="20px" >¡Error!</Typography>
          <Typography variant="body1" component="p">Perdon, ocurrio un error inesperado.</Typography>
          <Typography variant="h4" component="h2" 
           sx={{marginTop: "10px"}} >Detalle:</Typography>
          <Typography variant="body2" component="h2">
            <ul>
              { 
                error.error.message && (
                  <li>
                    Mensaje de error: <i> {error.error.message} </i>
                  </li>
                )
              }
              {
                error.status && (
                  <li>
                    Codigo de estado: <i> {error.status}</i>
                  </li>
                )
              }
              {
                error.statusText && (
                  <li>
                    Descripcion de codigo de estado: <i> {error.statusText} </i>
                  </li>
                )
              }
              
            </ul>
          </Typography>
        </Grid>  
        <Grid item xs={12} sm={12} md={6}>
            <Box component="img" src={ERROR_IMG_URL} alt="error" 
            maxWidth="300px" width="100%" minWidth="200px"
            />
        </Grid>
      </Grid>  
    </Paper>
    <Footerr/>
  </Container>
  )
}