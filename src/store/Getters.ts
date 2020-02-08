import {RootState, storeBuilder} from '@/store/config'

export default class Getters {
    public isAuthenticated = storeBuilder.read(
        (state: RootState) => {
            return state.isAuthenticated
        }
        ,
        'isAuthenticated')
}
