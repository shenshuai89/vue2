<template>
    <div id="app">
        <h1>{{ message }} {{ todoCount }}</h1>
        <todo-list :todos="todos"></todo-list>
        <todo-form :todos="todos"></todo-form>
    </div>
</template>

/*Vue.component('Heading',require('./components/heading.vue'));
 Vue.component('Todos',require('./components/Todos.vue'));
 Vue.component('TodoForm',require('./components/TodoForm.vue'));*/


<script>
import Heading from './components/heading.vue';
import TodoList from './components/Todos.vue';
import TodoForm from './components/TodoForm.vue';


export default {
    name:'app',
        data(){
        return{
            message:'MyTodos',
            todos:[
                { id:1, title:'learning',completed:false},
                { id:2, title:'walking',completed:true}
            ]
        }
    },
    computed:{
        todoCount(){
            return this.todos.length;
        }
    },
    components:{
        Heading,TodoList,TodoForm
    }
}

</script>
