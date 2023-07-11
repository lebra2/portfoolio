import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Disko from '../views/Disko.vue';
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/Disko",
        name: "Disko",
        component: Disko,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router