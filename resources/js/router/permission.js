import PermissionIndex from "../general/pages/permissions/PermissionIndex";
import PermissionDetails from "../general/pages/permissions/PermissionDetails";

const routes = [
    {
        path: '',
        component: PermissionIndex,
    },
    {
        path: ':slug',
        component: PermissionDetails,
    },
];

export default routes;
