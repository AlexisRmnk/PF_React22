const LANG = "es"
const API_KEY = "74ae2717fdb14ac0808595cc145a50f3";
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