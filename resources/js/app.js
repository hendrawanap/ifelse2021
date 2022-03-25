require('./bootstrap');

import Vue from 'vue';
import Embed from 'v-video-embed';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';

import App from "./App.vue";
import router from './router/index.js';

window.humanizeDuration = require('humanize-duration');

Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.use(Embed);
Vue.component('app', App);

const app = new Vue({
    el: '#app',
    router: router,
});
