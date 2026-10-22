<template>
  <v-text-field
    placeholder="Search"
    color="secondary"
    hide-details
    style="max-width: 320px"
  >
    <template
      v-if="$vuetify.breakpoint.mdAndUp"
      v-slot:append-outer
    >
      <v-btn
        fab
        small
        elevation="2"
        height="44"
        width="44"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
  export default {
    name: 'DefaultSearch',
  }
</script>
