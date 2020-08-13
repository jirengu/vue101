import Vue from 'vue'
import VueRouter from 'vue-router'
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


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
