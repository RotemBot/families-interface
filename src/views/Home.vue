<template>
    <div class="home">
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
