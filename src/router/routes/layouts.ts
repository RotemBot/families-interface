import {RouteConfig} from '@/models'
import NoMenuLayout from '@/components/layoutElements/NoMenuLayout.vue'
import {login} from './noAuth'
import Home from '@/views/Home.vue'
import GeneralLayout from '@/components/layoutElements/GeneralLayout.vue'
import CreateFamilyForm from '@/components/forms/createFamilyForm/CreateFamilyForm.vue'
import FamilyMain from '@/components/familyMain/FamilyMain.vue'

export const justToolbar = new RouteConfig({
    name: 'justToolbar',
    path: '/',
    component: NoMenuLayout,
    redirect: login.name
})

export const generalLayout = new RouteConfig({
    name: 'generalLayout',
    path: '/',
    component: GeneralLayout,
    requiresAuth: true
})

export const home = new RouteConfig({
    name: 'home',
    path: '',
    component: Home,
    requiresAuth: true
})

export const createFamily = new RouteConfig({
    name: 'createFamily',
    path: '/home',
    component: CreateFamilyForm,
    requiresAuth: true
})

export const familyMain = new RouteConfig({
    name: 'familyMain',
    path: '/home/:family_id',
    component: FamilyMain,
    requiresAuth: true
})
