import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import firebase from 'firebase/app';

import firebaseConfig from './config/firebase';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
