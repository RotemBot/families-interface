import Vue from 'vue'
import Component from 'vue-class-component'
export { Watch, Prop } from 'vue-property-decorator'
export { NoCache } from 'vue-class-decorator'
import { store } from '@/store'
import {loggerFactory} from '@/utils/logger'

abstract class BaseComponent extends Vue {

    protected get store () {
        return store
    }

    protected get isAuthenticated (): boolean {
        return this.store.getters.isAuthenticated()()
    }

    protected get isDark (): boolean {
        return this.$q.dark.isActive
    }

    // @ts-ignore - auth0 plugin
    protected auth0: any = this.$auth
    // @ts-ignore
    protected heb: any = this.$heb

    protected logger = loggerFactory(this.constructor.name)

    constructor () {
        super()
    }
}

export { BaseComponent, Component }
