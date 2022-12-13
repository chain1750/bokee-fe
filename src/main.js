import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api'

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdPreview);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
