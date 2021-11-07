//index.js
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import { state } from './state.js'
import { getters } from './getters.js'
import { actions } from './actions.js'
import { mutations } from './mutations.js'


Vue.prototype.$axios = Axios;

const token = localStorage.getItem('token');

if (token) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  
})