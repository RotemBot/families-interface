<template>
    <q-list>
        <q-item>
            Placeholder
        </q-item>
    </q-list>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent'
  import {Kernel} from '@/kernel'
  import {Client} from '@/services'

  @Component({ name: 'side-panel' })
  export default class SidePanel extends BaseComponent {

      @Kernel.Inject(Client)
      private client!: Client

      public createFamily () {
          this.client.createNewFamily({
              name: 'Botavia',
              homeTown: 'Herzliya',
              email: 'rotem@gmail.com'
          })
      }
  }
</script>

<style lang="stylus" scoped>

</style>
