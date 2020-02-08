import {BareActionContext} from '../../lib/vuex-typex/src'
import {logger, resetValues, RootState, storeBuilder} from '@/store/config'

export default class Actions {
    private _reset = storeBuilder.commit(
        (
            state: RootState
        ) => {
            Object.assign(state, resetValues())

        },
        '_reset'
    )

    private _setAuthenticated = storeBuilder.commit(
        (
            state: RootState,
            authenticated: boolean
        ) => {
            state.isAuthenticated = authenticated

        },
        '_setAuthenticated'
    )

    public reset = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>) => {
            try {
                logger.debug(`Global store reset`)
                this._reset()
            }
            catch (error) {
                throw error
            }
        },
        'reset')

    public setAuthenticated = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, authenticated: boolean) => {
            try {
                logger.debug(`Setting authenticated status`, { authenticated })
                this._setAuthenticated(authenticated)
            }
            catch (error) {
                throw error
            }
        },
        'setAuthenticated')
}
