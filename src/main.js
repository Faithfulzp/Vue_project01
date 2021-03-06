import Vue from 'vue'
import App from './App.vue'
// 引入store文件
import store from './store'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
Vue.config.productionTip = false

Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  //引入路由器
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;//绑定全局事件总线
  },
})
