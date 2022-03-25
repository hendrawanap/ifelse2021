import QuizIndex from "../general/pages/quizzes/QuizIndex";
import QuizDetails from "../general/pages/quizzes/QuizDetails";

const routes = [
    {
        path: '',
        component: QuizIndex,
        name: 'quiz-index'
    },
    {
        path: ':slug',
        component: QuizDetails,
        name: 'quiz-details'
    },
];

export default routes;
