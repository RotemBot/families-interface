<template>
    <q-page>
        <div class="row justify-center" style="height: calc(100vh - 50px)">
            <div class="column col-auto">
                <div class="row justify-center" style="margin-top: 150px">
                    <img
                            src="@/assets/logo_chief_white.png"
                            height="170"
                            alt="Chief Sport Logo"/>
                </div>
                <div class="row">
                    <h4>{{ $heb.welcomeMessage }}</h4>
                </div>
                <div class="row justify-center">
                    <div class="column">
                        <q-btn
                                :label="$heb.login"
                                @click="login"
                                color="secondary"
                                size="lg"
                        ></q-btn>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
    import {BaseComponent, Component, Watch} from '@/components/BaseComponent'
    import {NAVIGATOR} from '@/router/Navigator'

    @Component({ name: 'login' })
    export default class Login extends BaseComponent {

        @Watch('$auth.isAuthenticated', { deep: true })
        public async handleAuthenticationStateChange () {
            await this._redirect()
        }

        private async _redirect () {
            await this._setJWT()
            if (this.auth0.isAuthenticated) {
                await NAVIGATOR.main()
            }
        }

        public async mounted () {
            if (!this.store.getters.isAuthenticated()()) {
                await this._setJWT()
            }
        }

        private async _setJWT () {
            if (this.auth0.isAuthenticated) {
                const jwt = this.auth0.auth0Client.cache.cache["default::openid profile email"].id_token
                if (jwt) {
                    await this.store.actions.setJWT(jwt)
                }
                else this.auth0.isAuthenticated = false
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
