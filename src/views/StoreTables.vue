<template>
  <v-container
    id="store-table-view"
    fluid
    tag="section"
  >
    <snackbar-custom />
    <progress-custom />
    <view-intro
      :heading="store.title"
      :link="store.to"
    />

    <data-table
      :title="store.title"
      :headers="headers"
      :data="data"
      :edit-item="editItem"
      :delete-item="deleteItem"
      :delete-item-confirm="deleteItemConfirm"
      :close="close"
      :save="save"
      :fetch="fetch"
    />

    <div class="py-3" />
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'
  import { get, sync } from 'vuex-pathify'
  // import { loadDark } from '../util/helpers'

  export default {
    name: 'StoreTables',

    components: {
      DataTable: () => import('../components/app/Table.vue'),
      SnackbarCustom: () => import('../components/app/SnackbarCustom.vue'),
      ProgressCustom: () => import('../components/app/ProgressCustom.vue'),
    },

    data: () => ({
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Address', value: 'address', sortable: false },
        { text: 'Contact Number', value: 'phone', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }),

    computed: {
      ...get('string', ['menu@store']),
      ...get('store', ['default']),
      ...sync('store', ['data', 'selected']),
      ...sync('form', ['showForm', 'showFormDelete']),
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.close()
      },
    },

    created () {
      this.fetch()
    },

    methods: {
      close () {
        this.showForm = false
        this.showFormDelete = false
        this.$nextTick(() => {
          this.selected = Object.assign({}, this.default)
        })
      },
      save () {
        console.log(this.selected)
        if (this.selected.id === -1) {
          this.saveStore()
        } else {
          this.updateStore()
        }
      },
      editItem (item) {
        // this.selected = item
        this.selected = Object.assign({}, item)
        this.showForm = true
      },
      deleteItem (item) {
        this.selected = Object.assign({}, item)
        this.showFormDelete = true
      },
      deleteItemConfirm () {
        this.delete()
        this.close()
        this.fetch()
      },
      loadAgain () {
        this.fetch()
      },
      ...mapActions('store', ['fetch', 'saveStore', 'updateStore', 'delete']),
      ...mapActions('snackbar', ['showSnackbar']),
    },
  }
</script>
