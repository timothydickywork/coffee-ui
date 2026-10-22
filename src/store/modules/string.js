// Pathify
import { make } from 'vuex-pathify'

const state = {
    menu: {
        dashboard: {
            title: 'Dashboard',
            to: '/new',
            icon: 'mdi-view-dashboard',
        },
        store: {
            title: 'Store',
            icon: 'mdi-store',
            to: '/tables/store/',
        },
    },
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
