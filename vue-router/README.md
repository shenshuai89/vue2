# route

> vue router get start

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
## Hi 组件
> 通过访问/hi,跳转至Hi组件

## Hi1，Hi2 组件---子路由
> 设置Hi组件的子组件，需要在Hi组件中添加<router-view></router-view>
> Hi1和Hi2组件会显示在Hi组件中

## params 组件---通过name进行传参
> 通过在router-link中绑定 :to="{name:'params',params:{username:'sam',id:'10001'}}",就可以在vue页面文件中访问到{{$route.params.username}}数据

## left和right 组件---单页面多路由显示
> 可以在一个页面设置多个router-view，添加name属性进行不同的显示

## Url 组件---url传参
> 通过设置url路径传参<router-link to="/url/110/police">url</router-link>

## redirect ---重定向
> 重定向设置跳转，可以跳转到redirect设置的页面，路径是显示页面的路径

## alias --- 别名
> 别名进行页面跳转，路径还是别名的路径，页面显示到新的页面

## hook --- 钩子
> 在vue页面中设置，
```
	beforeRouteEnter:(to,from,next)=>{
      console.log(to)
      console.log(from)
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log(to)
      console.log(from)
      console.log("准备离开路由模板");
      next();
    }
```

## Error 组件---找不到页面是显示
## 编程式导航
> 在js编程的过程中，希望对页面跳转进行控制。
```
	this.$router.go(-1);
	this.$router.push('/url/666/setUrl')
```

