<template>
  <v-btn
    class="ml-2"
    min-width="0"
    text
    :to="dashboard.to"
    exact
  >
    <v-icon>{{ dashboard.icon }}</v-icon>
  </v-btn>
</template>

<script>
  import { get } from 'vuex-pathify'
  export default {
    name: 'DefaultGoHome',
    computed: {
      ...get('string', [
        'menu@dashboard',
      ]),
    },
  }
</script>
