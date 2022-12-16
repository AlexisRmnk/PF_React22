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
import InfoText from "../components/InfoText/InfoText";

const SearchPage = () => {

    const [news, setNews] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResultss, setTotalResultss] = useState(0);
    const [currentPageNewsNumber, setCurrentPageNewsNumber] = useState(0);


    useEffect( () => {
        if (searchParams.get("query")) {
            searchNews();
        }
    }, [searchParams, currentPage] )

    const calculateCurrentPageNewsNumber = (currentPage2, totalPages2, totalResults2) => {
        // if (currentPage2 === totalPages2 ) {
        //     const aux = totalResults2 % PAGE_SIZE
        //     if (aux === 0){
        //         setCurrentPageNewsNumber(10)
        //     } else {
        //         setCurrentPageNewsNumber(aux)
        //     }
        // } else {
        //     setCurrentPageNewsNumber(10)
        // }

        if (currentPage2 === totalPages2 ) {
            const aux = totalResults2 % PAGE_SIZE
            if (aux !== 0){
                setCurrentPageNewsNumber(aux)
            }
        } else {
            setCurrentPageNewsNumber(10)
        }

        // const aux = totalResults2 % PAGE_SIZE
        // ((currentPage2 === totalPages2 ) && (aux !== 0)) ? setCurrentPageNewsNumber(aux) : setCurrentPageNewsNumber(10)


    }

    const searchNews = async () => {
        setIsLoading(true);
        const {articles: news, totalResults} = await getArticles( searchParams.get("query"), currentPage);
        setNews(news);
        
        setTotalResultss(parseInt(totalResults));        
        
        const totalPages2 = Math.ceil( (parseInt(totalResults)) / PAGE_SIZE )
        setTotalPages( totalPages2 );
        calculateCurrentPageNewsNumber(currentPage , totalPages2 , totalResults );
        setIsLoading(false);
    }

//nota: aca llega   e.target.value
    const onSearch = (searchTerm2) => {
        setSearchParams( {query: searchTerm2});
    } //este es el momento en que se agrega a la barra de direccion del navegador!

    const onPageChange = (currentPage2) => {  
        setCurrentPage(currentPage2);
        onSearch( searchParams.get('query') );
        console.log("estoy en la pagina ", currentPage2);
    }


    return (
        <Container maxWidth='lg' >
            <Headerr/>
            <main>
                <Search onSearch={onSearch}/>
                { isLoading && <Loading />}
                { news && <InfoText currentPageNewsNumber={currentPageNewsNumber}
                                    searchTerm={searchParams.get('query')} 
                                    totalResNum={totalResultss} /> }
                { news && <ArticleList news={news}/>}
                { news && <Paginationn pageAmount={totalPages} onChange2={onPageChange}/> } 
                
            </main>
            <Footerr/>


        </Container>

        

    )
}

export default SearchPage;