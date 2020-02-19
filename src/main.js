import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

/*Router*/
import VueRouter from 'vue-router'


/*Router*/
Vue.use(VueRouter);
import {routes} from "./router/router";

/*Production Setting*/
Vue.config.productionTip = false;


const router = new VueRouter({
    // mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});


/*Render Components to the Template*/
new Vue({
  render: h => h(App),

  /*Router*/
  router: router

}).$mount('#app');