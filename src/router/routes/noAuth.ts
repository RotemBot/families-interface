import {RouteConfig} from '@/models'
import Login from '@/views/Login.vue'

export const login = new RouteConfig({
    name: 'login',
    path: '/login',
    component: Login
})

export const noAuthRoutes = [ login ]


