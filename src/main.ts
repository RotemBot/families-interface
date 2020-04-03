import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'reflect-metadata'
import router from './router'
import './quasar'
import './hebrew'
import HelloWorld from '@/components/HelloWorld.vue'
import SidePanel from '@/components/layoutElements/sidePanel/SidePanel.vue'
import MainToolbar from '@/components/layoutElements/mainToolbar/MainToolbar.vue'
import {Kernel} from '@/kernel'
// @ts-ignore
import { domain, clientId } from './auth_config.json'
// @ts-ignore
import { Auth0Plugin } from './auth'
import { vuexStore } from '@/store'
import FormLayout from '@/components/forms/FormLayout.vue'
import CreateFamilyForm from '@/components/forms/createFamilyForm/CreateFamilyForm.vue'

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
    domain,
    clientId,
    // @ts-ignore
    onRedirectCallback: (appState) => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        )
    }
})

Vue.component('hello-world', HelloWorld)
Vue.component('side-panel', SidePanel)
Vue.component('main-toolbar', MainToolbar)
Vue.component('form-layout', FormLayout)
Vue.component('create-family-form', CreateFamilyForm)

Vue.config.productionTip = false

const main = async () => {
    await Kernel.get()
    new Vue({
        router,
        store: vuexStore,
        render: (h) => h(App),
    }).$mount('#app')
}

main()
