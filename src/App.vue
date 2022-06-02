<template>
  <main id="app">
    <header>
      <h1>Tienda 32 Bits</h1>
    </header>
    <section>
      <h2>Lista de juegos</h2>
      <table-games />
    </section>
  </main>
</template>

<script>
import TableGames from "./components/tableGames.vue";

export default {
  name: "App",
  components: { TableGames },
};
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>