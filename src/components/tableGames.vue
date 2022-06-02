<template>
  <table id="tableGames">
    <thead>
      <tr>
        <th v-for="(key, i) in headTable" :key="i" v-text="key" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="(game, i) in juegos" :key="i">
        <td
          v-for="(key, j) in keysGame"
          :key="j"
          :style="{ color: game.color }"
          v-text="parseText(game, key)"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "tableGames",
  computed: {
    ...mapState(["juegos"]),
    ...mapGetters(["keysGame"]),
    headTable() {
      return this.keysGame.map((key) =>
        key.replace(/^[a-z]/, (s) => s.toUpperCase())
      );
    },
  },
  methods: {
    parseText(game, key) {
      return key == "precio"
        ? "$" + Number(game[key]).toLocaleString("es-CL")
        : game[key];
    },
  },
};
</script>

<style scoped>
table {
  min-width: 50%;
  margin: 0 auto;
}
table,
th,
td {
  border: 1px solid black;
}
</style>