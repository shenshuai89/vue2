// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import VueRouter from 'vue-router'  
Vue.use(VueRouter)  

//import routes from './config/routes' 
import index from './page/index.vue'
import list from './page/list.vue' 
import first from './page/first.vue' 
import second from './page/second.vue' 
import third from './page/third.vue' 

const router = new VueRouter({  
  mode: 'history',  
  base: __dirname,  
  routes: [
   {  path: '/',component: index },  
   {  path: '/list',component: list,
   		children:[
   			{path: '/first',component: first},
   			{path: '/second',component: second},
   			{path: '/third',component: third}
   		]	
	}
   //{  path: '/list/first',component: first}
   ]
})  

/* eslint-disable no-new */
const app = new Vue({
  router,
  /*template: '<App/>',
  components: { App }*/
  render:x => x(App)
}).$mount('#app')
