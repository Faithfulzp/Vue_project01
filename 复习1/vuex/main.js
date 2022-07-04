import Vue from 'vue'
import App from './App.vue'
// 引入store文件
import store from './store'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;//绑定全局事件总线
  },
})
