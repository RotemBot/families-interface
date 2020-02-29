import {BareActionContext} from '../../lib/vuex-typex/src'
import {logger, resetValues, RootState, storeBuilder} from '@/store/config'
import {Client} from '@/services'
import * as JWT from 'jsonwebtoken'
import {Cookies} from 'quasar'

export default class Actions {
    private _client: Client | null = null
    public injectClient = (client: Client)=>{
        this._client = client
    }

    private _setUserDetails = storeBuilder.commit(
        (
            state: RootState,
            payload: { email: string, avatar?: string }
        ) => {
            const { email, avatar } = payload
            state.email = email
            if (avatar) {
                state.avatar = avatar
            }
        },
        '_setUserDetails'
    )

    private _reset = storeBuilder.commit(
        (
            state: RootState
        ) => {
            Object.assign(state, resetValues())

        },
        '_reset'
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

    public getFamilyByEmail = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, email: string) => {
            try {
                logger.debug(`Find family for email ${email}`)
                const family = await this._client!.getFamilyByEmail(email)
                debugger
            }
            catch (error) {
                throw error
            }
        },
        'getFamilyByEmail')

    public setJWT = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, jwt: string): Promise<string> => {
            try {
                logger.debug(`Setting JWT for user. ${jwt}`)
                const decoded = await JWT.decode(jwt) as any
                if (!decoded) {
                    throw new Error(`Error decoding JWT`)
                }
                Cookies.set('jwt', jwt, { expires: decoded.exp})
                this._setUserDetails({ email: decoded.email, avatar: decoded.picture })
                return decoded.email as string
            }
            catch (error) {
                logger.error(`Error setting JWT`, { error, jwt })
                throw error
            }
        },
        'setJWT')
}
