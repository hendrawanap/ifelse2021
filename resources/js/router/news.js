import NewsIndex from "../general/pages/news/NewsIndex";
import NewsDetails from "../general/pages/news/NewsDetails";

const routes = [
    {
        path: '', // /berita
        component: NewsIndex,
    },
    {
        path: ':slug', // /berita/apa-itu-ifelse
        component: NewsDetails,
    },
];

export default routes;
