import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import storeConfig from './store'

import App from './App.vue'
import Home from './Home.vue'
import Weather from './Weather.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/Weather', component: Weather
    }
  ]
})

Vue.use(Vuex)
const store = new Vuex.Store(storeConfig)
window.store = store


new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
