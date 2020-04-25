import {store} from '@/store'
import router from './index'
import {createFamily, familyMain} from '@/router/routes/layouts'
import {login} from '@/router/routes/noAuth'

class Navigator {
    public main = async () => {
        if (store.getters.isAuthenticated()()) {
            await router.push({
                name: createFamily.name
            })
        } else {
            await router.push({
                name: login.name
            })
        }
    }

    public family = async (params: { id: string }) => {
        await router.push({
            name: familyMain.name,
            params: {
                family_id: params.id
            }
        })
    }
}

export const NAVIGATOR = new Navigator()
