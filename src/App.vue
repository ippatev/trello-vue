<template>
  <div class="tasks">
    <h1>{{ title }}</h1>
    <task-list ref="taskListEl">
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
import { useDraggable } from "./composable/useDraggable";

const taskListEl = ref(null);
const { getNextEl } = useDraggable();

const title = "Trello";
const items = ref(["one", "two", "three"]);

const dragOverItem = ({ event }) => {
  const activeEl = taskListEl.value.$el.querySelector(".selected");
  const currEl = event.target;

  const isMoveable = activeEl !== currEl;

  if (!isMoveable) {
    return;
  }

  const nextEl = getNextEl(event.clientY, currEl);

  if (
    (nextEl && activeEl === nextEl.previousElementSibling) ||
    activeEl === nextEl
  ) {
    return;
  }

  taskListEl.value.$el.insertBefore(activeEl, nextEl);
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
