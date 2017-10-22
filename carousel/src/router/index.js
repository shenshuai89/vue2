import Vue from 'vue'
import Router from 'vue-router'
import Carousel1 from '@/components/Carousel'
import Carousel2 from '@/components/Carousel2'
import Carousel3 from '@/components/Carousel3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Carousel1',
      component: Carousel1
    },
    {
      path: '/second',
      name: 'Carousel2',
      component: Carousel2
    },
    {
      path: '/third',
      name: 'Carousel3',
      component: Carousel3
    }
  ]
})
