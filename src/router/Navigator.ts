import {store} from '@/store'
import router from './index'
import {home} from '@/router/routes/layouts'
import {login} from '@/router/routes/noAuth'

class Navigator {
    public main = async () => {
        if (store.getters.isAuthenticated()) {
            await router.push({
                name: home.name
            })
        } else {
            await router.push({
                name: login.name
            })
        }
    }
}

export const NAVIGATOR = new Navigator()
