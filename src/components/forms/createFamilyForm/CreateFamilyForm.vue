<template>
    <form-layout
        @submit="createFamily"
        :not-ready="notReady"
    >
        <template v-slot:title>
            {{ $heb.createFamilyFormHeader }}
        </template>
        <template v-slot:description>
            {{ $heb.familyFormDesc }}
        </template>
        <template v-slot:body>
            <q-card-section horizontal class="justify-evenly">
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.familyName"
                            outlined
                            v-model="familyName"
                            @change="() => contactLastName = familyName"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                    >
                        <template v-slot:prepend>
                            <q-icon name="fas fa-users" />
                        </template>
                    </q-input>
                </q-card-section>
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.residence"
                            outlined
                            v-model="residence"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                    >
                        <template v-slot:prepend>
                            <q-icon name="home" />
                        </template>
                    </q-input>
                </q-card-section>
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.email"
                            v-model="email"
                            type="email"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                            outlined
                            readonly
                            :hint="$heb.emailHint"
                    >
                        <template v-slot:prepend>
                            <q-icon name="mail" />
                        </template>
                    </q-input>
                </q-card-section>
            </q-card-section>
            <q-card-section horizontal class="justify-center">
                <h6 class="text-secondary" style="margin-bottom: 0">
                    {{ $heb.primaryContactDetails }}
                </h6>
            </q-card-section>
            <q-card-section horizontal class="justify-evenly">
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.firstName"
                            outlined
                            v-model="contactFirstName"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                    >
                        <template v-slot:prepend>
                            <q-icon name="fas fa-user" />
                        </template>
                    </q-input>
                </q-card-section>
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.lastName"
                            outlined
                            v-model="contactLastName"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                    >
                        <template v-slot:prepend>
                            <q-icon name="home" />
                        </template>
                    </q-input>
                </q-card-section>
                <q-card-section vertical class="justify-center">
                    <q-select
                            outlined
                            v-model="gender"
                            rounded
                            :display-value="genderDisplay"
                            :options="options"
                            emit-value
                    ></q-select>
                </q-card-section>
                <q-card-section vertical class="justify-center">
                    <q-input
                            :label="$heb.phoneNumber"
                            outlined
                            v-model="phone"
                            :rules="[val => !!val || $heb.requiredFieldWarning]"
                            rounded
                            mask="###-###-####"
                            fill-mask="_"
                            class="phone-input"
                    >
                        <template v-slot:prepend>
                            <q-icon name="fas fa-phone" />
                        </template>
                    </q-input>
                </q-card-section>
            </q-card-section>
        </template>
        <template v-slot:submit-label>
            {{ $heb.joinUs }}
        </template>
    </form-layout>
</template>

<script lang="ts" src="./CreateFamilyForm.ts"></script>

<style lang="stylus">
    .phone-input .q-field__native {
        direction rtl
    }
</style>
