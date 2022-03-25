import PendataanIndex from "../general/pages/pendataan/PendataanIndex";
import PendataanDetails from "../general/pages/pendataan/PendataanDetails";

const routes = [
    {
        path: '',
        component: PendataanIndex,
    },
    {
        path: ':slug',
        component: PendataanDetails,
    },
];

export default routes;
