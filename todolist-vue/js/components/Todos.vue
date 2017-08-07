<template>
<ul class="list-group">
    <li class="list-group-item"
        v-bind:class="{ 'completed' : todo.completed }"
        v-for="(todo,index) in todos"> {{todo.title}}
        <button class="btn btn-xs pull-right"
            v-bind:class="[todo.completed ? 'btn-danger':'btn-success']"
            v-on:click="toggle(todo)">
        {{ todo.completed ? "undo":"completed"}}</button>
        <button class="btn btn-warning btn-xs pull-right mr10" v-on:click="deleteTodo(index)">Delete</button>
    </li>
</ul>
</template>
<style>
    .completed{
        text-decoration: line-through;
        color: red;
    }
    .mr10{
        margin-right: 10px;
    }
</style>
<script>
export default{
    name:'todo-list',
    props:['todos'],

    methods:{
        toggle(todo){
            todo.completed =! todo.completed;
        },
        deleteTodo(index){
            this.todos.splice(index,1);
        }
    }
}
</script>
