import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'
import {UIFamily} from '@/models'

export const logger = loggerFactory('store')

export interface RootState {
    email: string | undefined
    avatar: string | undefined
    family: UIFamily | undefined
}

export function resetValues (): RootState {
    return {
        email: undefined,
        avatar: undefined,
        family: undefined
    }
}

export const storeBuilder = getStoreBuilder<RootState>()
