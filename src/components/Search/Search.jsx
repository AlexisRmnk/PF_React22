import { Button } from "@mui/material";

const Search = () => {
    return (
        <section className="Search">
            <input type="text" />
            <Button 
            variant="contained"
            size="large"
            onClick={console.log("click boton BUSCAR capturado")}
            > BUSCAR </Button>
        </section>
    )
}

export default Search;