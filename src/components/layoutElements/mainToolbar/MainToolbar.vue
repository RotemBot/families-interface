<template>
    <q-toolbar class="bg-black text-white">
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

        <div class="column justify-center">
            <img src="@/assets/logo_chief_secondary_flat.png" height="35"/>
        </div>
    </q-toolbar>
</template>

<script lang="ts">
    import {BaseComponent, Component, Prop} from '@/components/BaseComponent'

    @Component({name: 'main-toolbar'})
    export default class MainToolbar extends BaseComponent {

        @Prop({required: false, default: true})
        public hasSideMenu!: boolean
    }
</script>

<style lang="stylus" scoped>

</style>
