import {RouteConfig} from '@/models'
import NoMenuLayout from '@/components/layoutElements/NoMenuLayout.vue'
import {login} from './noAuth'
import Home from '@/views/Home.vue'

export const justToolbar = new RouteConfig({
    name: 'justToolbar',
    path: '/',
    component: NoMenuLayout,
    redirect: login.name
})

export const home = new RouteConfig({
    name: 'home',
    path: '/home',
    component: Home,
    requiresAuth: true
})
