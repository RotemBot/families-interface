import {BareActionContext} from '../../lib/vuex-typex/src'
import {logger, resetValues, RootState, storeBuilder} from '@/store/config'
import {Client, CreateContactPayload, CreateFamilyPayload} from '@/services'
import * as JWT from 'jsonwebtoken'
import {Cookies} from 'quasar'
import {UIContact, UIFamily, UISubscription} from '@/models'

export default class Actions {
    private _client: Client | null = null

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
    private _setFamily = storeBuilder.commit(
        (
            state: RootState,
            family?: UIFamily
        ) => {
            state.family = family
        },
        '_setFamily'
    )

    private _setSubscriptions = storeBuilder.commit(
        (
            state: RootState,
            subcscriptions: UISubscription[]
        ) => {
            state.subscriptions = subcscriptions
        },
        '_setSubscriptions'
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
            } catch (error) {
                throw error
            }
        },
        'reset')

    public getFamilyByEmail = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, email: string) => {
            try {
                logger.debug(`Find family for email ${email}`)
                const family = await this._client!.getFamilyByEmail(email)
                if (family) {
                    this._setFamily(new UIFamily(family))
                }
            } catch (error) {
                throw error
            }
        },
        'getFamilyByEmail')

    public createFamily = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, payload: { family: CreateFamilyPayload, primary: CreateContactPayload }) => {
            try {
                logger.debug(`Creating a new family.`)
                const family = await this._client!.createNewFamily(payload.family)
                if (!family) {
                    throw new Error(`Error creating a family`)
                }
                const uiFamily = new UIFamily(family)
                const familyWithContact = await this._client!.createContact(payload.primary, uiFamily.id)
                if (!familyWithContact) {
                    throw new Error(`Error creating a primary contact for the family`)
                }
                uiFamily.primaryContact = new UIContact(familyWithContact.primaryContact)
                this._setFamily(uiFamily)
            } catch (error) {
                logger.error(`Error creating a new family`, { error, payload })
                throw error
            }
        },
        'createFamily')

    public fetchSubscriptions = storeBuilder.dispatch(
        async (context: BareActionContext<RootState, RootState>, payload: { familyId: string }) => {
            try {
                logger.debug(`Getting family subscriptions.`)
                const subs = await this._client!.getFamilySubscriptions(payload.familyId)
                this._setSubscriptions(subs)

            } catch (error) {
                logger.error(`Error creating a new family`, { error, payload })
                throw error
            }
        },
        'fetchSubscriptions')

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
            } catch (error) {
                logger.error(`Error setting JWT`, { error, jwt })
                throw error
            }
        },
        'setJWT')
    public injectClient = (client: Client) => {
        this._client = client
    }
}
