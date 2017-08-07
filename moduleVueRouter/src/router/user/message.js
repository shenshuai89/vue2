//import Message from "../../components/user/message.vue"
//把组件按组分块
//把某个路由下的所有组件都打包在同个异步 chunk 中。
//只需要给chunk 命名，提供 require.ensure 第三个参数作为 chunk 的名称:

export default {
    name: 'user/message',
    path: '/user/message',
    meta: {
        title: '消息'
    },
    component: r => require.ensure([], () => r(require('../../components/user/message.vue')), 'User')
}