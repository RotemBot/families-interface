import { baseStore } from '@/store/init'
export { vuexStore } from './vuexStore'

const store = {
  getters: baseStore.getters,
  actions: baseStore.actions
}

type Store = typeof store

export {
  store,
  Store
}

// @ts-ignore
window.store = store
