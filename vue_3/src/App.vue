<template>
  <TodoHeader> </TodoHeader>
  <TodoInput @add="addTodoItem"> </TodoInput>
  <TodoList :todoItems="todoItems" @remove="romoveTodoItem"></TodoList>
</template>

<script>
import { ref } from 'vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    // data
    const todoItems = ref([]);

    // methods
    function fetchTodos() {
      // 메소드는 data와 연관없는게 좋다.
      const result = [];

      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        // items.value.push(todoItem);
        result.push(todoItem);
      }
      return result;
    }

    todoItems.value = fetchTodos();

    function addTodoItem(todo) {
      console.log(todo);
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    return { todoItems, addTodoItem };
  },
  methods: {
    romoveTodoItem(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    },
  },
};
</script>

<style scoped></style>
