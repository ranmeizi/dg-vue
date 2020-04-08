import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'
import './App.less'

export const router = new VueRouter({
  routes
})
Vue.use(VueRouter)

export default {
  name: 'App',
  router,
  render(h) {
    return <div id="app">
      <router-view></router-view>
    </div>
  }
}
