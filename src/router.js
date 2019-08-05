import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import Reports from './views/Reports.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/settings',
            name: 'settings',
            component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
        },
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ './views/Reports.vue'),
            props: true

        },
        {
            path: '/reports/:id?',
            name: 'reports',
            component: () => import(/* webpackChunkName: "about" */ './views/Reports.vue'),
            props: true

        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
