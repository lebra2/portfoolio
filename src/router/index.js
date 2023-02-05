import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import Projektid from '../views/Projektid.vue';
const routes = [
    {
        path: "/",
        name: "Portfolio",
        component: Portfolio,
    },

    {
        path: "/Projektid",
        name: "Projektid",
        component: Projektid,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router