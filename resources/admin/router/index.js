import Vue from 'vue'
import Router from 'vue-router'
import Authenticator from "../store/Authenticator";
import Connection from "../../js/store/Connection";
import apiRoutes from "../../js/router/api";

// Containers
const TheContainer = () => import('../containers/TheContainer');

// Views
const Dashboard = () => import('../views/Dashboard');

// IF ELSE Generated:
const Berita = () => import('../views/pages/Berita');
const BeritaAdd = () => import('../views/pages/BeritaAdd');
const BeritaEdits = () => import('../views/pages/BeritaEdits');
const Pendataan = () => import('../views/pages/Pendataan');
const PendataanDetails = () => import('../views/pages/PendataanDetails');
const Perizinan = () => import('../views/pages/Perizinan');
const PerizinanDetails = () => import('../views/pages/PerizinanDetails');
const Presensi = () => import('../views/pages/Presensi');
const PresensiDetails = () => import('../views/pages/PresensiDetails');
const Group = () => import('../views/pages/Group');
const GroupEdit = () => import('../views/pages/GroupEdit');
const GroupAdd = () => import('../views/pages/GroupAdd');
const GroupDetails = () => import('../views/pages/GroupDetails');
const DataMahasiswa = () => import('../views/pages/DataMahasiswa');
const ProfileDetails = () => import('../views/pages/ProfileDetails');
const Penugasan = () => import('../views/pages/Penugasan');
const PenugasanAdd = () => import('../views/pages/PenugasanAdd');
const PenugasanDetails = ()=> import('../views/pages/PenugasanDetails');
const Quiz = () => import('../views/pages/Quiz');
const QuizAdd = () => import('../views/pages/QuizAdd');
const QuizDetails = () => import('../views/pages/QuizDetails');
const QuizQuestions = () => import('../views/pages/QuizQuestions');

const Colors = () => import('../views/theme/Colors')
const Typography = () => import('../views/theme/Typography')

const Charts = () => import('../views/charts/Charts')
const Widgets = () => import('../views/widgets/Widgets')

// Views - Components
const Cards = () => import('../views/base/Cards')
const Forms = () => import('../views/base/Forms')
const Switches = () => import('../views/base/Switches')
const Tables = () => import('../views/base/Tables')
const Tabs = () => import('../views/base/Tabs')
const Breadcrumbs = () => import('../views/base/Breadcrumbs')
const Carousels = () => import('../views/base/Carousels')
const Collapses = () => import('../views/base/Collapses')
const Jumbotrons = () => import('../views/base/Jumbotrons')
const ListGroups = () => import('../views/base/ListGroups')
const Navs = () => import('../views/base/Navs')
const Navbars = () => import('../views/base/Navbars')
const Paginations = () => import('../views/base/Paginations')
const Popovers = () => import('../views/base/Popovers')
const ProgressBars = () => import('../views/base/ProgressBars')
const Tooltips = () => import('../views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('../views/buttons/StandardButtons')
const ButtonGroups = () => import('../views/buttons/ButtonGroups')
const Dropdowns = () => import('../views/buttons/Dropdowns')
const BrandButtons = () => import('../views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('../views/icons/CoreUIIcons')
const Brands = () => import('../views/icons/Brands')
const Flags = () => import('../views/icons/Flags')

// Views - Notifications
const Alerts = () => import('../views/notifications/Alerts')
const Badges = () => import('../views/notifications/Badges')
const Modals = () => import('../views/notifications/Modals')

// Views - Pages
const Page404 = () => import('../views/pages/Page404')
const Page500 = () => import('../views/pages/Page500')
const Login = () => import('../views/pages/Login')
const Register = () => import('../views/pages/Register')

// Users
const Users = () => import('../views/users/Users')
const User = () => import('../views/users/User')

Vue.use(Router)

let router = new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});

initiate(router);

export default router;

