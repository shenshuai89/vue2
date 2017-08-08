import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import DetailPage from '../pages/Detail.vue'
import OrderList from '../pages/OrderList.vue'
import CountPage from '../pages/detail/count.vue'
import ForecastPage from '../pages/detail/forecast.vue'
import AnalysisPage from '../pages/detail/analysis.vue'
import PublishPage from '../pages/detail/publish.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children:[
        {
          path: 'count',
          component: CountPage
        },
        {
          path: 'forecast',
          component: ForecastPage
        },
        {
          path: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          component: PublishPage
        },
      ]
    },{
      path: '/orderList',
      name: 'Index',
      component: OrderList
    }
  ]
})
