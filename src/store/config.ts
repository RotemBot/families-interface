import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'

export const logger = loggerFactory('store')

export interface RootState {
}

export function resetValues (): RootState {
    return {
    }
}

export const storeBuilder = getStoreBuilder<RootState>()
