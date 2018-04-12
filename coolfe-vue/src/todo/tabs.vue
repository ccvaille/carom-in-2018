<template>
  <div><span v-for="state in state" :key="state" @click="toggleFilter(state)">{{state}}</span></div>
</template>

<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        }
    },
  data() {
    return {
      state: ["all", "active", "completed"]
    };
  },
  methods: {
      toggleFilter() {}
  }
};
</script>

