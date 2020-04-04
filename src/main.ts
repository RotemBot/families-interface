import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'reflect-metadata'
import router from './router'
import './quasar'
import './hebrew'
import {Kernel} from '@/kernel'
// @ts-ignore
import { domain, clientId } from './auth_config.json'
// @ts-ignore
import { Auth0Plugin } from './auth'
import { vuexStore } from '@/store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

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

const generalComponents = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in sub-folders
    true,
    // The regular expression used to match base component filenames
    /.*\.(vue|js)$/
)
const viewsComponents = require.context(
    './views',
    true,
    /.*\.(vue|js)$/
)
const registerComponents = (components: any) => {

    components.keys().forEach((fileName: string) => {
        // Get component config
        const componentConfig = components(fileName)

        // Get PascalCase name of component
        const componentName = upperFirst(
            camelCase(
                // Gets the file name regardless of folder depth
                // @ts-ignore
                fileName
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
            )
        )
        // Register component globally
        Vue.component(
            componentName,
            // Look for the component options on `.default`, which will
            // exist if the component was exported with `export default`,
            // otherwise fall back to module's root.
            componentConfig.default || componentConfig
        )
    })
}
registerComponents(viewsComponents)
registerComponents(generalComponents)

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
