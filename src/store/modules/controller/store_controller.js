// Utilities
import { make } from 'vuex-pathify'
import { fetchList, saveStore, updateStore, deleteStore } from '../../../request/store_request'
import form from '../form'

const state = {
  data: [],
  selected: {
    id: -1,
    name: '',
    phone: '',
    address: '',
  },
  default: {
    id: -1,
    name: '',
    phone: '',
    address: '',
  },
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),

  fetch: ({ state }) => {
    fetchList().then((response) => {
      state.data = response.data
    })
  },

  select: (state, payload) => {
    state.data.select = payload
  },

  delete: ({ state }) => {
    deleteStore(state.selected.id).then(() => {
    })
  },

  saveStore: ({ dispatch, state }) => {
    saveStore(state.selected).then(() => {
      console.log('diadd')
      form.state.showForm = false
      state.selected = state.default
      dispatch('fetch')
    })
  },

  updateStore: ({ dispatch, state }) => {
    console.log('diupdate')
    console.log(state.selected)
    updateStore(state.selected).then(() => {
      form.state.showForm = false
      state.selected = state.default
      dispatch('fetch')
    })
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
