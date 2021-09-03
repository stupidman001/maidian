import Vue from 'vue'
import App from './App.vue'
import send from '@/utils/send.js'

Vue.config.productionTip = false
Vue.directive('send',send)

new Vue({
  render: h => h(App),
}).$mount('#app')
