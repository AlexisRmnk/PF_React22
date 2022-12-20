import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <Container
      component="div"
      sx={{ padding: '2px 4px', display: 'flex', alignItems: 'center',
       width: "100%", marginTop: "50px", height: "50px", 
       marginBottom: "40px",}}>

        <Grid container columnSpacing={1} sx={{display: 'flex', alignItems: 'center', }}>

          <Grid item xs={6} sm={7} md={9}>
            <TextField label="Buscar" error={searchTerm.length > 0 && searchTerm.length < 3}
            helperText={(searchTerm.length > 0 && searchTerm.length < 3) ? "Tip: Deben ingresarse como minimo 3 caracteres para poder realizar la busqueda." : ""}
            variant="outlined" fullWidth 
            sx={{backgroundColor:"rgba(255, 255, 255, 0.25)",
            ":hover":{backgroundColor: "rgba(255, 255, 255, 0.5)", 
                        transition: "1s" },
            }}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            onKeyDown={(e) => {
              if((e.key === "Enter") && (searchTerm.length >= 3)){
                onSearch(searchTerm);
              }
            }}
            />
          </Grid>
          <Grid item xs={6} sm={5} md={3}>
            <Button disabled={searchTerm.length < 3}
            sx={{ padding: '0', margin: "0", width: "100%",
            height: "56px",
            backgroundColor:"rgba(255, 255, 255, 0.4)", }}
            onClick={() => {
              onSearch(searchTerm);
            }} >
              BUSCAR NOTICIAS
            </Button>
          </Grid>
        </Grid>
      </Container>
  );
}
export default Search;