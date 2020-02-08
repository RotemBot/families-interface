import Getters from '@/store/Getters'
import Actions from '@/store/Actions'

const store = {
  getters: Getters,
  actions: Actions,
}

type Store = typeof store

export {
  store,
  Store
}

// @ts-ignore
window.store = store
