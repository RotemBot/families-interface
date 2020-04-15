<template>
    <q-toolbar class="bg-secondary">
        <q-btn
                v-if="hasSideMenu"
                flat
                dense
                round
                @click="$emit('toggleDrawer')"
                aria-label="Menu"
                icon="menu"
        />

        <q-toolbar-title>
            {{ $heb.appName }}
        </q-toolbar-title>



        <div class="column col-grow" v-if="family">
            <div class="row justify-center">
                <q-avatar
                        size="lg"
                >
                    <img :src="avatar" />
                </q-avatar>
                <div class="column justify-center family-name">
                    {{ $heb.family }} {{ family.name }}
                </div>
            </div>
        </div>
        <div class="column quick-actions">
            <div class="row justify-end">
                <q-btn
                        round
                        icon="settings"
                        dense
                        flat
                >
                    <q-menu>
                        <q-list dense>
                            <q-item>
                                <q-toggle
                                        :label="$heb.darkTheme"
                                        :value="$q.dark.isActive"
                                        @input="toggleTheme"
                                        color="secondary"
                                        left-label
                                ></q-toggle>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-btn v-if="isAuthenticated"
                       :label="$heb.logOut"
                       flat
                       dense
                       icon="exit_to_app"
                       style="margin-left: 10px"
                       @click="logout"
                ></q-btn>
                <div class="column col-auto justify-center">
                    <img src="@/assets/logo_chief_primary_flat.png" height="35"/>
                </div>
            </div>
        </div>
    </q-toolbar>
</template>

<script lang="ts">
    import {BaseComponent, Component, Prop} from '@/components/BaseComponent'
    import {UIFamily} from '@/models'

    @Component({name: 'main-toolbar'})
    export default class MainToolbar extends BaseComponent {

        @Prop({required: false, default: true})
        public hasSideMenu!: boolean

        // Log the user out
        public logout() {
            // @ts-ignore
            this.$auth.logout({
                returnTo: window.location.origin
            })
        }

        public get avatar () {
            return this.store.getters.avatar()
        }

        public get family (): UIFamily | undefined {
            return this.store.getters.family()
        }

        public mounted () {
            // @ts-ignore
            window.mainToolBar = this
        }

        public toggleTheme () {
            this.$q.dark.toggle()
            this.$q.cookies.set('dark', `${this.isDark}`)
        }

        public beforeDestroy () {
            // @ts-ignore
            window.mainToolBar = undefined
        }

    }
</script>

<style lang="stylus" scoped>
    .quick-actions {
        width 30%
    }

    .family-name {
        font-size large
        color $primary
        margin-left 7px
    }
</style>
