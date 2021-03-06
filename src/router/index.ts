import Vue from 'vue'
import VueRouter from 'vue-router'
import {generalLayout, home, justToolbar, createFamily, familyMain} from '@/router/routes/layouts'
import {noAuthRoutes} from '@/router/routes/noAuth'
import {afterEach, beforeEach} from '@/router/RoutingRules'

justToolbar.addChildren(noAuthRoutes)
home.addChild(createFamily)
home.addChild(familyMain)
generalLayout.addChild(home)

// tslint:disable-next-line:no-console
console.log(`Adding Routes`, { justToolbar, generalLayout })

Vue.use(VueRouter)

const routes = [
  justToolbar,
  generalLayout
]
// @ts-ignore
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeResolve(beforeEach)
router.afterEach(afterEach)

export default router
