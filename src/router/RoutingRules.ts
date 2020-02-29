import {Route} from 'vue-router'
import {login} from '@/router/routes/noAuth'
import {RouteMeta} from '@/models'
import {store} from '@/store'
import {home} from '@/router/routes/layouts'

export const beforeEach = (to: Route, from: Route, next: Function) => {
    const toMeta = to.meta as RouteMeta
    if (toMeta.requiresAuth && !store.getters.isAuthenticated()) {
        next({
            name: login.name
        })
    }
    if (to.name === login.name && store.getters.isAuthenticated()) {
        next({
            name: home.name
        })
    }
    else next()
}
export const afterEach = (to: Route, from: Route) => {
    debugger
}
