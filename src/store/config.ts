import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'
import {UIFamily, UISubscription} from '@/models'

export const logger = loggerFactory('store')

export interface RootState {
    email: string | undefined
    avatar: string | undefined
    family: UIFamily | undefined
    subscriptions: UISubscription[]
}

export function resetValues (): RootState {
    return {
        email: undefined,
        avatar: undefined,
        family: undefined,
        subscriptions: []
    }
}

export const storeBuilder = getStoreBuilder<RootState>()
