<template>
  <div class="tasks">
    <h1>{{ title }}</h1>
    <task-list>
      <task-list-item
        v-for="(item, idx) of items"
        :key="idx"
        @dragover="dragOverItem($event, idx, item)"
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

const dragOverItem = ({ event }, idx) => {
  console.log(idx);
  // console.log("event ", event);
  const currEl = event.target;
  const nextEl =
    currEl === currEl.nextElementSibling ? currEl.nextElementSibling : currEl;
  console.log(nextEl);
  // items.value[idx - 1] = currentItem;
};
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
