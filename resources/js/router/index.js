/**
 *
 * each route includes path and the component itself {path, component, children (if any)}
 * import the component using basic javascript import manually at the top of this file
 *
 * ROUTING RULES:
 *
 * use * e.g. path: 'user-*' if you want to match anything started with prefixes i. e. 'user-'
 *
 * for nested routes please visit: https://router.vuejs.org/guide/essentials/nested-routes.html
 *
 */
import VueRouter from 'vue-router';
import Page from '../general/components/Page.vue';
import PageNotFound from "../general/pages/404.vue";
import Faq from "../general/pages/Faq";
import Login from "../general/pages/Login";
import Landing from "../general/pages/Landing";
import Failed from "../general/pages/Failed-IFELSE";
import Profile from "../general/pages/Profile.vue";
import Attendance from "../general/pages/Attendance";
import Logout from "../general/pages/Logout";
import Empty from "../general/Empty";

// Sub routes

import taskRoutes from './task';
import newsRoutes from './news';
import permissionRoutes from './permission';
import pendataanRoutes from './pendataan';
import quizRoutes from './quiz';

// Store

import apiRoutes from "./api";
import Auth from "../store/Authenticator";
import Connection from "../store/Connection";
import MetaData from "../store/MetaData";

const routes = [
    {
        path: '/',
        component: Landing,
        name: 'landing',
		meta: {
            ...{
                title: 'IF ELSE FILKOM UB 2021',
                'og:title': 'IF ELSE FILKOM UB 2021',
            }
        }
    },
    {
        path: '/failed',
        component: Failed,
        name: 'failed',
        meta: {
            ...{
                title: 'IF ELSE FILKOM UB 2021',
                'og:title': 'IF ELSE FILKOM UB 2021',
            }
        }
    },
    {
        path: '/presensi',
        name: 'Presensi',
        component: Attendance,
        meta: {
            requiresAuth: true,
            ...{
                title: 'Presensi | IF ELSE 2021',
                'og:title': 'Login untuk Melanjutkan ke Presensi',
            }
        }
    },
    {
        path: '/home',
        name: 'page',
        component: Page,
		meta: {
            ...{
                title: 'Home | IF ELSE 2021',
                'og:title': 'Home | IF ELSE 2021',
            }
        }
    },
    {
        path: '/faq',
        component: Faq,

        meta: {
            title: 'Frequently Asked Questions | IF ELSE 2021',
            'og:title': 'Login untuk Melanjutkan ke Profil',
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true,

            title: 'Login | IF ELSE 2021',
            'og:title': 'Login untuk Melanjutkan ke Profil',
        }
    },
    {
        path: '/profile',
        component: Profile,
        name: 'profile',
        meta: {
            requiresAuth: true,
            title: 'Profile | IF ELSE 2021',
            'og:title': 'Login untuk Melanjutkan ke Profil',
        }
    },
    {
        path: '/berita',
        component: Empty,
        children: newsRoutes,
        meta: {
            title: 'Berita | IF ELSE 2021',
            'og:title': 'Berita Terbaru IF ELSE 2021',
        }
    },
    {
        path: '/penugasan',
        component: Empty,
        children: taskRoutes,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/quiz',
        component: Empty,
        children: quizRoutes,
        meta: {
            requiresAuth: true,
            ...{
                title: 'Quiz | IF ELSE 2021',
                'og:title': 'Login untuk Melanjutkan ke Quiz',
            }
        }
    },
    {
        path: '/perizinan',
        component: Empty,
        children: permissionRoutes,
        meta: {
            requiresAuth: true,
            ...{
                title: 'Perizinan | IF ELSE 2021',
                'og:title': 'Login untuk Melanjutkan ke Perizinan',
            }
        }
    },
    {
        path: '/pendataan',
        component: Empty,
        children: pendataanRoutes,
        meta: {
            requiresAuth: true,
            ...{
                title: 'Pendataan | IF ELSE 2021',
                'og:title': 'Login untuk Melanjutkan ke Pendataan',
            }
        }
    },
    {
        path: '/logout',
        component: Logout,
    },
    {
        path: '*',
        component: PageNotFound,
        meta: {
            title: 'Halaman Tidak Ditemukan | IF ELSE 2021',
            'og:title': 'Page Not Found',
        }
    },


];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    // Check for logged in status
    MetaData.addMeta(to.matched);


    if(to.matched.some(record=>record.meta.requiresAuth) || to.matched.some(record => record.meta.guest))
        Connection.get(apiRoutes.loggedIn).then(r=>{
            let loggedIn = !r.data.error;
            // If not logged in, remove all the cookies.
            if(!loggedIn) Auth.logout();

            if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
            } else if(to.matched.some(record => record.meta.guest) && loggedIn){
                next({
                    path: '/',
                });
            } else {
                next();
            }
        });
    else
        next();
    // let loggedIn = store.getters['isLoggedIn'];

});

export default router;
