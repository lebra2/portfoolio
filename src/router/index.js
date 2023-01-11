import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Project2 from '../views/Project2.vue';
import Project3 from '../views/Project3.vue';
import Project1 from '../views/Project1.vue';
import ceevee from '../views/ceevee.vue';
import Disko from '../views/Disko.vue';
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
    },

    {
        path: "/Project2",
        name: "Project2",
        component: Project2,
    },

    {
        path: "/Project3",
        name: "Project3",
        component: Project3,
    },

    {
        path: "/Project1",
        name: "Project1",
        component: Project1,
    },

    
    {
        path: "/ceevee",
        name: "ceevee",
        component: ceevee,
    },

    {
        path: "/Disko",
        name: "Disko",
        component: Disko,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router