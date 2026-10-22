<template>
  <v-container>
    <form-store
      v-if="title === 'Store'"
      :close="close"
      :save="save"
    />
  </v-container>
</template>
<script>
  export default {
    name: 'FormRouter',
    components: {
      formStore: () => import('../modules/store/StoreForms.vue'),
    },

    props: {
      title: {
        type: String,
        required: true,
      },
      close: {
        type: Function,
        required: true,
      },
      save: {
        type: Function,
        require: true,
      },
    },
    created () {},
  }
</script>
