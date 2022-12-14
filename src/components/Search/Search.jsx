import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <section className="Search">
            <TextField id="outlined-search" label="Buscar" variant="outlined" type="search"/>

            

            <Button 
                variant="contained"
                size="medium"
                onClick={console.log("click boton BUSCAR capturado")}
            > 
                <SearchIcon fontSize="large" /> 
            </Button>
        </section>
    )
}

export default Search;