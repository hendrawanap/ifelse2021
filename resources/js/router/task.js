import TaskIndex from "../general/pages/tasks/TaskIndex";
import TaskDetails from "../general/pages/tasks/TaskDetails";

const routes = [
    {
        path: '',
        component: TaskIndex,
    },
    {
        path: ':id',
        component: TaskDetails,
    },
];

export default routes;
