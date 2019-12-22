import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './quasar'
import HelloWorld from '@/components/HelloWorld.vue'
import SidePanel from '@/components/layoutElements/sidePanel/SidePanel.vue'
import MainToolbar from '@/components/layoutElements/mainToolbar/MainToolbar.vue'

Vue.component('hello-world', HelloWorld)
Vue.component('side-panel', SidePanel)
Vue.component('main-toolbar', MainToolbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
