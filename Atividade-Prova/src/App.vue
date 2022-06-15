<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
<style>
@import "@/assets/style.css";

header,
footer {
  background-color: darkgray;
  height: 15%;
  color: bisque;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}

a {
  color: bisque;
  text-decoration: none;
}
</style>
