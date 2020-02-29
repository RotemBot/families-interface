import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'

export const logger = loggerFactory('store')

export interface RootState {
    email: string | undefined
    avatar: string | undefined
}

export function resetValues (): RootState {
    return {
        email: undefined,
        avatar: undefined
    }
}

export const storeBuilder = getStoreBuilder<RootState>()
