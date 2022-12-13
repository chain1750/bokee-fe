import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import List from '../views/List'
import Detail from '../views/Detail'
import Blank from '../views/Blank'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/'
    }, {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                name: 'list',
                component: List,
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: Detail,
            },
            {
                path: 'blank',
                name: 'blank',
                component: Blank,
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router