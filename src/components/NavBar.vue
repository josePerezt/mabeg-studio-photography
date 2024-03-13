<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <h1>MABEG</h1>
    <ul>
      <RouterLink to="/" class="li">Home</RouterLink>
      <RouterLink to="/porfolio" class="li">Porfolio</RouterLink>
      <RouterLink to="/about" class="li">About</RouterLink>
      <RouterLink to="/client" class="li">Client</RouterLink>
      <RouterLink to="/contact" class="li">Contact</RouterLink>
    </ul>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 6vh;
  padding: 8px;
  background-color: rgb(49, 49, 109);
}
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

ul {
  width: 50%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.li {
  text-decoration: none;
  color: rgb(0, 153, 255);
}
.li:hover {
  color: rgb(0, 100, 255);
}

.li:focus {
  text-decoration: dotted;
  color: blue;
}
</style>
