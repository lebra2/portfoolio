import { createRouter, createWebHistory, routerKey } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';

const router = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/Portfolio",
        name: "Portfolio",
        component: Portfolio,
    }
]

export default router;