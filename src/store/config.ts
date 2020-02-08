import {loggerFactory} from '@/utils/logger'
import {getStoreBuilder} from '../../lib/vuex-typex/src'
import Vue from 'vue'
import Vuex, {MutationPayload, Store} from 'vuex'

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

Vue.use(Vuex)

export const vuexStore = storeBuilder.vuexStore({
    state: {
        ...resetValues()
    }
}) as Store<RootState> & { subscribeAction: (fn: (action: MutationPayload, state: RootState) => void) => Function }
