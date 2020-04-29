<template>
    <q-card :class="{
        'column': true,
        'col-grow': true,
        'justify-between:': true,
        'full-height': true,
        'light-background': !isDark
    }">
        <q-card-section class="details-card-title row justify-center">
            <slot name="title"></slot>
        </q-card-section>
        <q-card-section class="body-slot">
            <slot></slot>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({name: 'details-card'})
    export default class DetailsCard extends BaseComponent {

    }
</script>

<style lang="stylus" scoped>
    .details-card-title {
        font-size x-large
        color $secondary
    }

    .light-background {
        background $secondary-lightened
    }

    .body-slot {
        height calc(100% - 68px)
    }
</style>
