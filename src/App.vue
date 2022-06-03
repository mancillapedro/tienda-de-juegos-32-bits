<template>
  <main id="app">
    <header>
      <h1 v-text="`Tienda 32 Bits`" />
    </header>
    <section>
      <h2 v-text="`Lista de juegos`" />
      <table-games />
      <h3 v-text="textTotalGames" />
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import TableGames from "./components/tableGames.vue";

export default {
  name: "App",
  components: { TableGames },
  computed: {
    ...mapGetters(["totalGames"]),
    textTotalGames() {
      return `Total: ${this.totalGames} juego${
        this.totalGames != 1 ? "s" : ""
      }`;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
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