<template>
    <q-toolbar class="bg-black text-white">
        <q-btn
                flat
                dense
                round
                @click="$emit('toggleDrawer')"
                aria-label="Menu"
                icon="menu"
        />

        <q-toolbar-title>
            {{ $heb.appName }}
        </q-toolbar-title>

        <div class="column justify-center">
            <img src="../../../assets/logo.png" height="35"/>
        </div>
    </q-toolbar>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent'

  @Component({name: 'main-toolbar'})
  export default class MainToolbar extends BaseComponent {

  }
</script>

<style lang="stylus" scoped>

</style>
