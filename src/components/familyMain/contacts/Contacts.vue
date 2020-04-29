<template>
    <details-card>
        <template v-slot:title>
            {{ heb.contacts }}
        </template>
        <q-scroll-area
                style="height: 100%"
        >
            <q-card-section vertical>
                <q-card-section horizontal class="contact-title justify-between">
                    {{ heb.primary }}
                    <q-btn
                            icon="save"
                            round
                            flat
                            size="sm"
                            :disable="!primaryDirty"
                            :color="primaryDirty ? 'positive' : ''"
                            @click="savePrimary"
                    ></q-btn>
                </q-card-section>
                <contact
                        :contact="primaryContact"
                        v-model="primaryDirty"
                ></contact>
            </q-card-section>
            <q-card-section vertical>
                <q-card-section class="contact-title">
                    {{ heb.secondary }}
                    <q-btn
                            icon="save"
                            round
                            flat
                            size="sm"
                            :disable="!secondaryDirty"
                            :color="secondaryDirty ? 'positive' : ''"
                            @click="saveSecondary"
                            v-if="secondaryContact"
                    ></q-btn>
                </q-card-section>
                <contact
                        :contact="secondaryContact"
                        v-model="secondaryDirty"
                        v-if="secondaryContact"
                ></contact>
                <q-card-section v-else vertical>
                    <q-card-section horizontal class="justify-center text-primary-darkened">
                        {{ heb.secondaryNotDefined}}
                    </q-card-section>
                    <q-card-section horizontal class="justify-center">
                        <q-btn
                                flat
                                color="accent"
                        >
                            {{ heb.addContact }}
                        </q-btn>
                    </q-card-section>
                </q-card-section>
            </q-card-section>
        </q-scroll-area>
    </details-card>
</template>

<script lang="ts" src="./Contacts.ts"></script>

<style lang="stylus" scoped>
    .contact-title {
        font-size large
        color $primary-darkened
        padding 0
    }
</style>
