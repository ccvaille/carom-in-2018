<template>
  <div>
      <input type="checkbox"
        v-model="todo.completed"
      >
      <label for="">{{todo.content}}</label>
      <button @click="deleteTodo">deleteTodo</button>
  </div>
</template>

<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true,
      }
  },
  methods: {
      deleteTodo() {
          this.$emit('del',this.todo.id)
      }
  }
}
</script>

