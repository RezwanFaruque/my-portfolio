import Vue from 'vue'
import App from './App.vue'

// loading bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// loading sass preprocessor
import './assets/index.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
