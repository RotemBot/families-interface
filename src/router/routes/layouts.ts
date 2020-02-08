import {RouteConfig} from '@/models'
import NoMenuLayout from '@/components/layoutElements/NoMenuLayout.vue'
import {login} from './noAuth'

export const justToolbar = new RouteConfig({
    name: 'justToolbar',
    path: '/',
    component: NoMenuLayout,
    redirect: login.name
})
