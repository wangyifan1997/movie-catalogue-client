import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

axios.interceptors.response.use((response) => {
  return {
    isSuccess: true,
    data: response.data,
  }
}, (error) => {
  if (error.response) {
    return {
      isSuccess: false,
      reason: `${error.response.status}: ${error.response.statusText}`,
    };
  } else if (error.request) {
    return {
      isSuccess: false,
      reason: 'The request was made but no response was received',
    };
  } else {
    return {
      isSuccess: false,
      reason: error.message,
    };
  }
});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  render: h => h(App),
}).$mount('#app');


