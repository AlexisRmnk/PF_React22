// import "./SearchPage.css"

import { Container } from "@mui/material";
import Headerr from "../components/header/Headerr";
import Footerr from "../components/footer/Footerr";
import Search from "../components/Search/Search";
import Loading from "../components/Loading/Loading"
import ArticleList from "../components/Articles/Articles";
import Paginationn from "../components/Pagination/Paginationn";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles, PAGE_SIZE } from "../services/getArticles";

const SearchPage = () => {

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    


    const searchNews = async () => {
        setIsLoading(true);
        const {articles: news, totalResults} = await getArticles(searchParams.get("query"), currentPage);
        setNews(news);
        setIsLoading(false);
        setTotalPages( Math.ceil( (parseInt(totalResults)) / PAGE_SIZE ) );
    }

    useEffect( () => {
        if (searchParams.get("query")) {
            searchNews()
        }
    }, [searchParams, currentPage])

    const onSearch = (searchTerm) => {
        setSearchParams( {query: searchTerm});
    }

    const onPageChange = (page) => {  
        setCurrentPage(page);
        onSearch( searchParams.get('query'));
        console.log("estoy en la pagina ", page);
    }


    return (
        <Container maxWidth='md' >
            <Headerr/>
            <main>
                <Search />
                <Loading/>
                <ArticleList/>
                <Paginationn/>
            </main>
            <Footerr/>


        </Container>

        

    )
}

export default SearchPage;