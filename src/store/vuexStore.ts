import Vue from 'vue'
import Vuex, {MutationPayload, Store} from 'vuex'
import {resetValues, RootState, storeBuilder} from '@/store/config'

Vue.use(Vuex)

export const vuexStore = storeBuilder.vuexStore({
    state: {
        ...resetValues()
    }
}) as Store<RootState> & { subscribeAction: (fn: (action: MutationPayload, state: RootState) => void) => Function }
