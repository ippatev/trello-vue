<template>
  <div class="tasks">
    <h1>{{ title }}</h1>
    <task-list>
      <task-list-item v-for="(item, idx) of items" :key="idx"
        >{{ item }}
      </task-list-item>
    </task-list>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import TaskList from "@/components/TaskList.vue";
import TaskListItem from "@/components/TaskListItem.vue";

const title = "Trello";
const items = ref(["one", "two", "three"]);
</script>

<style>
body {
  max-width: 500px;
  font-family: "Tahoma", sans-serif;
  font-size: 18px;
  line-height: 25px;
  color: #164a44;
  margin: auto;
  background-color: #b2d9d0;
}
</style>
