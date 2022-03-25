let apiRoutes = {
    login: '/api/login',

    quiz     : '/api/quiz',
    quizBegin     : '/api/quiz/start',
    quizTime : '/api/quiz/time',
    quizSubmit: '/api/quiz/submit/',
    quizQuestions: '/api/quiz/questions/',
    quizFinish: '/api/quiz/finish/',

    loggedIn: '/api/loggedIn',
    hasAttendance: '/api/attendances',
    attend: '/api/attendances/submit?code=',
    attendQR: '/presensi?code=',

    profile: '/api/profile',
    profileContact: '/api/profile/contact',
    profileAgendas: '/api/profile/agendas',
    profilePicture: '/api/profile/picture',

    tasks: '/api/tasks/',
    changePassword: '/api/user/password',

    pendataan: '/api/pendataan/',
    perizinan: '/api/perizinan/',

    news: '/api/news/'
};

export default apiRoutes;
