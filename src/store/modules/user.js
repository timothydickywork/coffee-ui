// Utilities
import { make } from 'vuex-pathify'

// Globals
import { IN_BROWSER } from '@/util/globals'

const state = {
  dark: false,
  drawer: {
    image: 0,
    gradient: 0,
    mini: false,
  },
  gradients: [
    'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)',
    'rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)',
  ],
  images: [
    'https://www.macleans.ca/wp-content/uploads/2021/05/COFFEE-LIBERICA-DHOPADE-MAY2.jpg',
    'https://kpmsegara.id/wp-content/uploads/2021/06/manfaat-ngopi.jpg',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxBeL51uEw1teS28FyYpUnh5jC4dwRNnyEg&usqp=CAU',
  ],
  notifications: [],
  rtl: false,
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  fetch: ({ commit }) => {
    const local = localStorage.getItem('vuetify@user') || '{}'
    const user = JSON.parse(local)

    for (const key in user) {
      commit(key, user[key])
    }
  },
  update: ({ state, dispatch }) => {
    if (!IN_BROWSER) return

    localStorage.setItem('vuetify@user', JSON.stringify(state))
  },
}

const getters = {
  dark: (state, getters) => {
    return (
      state.dark ||
      getters.gradient.indexOf('255, 255, 255') === -1
    )
  },
  gradient: state => {
    return state.gradients[state.drawer.gradient]
  },
  image: state => {
    return state.drawer.image === '' ? state.drawer.image : state.images[state.drawer.image]
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
