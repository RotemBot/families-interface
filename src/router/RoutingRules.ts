import {Route} from 'vue-router'
import {login} from '@/router/routes/noAuth'

export const beforeEach = (to: Route, from: Route, next: Function) => {
    debugger
    next()
}
export const afterEach = (to: Route, from: Route) => {
    debugger
}
