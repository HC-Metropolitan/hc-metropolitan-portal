// src/router/index.ts
import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from '../pages/MainPage.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/neko', component: () => import('../pages/NekoPage.vue') }
]

const index = createRouter({
    history: createWebHashHistory(),
    routes
})

export default index
