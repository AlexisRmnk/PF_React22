import { Button, Container, Grid, IconButton, Input, InputBase, Paper, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      // <Grid container columnSpacing={1}>
      //   <Grid item xs={8}>

      //   </Grid>

      // </Grid>
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


    
  
      {/* <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar Noticias"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchTerm}
        onChange={(e) => {
          
          setSearchTerm(e.target.value)
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
      onClick={() => {
        onSearch(searchTerm);
      }}
      >
        <SearchIcon />
      </IconButton>

      <Button disabled={searchTerm.length < 3} >
        BUSCAR NOTICIAS
      </Button> */}

      </Container>

       
  );
}

export default Search;

{/* <Paper
       component="form"
       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: "30px", marginBottom: "10px" }}
     >
  
       <InputBase
         sx={{ ml: 1, flex: 1 }}
         placeholder="Buscar Noticias"
         inputProps={{ 'aria-label': 'search google maps' }}
         value={searchTerm}
         onChange={(e) => {
          setSearchTerm(e.target.value)
         }}
       />
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
       onClick={() => {
        onSearch(searchTerm);
       }}
       >
         <SearchIcon />
       </IconButton>

       </Paper> */}

        // <Stack className="Search">
        //     <TextField id="outlined-search" 
        //     label="Buscar" 
        //     variant="outlined" 
        //     type="search"
        //     value={searchTerm}
        //     onChange={
        //         (e) => {
        //             setSearchTerm(e.target.value)
        //         }
        //     }
        //     />

            

        //     <Button 
        //         variant="contained"
        //         size="medium"
        //         onClick={
        //             onSearch(searchTerm)
        //         }
        //     > 
        //         <SearchIcon fontSize="large" /> 
        //     </Button>
        // </Stack>
//     )
//  }

