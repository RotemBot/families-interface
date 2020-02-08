import * as vueRouter from 'vue-router'
import {RoutePropsFunction} from 'vue-router/types/router'
import {NavigationGuard, RedirectOption} from 'vue-router'
import {Component} from 'vue'
import {RouteMeta} from './RouteMeta'

export class RouteConfig implements vueRouter.RouteConfig {
    public alias?: string | string[]
    public beforeEnter?: NavigationGuard
    public caseSensitive?: boolean
    // @ts-ignore
    public children: RouteConfig[]
    // @ts-ignore
    public component: Component
    public meta: RouteMeta
    public name: string
    public path: string
    public props?: boolean | Object | RoutePropsFunction
    public redirect?: RedirectOption

    constructor (config: {
        name: string,
        path: string,
        component: Component,
        redirect?: RedirectOption,
        children?: RouteConfig[],
        requiresAuth?: boolean
    }) {
        const { name, path, component, children, redirect } = config
        this.name = name
        this.path = path
        this.component = component
        this.children = children || []
        this.redirect = redirect
        this.meta = new RouteMeta({
            requiresAuth: config.requiresAuth || false
        })
    }

    public addChild (child: RouteConfig) {
        this.children.push(child)
    }

    public addChildren (children: RouteConfig[]) {
        this.children = this.children.concat(children)
    }
}

