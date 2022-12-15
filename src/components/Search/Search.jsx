import { Button, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Stack className="Search">
            <TextField id="outlined-search" 
            label="Buscar" 
            variant="outlined" 
            type="search"
            value={searchTerm}
            onChange={
                (e) => {
                    setSearchTerm(e.target.value)
                }
            }
            />

            

            <Button 
                variant="contained"
                size="medium"
                onClick={
                    onSearch(searchTerm)
                }
            > 
                <SearchIcon fontSize="large" /> 
            </Button>
        </Stack>
    )
}

export default Search;