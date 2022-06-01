<script setup></script>

<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> Home </span>
      <span> | </span>
      <span> Times </span>
      <span> | </span>
      <span> Jogadores </span>
    </div>
    <div class="menu-direito">
      <span class="">Sair</span>
    </div>
  </header>
  <RouterView />
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
header span {
  padding: 0 20px;
}
header.menu-superior {
  justify-content: space-between;
}
</style>
