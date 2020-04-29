<template>
    <q-card-section vertical style="padding: 0">
        <q-card-section horizontal>
            <q-card-section vertical>
                <q-input
                        v-model="contact.firstName"
                        :label="heb.firstName"
                        stack-label
                        borderless
                        @input="setDirty"
                        standout="text-secondary"
                ></q-input>
            </q-card-section>
            <q-card-section vertical>
                <q-input
                        v-model="contact.lastName"
                        :label="heb.lastName"
                        stack-label
                        borderless
                        @input="setDirty"
                        standout="text-secondary"
                ></q-input>
            </q-card-section>
            <q-card-section vertical>
                <q-select
                        v-model="contact.gender"
                        :label="heb.gender"
                        stack-label
                        borderless
                        :display-value="genderDisplay(contact.gender)"
                        :options="options"
                        emit-value
                        options-dense
                        @input="setDirty"
                        standout="text-secondary"
                ></q-select>
            </q-card-section>
        </q-card-section>
        <q-card-section horizontal>
            <q-card-section vertical>
                <q-input
                        v-model="contact.phone"
                        :label="heb.phoneNumber"
                        stack-label
                        borderless
                        @input="setDirty"
                        standout="text-secondary"
                ></q-input>
            </q-card-section>
            <q-card-section vertical>
                <q-input
                        v-model="contact.email"
                        :label="heb.email"
                        stack-label
                        borderless
                        @input="setDirty"
                        standout="text-secondary"
                ></q-input>
            </q-card-section>
        </q-card-section>
    </q-card-section>
</template>

<script lang="ts" src="./Contact.ts"></script>

<style lang="stylus" scoped>

</style>
