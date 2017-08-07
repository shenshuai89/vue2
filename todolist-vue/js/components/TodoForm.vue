<template>
<form v-on:submit.prevent="addTodo(newTodo)">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="add a task" v-model="newTodo.title">
            </div>
            <div class="form-group">
                <button class="btn btn-success" type="submit">ADD TODO</button>
            </div>
        </form>
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
name:'todo-form',
    props:['todos'],
    data(){
        return {
            newTodo:{
                id:null,title:'',completed:false
            }
        }
    },

    methods:{
        addTodo(newTodo){
            this.todos.push(newTodo);
            this.newTodo = {id:null, title:'',completed:false}
        }
    }
}
</script>
