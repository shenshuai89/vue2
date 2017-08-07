/**
 * Created by Administrator on 2016/12/10.
 */
import Vue from 'vue';
import App from './App.vue';


/*Vue.component('Heading',require('./components/heading.vue'));
 Vue.component('Todos',require('./components/Todos.vue'));
 Vue.component('TodoForm',require('./components/TodoForm.vue'));*/

/*template:'<App></App>',
 components:{
 App
 }*/
new Vue({
    el:"#app",
    render:x => x(App)
});
