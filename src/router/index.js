import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',

        component: () => import ('../views/LoginView.vue')
    },
    {
        path: '/cadastrar',
        name: 'cadastrar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CadastroView.vue')

    }, {
        path: '/justificar',
        name: 'justificar',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/JustificarFaltasView.vue')
    }, {
        path: '/historico-de-justificativas',
        name: 'historicoDeJustificativas',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/HistoricoDeJustificatiasView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router