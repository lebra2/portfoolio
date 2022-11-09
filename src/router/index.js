import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
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

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router