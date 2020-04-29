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
            if (this.$q.cookies.has('dark')) {
                this.$q.dark.set(this.$q.cookies.get<boolean>('dark'))
            }
        }

    }
</script>

<style lang="stylus">
    .clickable {
        cursor: pointer !important;
    }

    * {
        font-family 'Varela Round', sans-serif
    }

    .q-page-container {
        height 100vh
    }
</style>
