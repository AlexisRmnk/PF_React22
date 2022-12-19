import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <Container
      component="form"
      sx={{ padding: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", marginTop: "50px", height: "50px" , marginBottom: "40px" ,}}>

        <Grid container columnSpacing={1} sx={{display: 'flex', alignItems: 'center',}}>

          <Grid item xs={6} sm={7} md={9}>
            <TextField label="Buscar" variant="outlined" fullWidth 
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            />
          </Grid>
          <Grid item xs={6} sm={5} md={3}>
            <Button disabled={searchTerm.length < 3}  
            sx={{ padding: '10px', margin: "0", width: "100%" }}
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