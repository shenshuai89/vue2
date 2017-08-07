//import Test from "../../components/user/test.vue"
//路由懒加载
//把路由对应的组件定义成异步组件：

export default {
    name: 'user/test',
    path: '/user/test',
    meta: {
        title: 'test'
    },
    component: r => {
        require.ensure(
            ['../../components/user/test.vue'],
            () =>  r(require('../../components/user/test.vue')) 
        )
    }
}
