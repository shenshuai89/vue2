## vue-router module
> 在路由非常多的情况下，如何对路由进行模块拆分？
> 比如有100个路由，我想将这100个路由分成A，B，C，D，E，五组放在a.js, b.js, c.js, d.js, e.js五个分路由文件中，每个文件只写20个路由，然后通过一个总的router.js将这5个分路由整合成一个。

在components下创建user文件夹，然后创建Home.vue、messge.vue、test.vue三个组件
在router文件下创建user文件夹，里面新建home.js、index.js、message.js、test.js三个分支路由和一个总的路由index.js文件。

先在user/index.js中汇总一块
```
import Index from './home'
import Message from './message'
import Test from './test'
export default [
    Index,
    Message,
    Test
]
```

然后使用
```
export default new Router({
  routes: [
    ...User
  ]
})
```
导入router/index.js

![](https://github.com/shenshuai89/vue2/blob/master/moduleVueRouter/static/20170424111424.jpg)
![](https://github.com/shenshuai89/vue2/blob/master/moduleVueRouter/static/201704241115091111111.jpg)
![](https://github.com/shenshuai89/vue2/blob/master/moduleVueRouter/static/2017042411145522222222.jpg)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
