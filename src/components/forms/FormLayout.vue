<template>
    <q-card class="form-layout">
        <q-card-section class="form-title row justify-center">
            <h4>
                <slot name="title"></slot>
            </h4>
        </q-card-section>
        <slot name="body"></slot>
        <q-card-actions>
            <q-btn label="Submit"></q-btn>
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
    import {BaseComponent, Component} from '@/components/BaseComponent'

    @Component({name: 'form-layout'})
    export default class FormLayout extends BaseComponent {

    }
</script>

<style lang="stylus" scoped>
    .form-layout {
        width 60%
        height 60%
    }

    .form-title {
    }
</style>
