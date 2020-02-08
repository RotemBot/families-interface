import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'

export const logger = loggerFactory('store')

export interface RootState {
    isAuthenticated: boolean
}

export function resetValues (): RootState {
    return {
        isAuthenticated: false
    }
}

export const storeBuilder = getStoreBuilder<RootState>()
