// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
    showProgressbar: false,
    text: 'text',
}

const mutations = {
    ...make.mutations(state),
    SHOW_PROGRESS: (state, payload) => {
        state.text = payload.text
        state.showProgressbar = true
    },
    CLOSE_PROGRESS: (state, payload) => {
        state.text = 'text'
        state.showProgressbar = false
    },
}

const actions = {
    showProgressbar ({ commit }, payload) {
        commit('SHOW_PROGRESS', payload)
    },
    close ({ commit }) {
        commit('CLOSE_PROGRESS')
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
