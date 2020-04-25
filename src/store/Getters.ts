import {RootState, storeBuilder} from '@/store/config'
import {Cookies} from 'quasar'
import * as JWT from 'jsonwebtoken'
import { groupBy } from 'lodash'
import {UISubscription} from '@/models'

export default class Getters {
    public isAuthenticated = storeBuilder.read(
        (state: RootState) => () => {
            const jwt = Cookies.get('jwt')
            if (!jwt) {
                return false
            }
            const decodedJwt: any = JWT.decode(jwt)
            const now = Date.now() / 1000
            return now < decodedJwt.exp
        }
        , 'isAuthenticated')

    public jwt = storeBuilder.read(
        (state: RootState) => () => {
            return Cookies.get('jwt')
        }
        , 'jwt')

    public email = storeBuilder.read(
        (state: RootState) => {
            return state.email
        }
        , 'email')

    public avatar = storeBuilder.read(
        (state: RootState) => {
            return state.avatar || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2q8u2w7e6y3r5y3_default-profile-picture-avatar-png-green%2F&psig=AOvVaw3C2aSLD7bcO3rj3kzSHaNc&ust=1583075424797000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDv9taF9-cCFQAAAAAdAAAAABAD'
        }
        , 'avatar')

    public family = storeBuilder.read(
        (state: RootState) => {
            return state.family
        }
        , 'family')

    public subscriptions = storeBuilder.read(
        (state: RootState): UISubscription[] => {
            return state.subscriptions
        }
        , 'subscriptions')

    public subscriptionsByParticipant = storeBuilder.read(
        (state: RootState): Dictionary<UISubscription[]> => {
            return groupBy(state.subscriptions, 'subscriber')
        }
        , 'subscriptionsByParticipant')
}
