import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'tishlabs',
        component: () => import("../views/Tishlabs.vue"),
    },
    {
        path: '/freelance',
        name: 'freelance',
        component: () => import("../views/Freelance.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;