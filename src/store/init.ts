import Actions from '@/store/Actions'
import Getters from '@/store/Getters'

export class BaseStore {
    public actions = new Actions()
    public getters = new Getters()
}

const baseStore = new BaseStore()
export { baseStore }
