<template>
    <div class="home row justify-center items-center">
        <create-family-form v-if="!hasFamily"></create-family-form>
    </div>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({ name: 'home' })
    export default class Home extends BaseComponent {
        public login() {
            // @ts-ignore - auth0 plugin
            this.$auth.loginWithRedirect()
        }

        public get hasFamily (): boolean {
            return this.store.getters.family() !== undefined
        }


        public mounted () {
            // @ts-ignore
            window.home = this
        }

        public beforeDestroy () {
            // @ts-ignore
            window.home = undefined
        }
    }
</script>

<style lang="stylus" scoped>
    .home {
        height 100%
    }
</style>
