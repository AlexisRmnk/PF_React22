// import "./SearchPage.css"

import { Container } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Search from "../components/Search/Search";
import Loading from "../components/Loading/Loading"
import ArticleList from "../components/Articles/Articles";
import Pagination from "../components/Pagination/Pagination";

const SearchPage = () => {
    return (
        <Container maxWidth='md' >
            <Header/>
            <main>
                <Search/>
                <Loading/>
                <ArticleList/>
                <Pagination/>
            </main>
            <Footer/>


        </Container>

        

    )
}

export default SearchPage;