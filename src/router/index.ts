// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import NekoPage from '../pages/NekoPage.vue'
import MainPage from '../pages/MainPage.vue';

const routes = [
    { path: '/', component: MainPage },
    { path: '/neko', component: NekoPage }
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index
