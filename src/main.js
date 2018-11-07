import Vue from 'vue'
import App from './App'
import router from './router'
import watch from './util/watch'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.watch = watch;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
