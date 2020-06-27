import Vue from 'vue'
import VueRouter from 'vue-router'

import MovieGrid from '../components/MovieGrid'
import MovieFull from '../components/MovieFull'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MovieList',
        component: MovieGrid
    },
    {
        path: '/movie/:id',
        name: 'MovieById',
        component: MovieFull
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
