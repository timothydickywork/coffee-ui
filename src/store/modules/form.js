// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
    showForm: false,
    showFormDelete: false,
}

const mutations = make.mutations(state)

const actions = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
