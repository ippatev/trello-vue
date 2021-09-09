<template>
  <div class="tasks__list">
    <span>{{ msg }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps(["msg"]);
</script>

<style>
.tasks__list {
  margin: 0;
  padding: 0;

  list-style: none;
}
</style>