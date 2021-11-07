import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta';
import VuePageTransition from 'vue-page-transition'
import VueLazyload from 'vue-lazyload'
import VueWaveSurfer from 'vue-wave-surfer'


Vue.use(VueWaveSurfer)
Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: '/assets/img/lazyload/error.png',
  loading: '/assets/img/lazyload/puff.svg',
  attempt: 1
})

Vue.use(Meta);
Vue.use(VuePageTransition)

import { sync } from 'vuex-router-sync'

import './js/'
import './assets/scss/main.scss'

import router from './router'
import store from './store'

sync(store, router)


const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')