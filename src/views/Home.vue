<template>
    <div class="home">
        <!-- Check that the SDK client is not currently loading before accessing is methods -->
        <div v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
            <!-- show logout when authenticated -->
            <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
        </div>
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
        // Log the user out
        public logout() {
            // @ts-ignore - auth0 plugin
            this.$auth.logout({
                returnTo: window.location.origin
            })
        }
    }
</script>
