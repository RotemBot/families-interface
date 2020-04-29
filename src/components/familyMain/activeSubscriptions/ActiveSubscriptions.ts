import {BaseComponent, Component} from '@/components/BaseComponent'

@Component({name: 'active-subscriptions'})
export default class ActiveSubscriptions extends BaseComponent {
    public subscriptions: any[] = []

    public mounted () {
        // @ts-ignore
        window.activeSubscriptions = this
    }

    public beforeDestroy () {
        // @ts-ignore
        window.activeSubscriptions = undefined
    }
}
