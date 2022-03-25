const routes = {
    login: '/api/login',

    quiz: '/api/admin/quiz/',
    quizAdd: '/api/admin/quiz/add',
    quizQuestions: '/api/admin/quiz/questions',
    quizQuestionAdd: '/api/admin/quiz/questions/add',
    quizQuestionRemove: '/api/admin/quiz/questions/remove',
    quizTogglePublish: '/api/admin/quiz/toggle/',

    berita: '/api/admin/berita/',
    beritaEdits: '/api/admin/berita/edit/',
    beritaUbah: '/api/admin/berita/ubah/',
    beritaAdd: '/api/admin/berita/add/',
    beritaStatus: '/api/admin/berita/status',

    pendataan: '/api/admin/pendataan/',
    perizinan: '/api/admin/perizinan/',

    group: '/api/admin/groups/',
    groupEdit: '/api/admin/groups/edit/',
    groupAdd: '/api/admin/groups/add/',
    groupCompanions: '/api/admin/groups/companions/',
    groupStudents: '/api/admin/groups/students/',

    students: '/api/admin/students/',
    studentAdd: '/api/admin/students/add',

    attendances: '/api/admin/attendances/',
    attendanceAdd: '/api/admin/attendances/add',
    attendancesStatus: '/api/admin/attendances/status',

    tasks: '/api/admin/tasks/',
    taskAdd: '/api/admin/tasks/add',
    taskTogglePublish: '/api/admin/tasks/publish/',

    agenda: '/api/admin/agenda'
};

export default routes;
