import {RootState, storeBuilder} from '@/store/config'
import {Cookies} from 'quasar'

export default class Getters {
    public isAuthenticated = storeBuilder.read(
        (state: RootState) => {
            const authenticated = Cookies.get('auth0.is.authenticated')
            return !!authenticated
        }
        ,
        'isAuthenticated')
}
