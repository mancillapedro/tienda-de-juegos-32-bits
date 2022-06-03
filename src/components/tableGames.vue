<template>
  <section id="tableGames">
    <table>
      <thead>
        <tr>
          <th v-for="(key, i) in keysGame" :key="i" v-text="capitalize(key)" />
          <th v-text="`Acciones`" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.codigo">
          <td
            v-for="(key, i) in keysGame"
            :key="i"
            :style="{ color: game.color }"
          >
            <select v-if="key == 'color'" @change="changeColor(game, $event)">
              <option
                v-for="(color, indexColor) in colorsGames"
                :key="indexColor"
                :selected="game.color == color"
                :value="color"
                v-text="capitalize(dictionaryColors[color])"
              />
            </select>
            <template v-else>{{ parseText(game, key) }}</template>
          </td>
          <td>
            <button @click.stop="incrementStock(game.codigo)" v-text="`+`" />
            <button @click.stop="decrementStock(game.codigo)" v-text="`-`" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "tableGames",
  computed: {
    ...mapState(["games", "dictionaryColors", "colorsGames"]),
    ...mapGetters(["keysGame"]),
  },
  methods: {
    ...mapActions(["incrementStock", "decrementStock", "changeColor"]),
    changeColor(game, event) {
      this.$store.dispatch("changeColor", {
        codigo: game.codigo,
        color: event.target.value,
      });
    },
    parseText(game, key) {
      return key == "precio"
        ? "$" + Number(game[key]).toLocaleString("es-CL")
        : game[key];
    },
    capitalize(word) {
      return word.replace(/^[a-z]/g, (s) => s.toUpperCase());
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