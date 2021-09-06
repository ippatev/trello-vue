<template>
  <div
    class="tasks__item"
    :class="{ selected }"
    :draggable="true"
    @dragstart="selected = true"
    @dragend="selected = false"
    @dragover.prevent="dragOverHandler($event)"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineEmit } from "vue";

const emit = defineEmit(["dragover"]);

const selected = ref(false);
const dragOverHandler = (event) => {
  emit(event);
};
</script>

<style>
.tasks__item {
  transition: background-color 0.5s;
  margin-bottom: 10px;
  padding: 5px;

  text-align: center;
  border: 2px dashed #b2d9d0;
  border-radius: 10px;
  cursor: move;
  background-color: #dff2ef;

  transition: background-color 0.5s;
}

.tasks__item:last-child {
  margin-bottom: 0;
}

.selected {
  /* background-color: red; */
  opacity: 0.6;
}
</style>
