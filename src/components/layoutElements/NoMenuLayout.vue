<template>
    <q-layout>
        <q-header>
            <main-toolbar></main-toolbar>
        </q-header>
        <q-page-container>
            <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({ name: 'no-menu-layout' })
    export default class NoMenuLayout extends BaseComponent {
        constructor () {
            super()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
