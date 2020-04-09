import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import Vuex from 'vuex'

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)

function creatApp() {
  console.log(window.MYCONFIG)
  new Vue({
    render: h => <App />,
  }).$mount('#app')
}

window.onload = creatApp
