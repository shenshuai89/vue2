import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Url from '@/components/Url'
import Hook from '@/components/Hook'
import Err404 from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/hi',
      component:Hi,
      children:[
        {path:'/',name:'Hi',component:Hi},
        {path:'hi1',name:'Hi1',component:Hi1},
        {path:'hi2',name:'Hi2',component:Hi2}
      ],
      alias:'/alis'
    },
    {
      path:'/params',
      name:'params',
      component:Params
    },
    {
      path:'/left',
      components:{
        default:Hello,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path:'/right',
      components:{
        default:Hello,
        left:Hi2,
        right:Hi1
      }
    },
    {
      path:'/url/:newsid/:newsTitle',
      name:'url',
      component:Url
    },
    {
      path:'/redirect',
      redirect:'/'
    },
    {
      path:'/hook',
      component:Hook
    },
    {
      path:'*',
      component:Err404
    }
  ]
})
