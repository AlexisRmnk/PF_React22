import { Button, IconButton, InputBase, Paper, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Paper
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

       </Paper>
  );
}




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

export default Search;