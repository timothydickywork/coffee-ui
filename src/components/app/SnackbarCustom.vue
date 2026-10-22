<template>
  <material-snackbar
    v-model="showSnackbar"
    :type="color"
    :timeout="timeout"
    v-bind="{
      ['bottom']: true,
      ['right']: true,
    }"
  >
    {{ text }}
  </material-snackbar>
</template>

<script>
  import { sync } from 'vuex-pathify'
  export default {
    name: 'Snackbar',
    computed: {
      ...sync('snackbar', ['showSnackbar', 'color', 'text', 'timeout']),
    },
    created () {},
  }
</script>
