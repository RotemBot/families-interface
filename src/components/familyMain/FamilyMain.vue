<template>
    <q-page
            padding
            class="full-width column justify-between main-family-page"
    >
        <active-subscriptions></active-subscriptions>
        <div class="details row q-gutter-x-lg">
            <children></children>
            <contacts></contacts>
            <family-details></family-details>
        </div>
    </q-page>
</template>

<script lang="ts" src="./FamilyMain.ts"></script>

<style lang="stylus" scoped>
    .details {
        height calc(70vh - 122px)
    }

    .main-family-page {
        max-height calc(100vh - 50px)
    }
</style>
