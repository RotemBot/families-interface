<template>
    <q-layout view="hHh Lpr lFf" class="main-layout">
        <q-header elevated class="glossy">
            <main-toolbar @toggleDrawer="leftDrawerOpen = !leftDrawerOpen"></main-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                :content-class="isDark ? 'bg-dark shadow-4' : 'bg-primary shadow-4'"
        >
            <side-panel></side-panel>
        </q-drawer>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({name: 'GeneralLayout'})
    export default class GeneralLayout extends BaseComponent {
        public leftDrawerOpen: boolean = false
    }
</script>

<style lang="stylus" scoped>
    .main-layout {
        max-height 100vh
        min-height 100vh !important
        overflow hidden
    }
</style>
