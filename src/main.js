import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

// Languge
import VueI18n from 'vue-i18n'
import { i18n } from './plugins/i18n'

// Font Awsome Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Product from './Product.vue'
import addBlog from './blogs/addBlog.vue'
import Profile from './profile/Profile.vue'
import showBlog from './blogs/showBlog.vue'
import singleBlog from './blogs/singleBlog.vue'
import viewProfile from './profile/viewProfile.vue'
import VueResource from 'vue-resource'
// Vue Icon
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// Vue i18n
Vue.use(VueI18n)
// Vue Resource
Vue.use(VueResource)
Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/product', component: Product },
  { path: '/addBlog', component: addBlog },
  { path: '/profile', component: Profile },
  { path: '/showblog', component: showBlog },
  { path: '/blog/:id', component: singleBlog },
  { path: '/viewprofile', component: viewProfile },

];

const router = new VueRouter({
  routes,
  mode: 'history'
})

//Filter
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});
Vue.filter('snippet', function (value) {
  return value.slice(0, 1000) + '...';
})

new Vue({
  el:'#app',
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
