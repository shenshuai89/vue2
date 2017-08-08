import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Childa from '@/components/Childa'
import Childb from '@/components/Childb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    //  一级路由下path要添加/, 在children的子路由中path不需要添加/
    {
      path: '/childa',
      name: 'childa',
      component: Childa
    },
    {
      path: '/childb',
      name: 'Childb',
      component: Childb
    }
  ]
})
