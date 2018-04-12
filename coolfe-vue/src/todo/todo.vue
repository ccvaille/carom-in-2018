<template>
  <section>
      <input type="text"
    autofocus
    placeholder="接下来做什么"
    @keyup.enter="addTodo"
      >
  <item
    :todo="todo"
    v-for="todo in todos" 
    :key="todo.id"
    @del="deleteTodo"
  />
  <tab :filter="filter"></tab>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tab from "./tabs.vue";
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    Tab
  },
  methods: {
      // 添加 todo
    addTodo(e) {
        this.todos.unshift({
            id: id++,
            content:e.target.value.trim(),
            completed: false
        });
        e.target.value = ''
    },

    // 删除 todo
    deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
    }
  }
};
</script>

