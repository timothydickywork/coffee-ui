<template>
  <div class="text-center">
    <v-dialog
      v-model="showProgressbar"
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
        class="pt-3"
      >
        <v-card-text>
          {{ text }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { sync } from 'vuex-pathify'
  export default {
    name: 'Progress',
    computed: {
      ...sync('progressbar', ['showProgressbar', 'text']),
    },
  }
</script>
