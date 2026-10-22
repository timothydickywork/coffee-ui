<template>
  <v-data-table
    :headers="headers"
    :items="data"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        />
        <!-- <v-spacer /> -->
        <v-dialog
          v-model="showForm"
          max-width="500px"
          persistent
        >
          <template v-slot:activator="{ on, attrs }">
            <search />
            <v-spacer />
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon> Add
            </v-btn>
          </template>
          <form-router
            :title="title"
            :close="close"
            :save="save"
          />
        </v-dialog>
        <v-dialog
          v-model="showFormDelete"
          max-width="500px"
        >
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete this item?
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="deleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2 warning--text"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        class="mr-2 error--text"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="fetch"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  import { sync } from 'vuex-pathify'
  import Search from '../../layouts/default/widgets/Search.vue'
  import FormRouter from '../../views/utils/FormRouter.vue'
  export default {
    name: 'Table',
    components: {
      Search,
      FormRouter,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      headers: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      },
      editItem: {
        type: Function,
        require: true,
      },
      deleteItem: {
        type: Function,
        require: true,
      },
      deleteItemConfirm: {
        type: Function,
        require: true,
      },
      close: {
        type: Function,
        require: true,
      },
      save: {
        type: Function,
        require: true,
      },
      fetch: {
        type: Function,
        require: true,
      },
    },
    data: () => ({
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      ...sync('form', ['showForm', 'showFormDelete']),
    },

    watch: {},

    created () {},

    methods: {},
  }
</script>
