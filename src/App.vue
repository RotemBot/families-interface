<template>
    <div id="app">
        <router-view :key="$route.name"/>
    </div>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({ name: 'layout-default' })
    export default class LayoutDefault extends BaseComponent {

        public created () {
            // @ts-ignore
            this.$q.dark.set(true)
        }

    }
</script>

<style lang="stylus">
    * {
        font-family 'Varela Round', sans-serif
    }

    .q-page-container {
        height 100vh
    }
</style>
