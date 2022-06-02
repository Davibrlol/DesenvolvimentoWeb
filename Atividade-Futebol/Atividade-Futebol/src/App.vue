<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import RodapeComp from "@/components/template/RodapeComp.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
  <RodapeComp />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;

  font-weight: normal;
}

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
