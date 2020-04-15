<template>
    <q-card class="form-layout column justify-between">
        <q-card-section vertical>
            <q-card-section horizontal class="form-title row justify-center">
                <slot name="title"></slot>
            </q-card-section>
            <q-card-section horizontal class="form-description row justify-center">
                <slot name="description"></slot>
            </q-card-section>
        </q-card-section>
        <slot name="body"></slot>
        <q-card-actions align="right">
            <q-btn
                    size="md"
                    outline
                    color="secondary"
                    @click="$emit('submit')"
                    :disable="notReady"
            >
                <slot name="submit-label">
                    Submit
                </slot>
            </q-btn>
        </q-card-actions>
    </q-card>
</template>

<script lang="ts">
    import {BaseComponent, Component, Prop} from '@/components/BaseComponent'

    @Component({name: 'form-layout'})
    export default class FormLayout extends BaseComponent {
        @Prop({ required: false, default: false })
        public notReady!: boolean
    }
</script>

<style lang="stylus" scoped>
    .form-layout {
        width 60%
        height 60%
    }

    .form-title {
        font-size xx-large
    }

    .form-description {
        color $primary-darkened
        font-size large
    }
</style>
