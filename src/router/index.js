import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login'
import Pages from '../views/Pages'
import Page from '../views/Page'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            public: true,
        },
    },
    {
        path: '/pages',
        name: 'Pages',
        component: Pages,
        meta: {
            public: false,
        },
    },
    {
        path: '/page/:slug',
        name: 'Page',
        component: Page,
        meta: {
            public: false,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            public: true,
        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (!to.meta?.public && !store.getters["auth/isAuthenticated"]) {
        return next({
            name: "Login",
            query: {next: to.fullPath},
        });
    }
    next();
});

export default router
