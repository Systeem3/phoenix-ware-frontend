import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import auth from './modules/auth/auth'
import password from './modules/auth/password'
import signup from './modules/auth/signup'
//import * as users from './modules/users'
import users from './modules/users'
import * as notification from './modules/notification'
import profile from './modules/profile'

//import * as user from '@/store/modules/user.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//const debug = true

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage:
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    SET_SCRIM(state, payload) {
      state.barColor = payload
    },
  },
  modules: {
    auth,
    password,
    signup,
    users,
    notification,
    profile,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
