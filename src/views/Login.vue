<template>
    <q-page>
        <div class="row justify-center" style="height: calc(100vh - 50px)">
            <div class="column col-auto">
                <div class="row justify-center" style="margin-top: 150px">
                    <img
                            src="@/assets/logo_chief_white.png"
                            height="170"
                    ></img>
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

    @Component({name: 'login'})
    export default class Login extends BaseComponent {
        public async mounted () {
            await this._redirect()
        }

        @Watch('$auth.isAuthenticated', { deep: true })
        public async handleAuthenticationStateChange () {
            await this._redirect()
        }

        private async _redirect () {
            // @ts-ignore
            if (this.$auth.isAuthenticated) {
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