function configRoutes () {
    return [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                    meta: {
                        auth: ['admin', 'qe', 'humas', 'companion'],
                    },
                },
                {
                    path: 'presensi',
                    name: 'Presensi',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin', 'qe'],
                    },
                    children: [
                        {
                            path: '',
                            component: Presensi
                        },
                        {
                            path: ':id',
                            component: PresensiDetails
                        }
                    ]
                },
                {
                    path: 'kemahasiswaan',
                    name: 'Kemahasiswaan',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin', 'companion'],
                    },
                    children: [
                        {
                            path: 'kelompok',
                            component: Group,
                        },
                        {
                            path: 'kelompok/edit/:id',
                            component: GroupEdit,
                        },
                        {
                            path: 'kelompok/add',
                            component: GroupAdd,
                        },
                        {
                            path: 'kelompok/:id',
                            component: GroupDetails,
                        },
                        {
                            path: 'data',
                            component: DataMahasiswa
                        },
                        {
                            path: 'data/:id',
                            meta: {
                                auth: ['qe']
                            },
                            component: ProfileDetails
                        }
                    ]
                },
                {
                    path: 'berita',
                    name: 'Berita',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin', 'humas'],
                    },
                    children: [
                        {
                            path: '',
                            component: Berita,
                        },
                        {
                            path: 'add',
                            name: 'BeritaAdd',
                            component: BeritaAdd,
                        },
                        {
                            path: 'edit/:id',
                            name: 'BeritaEdit',
                            component: BeritaEdits,
                        },
                    ]
                },
                {
                    path: 'pendataan',
                    name: 'Pendataan',
                    meta: {
                        auth: ['admin', 'qe'],
                    },
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            component: Pendataan,
                        },
                        {
                            path: ':id',
                            name: 'PendataanDetails',
                            component: PendataanDetails,
                        },
                    ]
                },
                {
                    path: 'perizinan',
                    name: 'Perizinan',
                    meta: {
                        auth: ['admin', 'qe'],
                    },
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '',
                            component: Perizinan,
                        },
                        {
                            path: ':id',
                            name: 'PerizinanDetails',
                            component: PerizinanDetails,
                        },
                    ]
                },
                {
                    path: 'penugasan',
                    name: 'Penugasan',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin', 'qe'],
                    },
                    children: [
                        {
                            path: '',
                            component: Penugasan,
                        },
                        {
                            path: 'add',
                            component: PenugasanAdd,
                        },
                        {
                            path: ':id',
                            component: PenugasanDetails,
                        }
                    ]
                },
                {
                    path: 'quiz',
                    name: 'Quiz',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin', 'qe'],
                    },
                    children: [
                        {
                            path: '',
                            component: Quiz,
                        },
                        {
                            path: 'add',
                            name: 'QuizAdd',
                            component: QuizAdd,
                        },
                        {
                            path: 'questions',
                            name: 'QuizQuestions',
                            component: QuizQuestions,
                        },
                        {
                            path: ':id',
                            name: 'QuizDetails',
                            component: QuizDetails,
                        },
                    ]
                },
                {
                    path: 'theme',
                    redirect: '/theme/colors',
                    name: 'Theme',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin'],
                    },
                    children: [
                        {
                            path: 'colors',
                            name: 'Colors',
                            component: Colors
                        },
                        {
                            path: 'typography',
                            name: 'Typography',
                            component: Typography
                        }
                    ]
                },
                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
                },
                {
                    path: 'users',
                    meta: {
                        label: 'Users',
                        ...{
                            auth: ['admin'],
                        },
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            name: 'Users',
                            component: Users
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'User Details'
                            },
                            name: 'User',
                            component: User
                        }
                    ]
                },
                {
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    meta: {
                        auth: ['admin'],
                    },
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'cards',
                            name: 'Cards',
                            component: Cards
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs
                        },
                        {
                            path: 'breadcrumbs',
                            name: 'Breadcrumbs',
                            component: Breadcrumbs
                        },
                        {
                            path: 'carousels',
                            name: 'Carousels',
                            component: Carousels
                        },
                        {
                            path: 'collapses',
                            name: 'Collapses',
                            component: Collapses
                        },
                        {
                            path: 'jumbotrons',
                            name: 'Jumbotrons',
                            component: Jumbotrons
                        },
                        {
                            path: 'list-groups',
                            name: 'List Groups',
                            component: ListGroups
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars
                        },
                        {
                            path: 'paginations',
                            name: 'Paginations',
                            component: Paginations
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers
                        },
                        {
                            path: 'progress-bars',
                            name: 'Progress Bars',
                            component: ProgressBars
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin'],
                    },
                    children: [
                        {
                            path: 'standard-buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons
                        },
                        {
                            path: 'button-groups',
                            name: 'Button Groups',
                            component: ButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons
                        }
                    ]
                },
                {
                    path: 'icons',
                    redirect: '/icons/coreui-icons',
                    name: 'CoreUI Icons',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: 'coreui-icons',
                            name: 'Icons library',
                            component: CoreUIIcons
                        },
                        {
                            path: 'brands',
                            name: 'Brands',
                            component: Brands
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    meta: {
                        auth: ['admin'],
                    },
                    children: [
                        {
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts
                        },
                        {
                            path: 'badges',
                            name: 'Badges',
                            component: Badges
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals
                        }
                    ]
                }
            ]
        },
        // {
        //     path: '/pages',
        //     redirect: '/pages/404',
        //     name: 'Pages',
        //     component: {
        //         render (c) { return c('router-view') }
        //     },
        //     children: [
        //         {
        //             path: '404',
        //             name: 'Page404',
        //             component: Page404
        //         },
        //         {
        //             path: '500',
        //             name: 'Page500',
        //             component: Page500
        //         },
        //         {
        //             path: 'register',
        //             name: 'Register',
        //             component: Register
        //         },
        //     ]
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
    ]
}

function initiate(router){

    router.beforeEach(async (to, from, next)=>{
        let auth = to.matched.filter(r=>r.meta.auth);
        let trustedAuth = [];
        if(auth){
            auth = auth.map(a=>a.meta.auth);

            for(let i in auth){
                trustedAuth.push(...auth[i]);
            }
        }
        let isLoggedIn = await Connection.get(apiRoutes.loggedIn);

        if(isLoggedIn.data.error)
            Authenticator.logout();


        let userRole = Authenticator.role();

        if(userRole === 'student'){
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
            return;
        }
        if(!trustedAuth.length || trustedAuth.includes(userRole))
            next();

        else if(!userRole || userRole === 'student')
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        else
            next({
                path: '/'
            })
    });
}
