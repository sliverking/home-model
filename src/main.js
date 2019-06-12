// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //手动变红
import '../node_modules/element-ui/lib/theme-chalk/index.css' //手动变红

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI) //手动变红

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
