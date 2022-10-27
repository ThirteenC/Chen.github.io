import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css

Vue.use(ElementUI);
Vue.config.productionTip = false

// 解决路由冗余抛错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
