import {Route} from 'vue-router'
import {login} from '@/router/routes/noAuth'

export const beforeEach = (to: Route, from: Route, next: Function) => {
    if (to.name === login.name) {
        debugger
    }
    next()
}
export const afterEach = (to: Route, from: Route, next: Function) => {
    next()
}
