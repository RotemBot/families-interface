<template>
    <q-page>
        <q-btn
                label="Login"
                @click="login"
        ></q-btn>
    </q-page>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'
    import {NAVIGATOR} from '@/router/Navigator'

    @Component({name: 'login'})
    export default class Login extends BaseComponent {
        public async mounted () {
            // @ts-ignore
            if (this.store.getters.isAuthenticated() || this.$auth.isAuthenticated) {
                await this.store.actions.setAuthenticated(true)
                await NAVIGATOR.main()
            } else {
                await this.store.actions.setAuthenticated(false)
            }
        }

        public login () {
            // @ts-ignore - auth0 plugin
            this.$auth.loginWithRedirect()
        }

    }
</script>

<style lang="stylus" scoped>

</style>
