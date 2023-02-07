import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import Project1 from '../views/Project1.vue';
import Projects from '../views/Projects.vue';
const routes = [
    {
        path: "/",
        name: "Portfolio",
        component: Portfolio,
    },

    {
        path: "/Project1",
        name: "Project1",
        component: Project1,
    },

    {
        path: "/Projects",
        name: "Projects",
        component: Projects,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router