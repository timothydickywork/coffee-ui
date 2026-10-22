// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
    showSnackbar: false,
    text: 'text',
    color: 'info',
    timeout: -1,
}

const mutations = {
    ...make.mutations(state),
    SHOW_MESSAGE: (state, payload) => {
        state.text = payload.text
        state.color = payload.color
        state.timeout = payload.timeout
        state.showSnackbar = true
    },
}

const actions = {
    showSnackbar ({ commit }, payload) {
        commit('SHOW_MESSAGE', payload)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
