import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';

Vue.use(VueDPlayer);

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
