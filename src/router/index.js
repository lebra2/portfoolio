import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import Contact from '../views/Contact.vue';
const routes = [
    {
        path: "/",
        name: "Portfolio",
        component: Portfolio,
    },

    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router