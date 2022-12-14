// import "./SearchPage.css"

import { Container } from "@mui/material";
import Headerr from "../components/header/Headerr";
import Footerr from "../components/footer/Footerr";
import Search from "../components/Search/Search";
import Loading from "../components/Loading/Loading"
import ArticleList from "../components/Articles/Articles";
import Paginationn from "../components/Pagination/Paginationn";

const SearchPage = () => {
    return (
        <Container maxWidth='md' >
            <Headerr/>
            <main>
                <Search/>
                <Loading/>
                <ArticleList/>
                <Paginationn/>
            </main>
            <Footerr/>


        </Container>

        

    )
}

export default SearchPage;