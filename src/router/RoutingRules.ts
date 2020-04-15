import {Route} from 'vue-router'
import {login} from '@/router/routes/noAuth'
import {RouteMeta} from '@/models'
import {store} from '@/store'
import {home} from '@/router/routes/layouts'
import {loggerFactory} from '@/utils/logger'

const _logger = loggerFactory(`Routing Rules`)


const prepare = async (toMeta: RouteMeta, to: Route, from: Route) => {
    const dest = to.name
    switch (dest) {
        case home.name:
            await store.actions.getFamilyByEmail(store.getters.email()!)
    }
}

const _extractUserDetails = async () => {
    if (store.getters.isAuthenticated()() && !store.getters.email()) {
        await store.actions.setJWT(store.getters.jwt()())
    }
}

export const beforeEach = async (to: Route, from: Route, next: Function) => {
    try {
        const toMeta = to.meta as RouteMeta
        await _extractUserDetails()
        if (toMeta.requiresAuth && !store.getters.isAuthenticated()()) {
            next({
                name: login.name
            })
        }
        if (to.name === login.name && store.getters.isAuthenticated()()) {
            next({
                name: home.name
            })
        } else {
            await prepare(toMeta, to, from)
            next()
        }
    } catch (error) {
        _logger.error(`Error on beforeEach navigation hook`, { error, to, from })
        next(error)
    }

}
export const afterEach = (to: Route, from: Route) => {
}
