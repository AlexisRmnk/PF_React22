const LANG = "es"
const API_KEY = "a34e30cc351e4a9bac68203680420f53";
const NEWS_API = `https://newsapi.org/v2/`;
export const PAGE_SIZE = 10;

export const getArticles = async (searchTerm, currentPage) => {
    try {
        const res = await fetch(`${NEWS_API}/everything?q=${searchTerm}&apikey=${API_KEY}&page=${currentPage}&pageSize=${PAGE_SIZE}&language=${LANG}`);
        const articles = await res.json();

        return articles;
    } catch (error) {
        console.log(error);
    }
}