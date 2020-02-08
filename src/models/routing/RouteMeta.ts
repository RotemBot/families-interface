export class RouteMeta {
    public requiresAuth: boolean

    constructor (config: { requiresAuth?: boolean }) {
        const { requiresAuth } = config
        this.requiresAuth = requiresAuth || false
    }
}
