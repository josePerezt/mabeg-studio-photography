<script setup>
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
