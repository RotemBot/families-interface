import Vue from 'vue'
import Component from 'vue-class-component'
export { Watch, Prop } from 'vue-property-decorator'
export { NoCache } from 'vue-class-decorator'
import { store } from '@/store'

abstract class BaseComponent extends Vue {

    constructor () {
        super()
    }

    protected get store () {
        return store
    }

    protected get isAuthenticated (): boolean {
        return this.store.getters.isAuthenticated()()
    }

    // @ts-ignore - auth0 plugin
    protected auth0: any = this.$auth

    protected get isDark (): boolean {
        return this.$q.dark.isActive
    }
}

export { BaseComponent, Component }
