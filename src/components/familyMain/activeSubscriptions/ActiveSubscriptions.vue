<template>
    <q-card :class="{'light-background': !isDark, 'subs-body': true}">
        <q-card-section class="flex flex-center">
            <div class="card-title">
                {{ heb.activeSubscriptions }}
            </div>
            <q-btn icon="add" flat round color="accent">
                <q-tooltip :delay="500" :offset="[8,4]">
                    {{ heb.createNewSubscription }}
                </q-tooltip>
            </q-btn>
        </q-card-section>
        <q-card-section
                v-if="subscriptions.length === 0"
                class="column card-body"
        >
            <div class="row flex-center q-pa-md">
                {{ heb.noSubscriptions }}
            </div>
            <div class="row flex-center q-pa-md">
                <q-btn
                        size="lg"
                        outline
                >
                    {{ heb.goSubscribe }}
                </q-btn>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" src="./ActiveSubscriptions.ts"></script>

<style lang="stylus" scoped>
    .card-title {
        font-size x-large
        color $secondary
        margin-right 7px
    }

    .light-background {
        background $secondary-lightened
    }

    .card-body {
        font-size large
    }

    .subs-body {
        height 30vh
    }
</style>
