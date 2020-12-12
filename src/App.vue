<template>
  <div class="recipe-layout">
    <section class="recipe-container">
      <Header
        v-model:recipeTitle="recipeTitle"
        v-model:recipeDescription="recipeDescription"
      ></Header>
      <div class="spacer"></div>
      <Summary
        v-model:numLoaves="numLoaves"
        :hydration="hydration"
        :loafMass="singleLoafMass"
        :doughMass="doughMass"
        @changeloafnum="changeLoafNum"
        @changeloafmass="changeLoafMass"
        @changeloafhydration="changeLoafHydration"
      ></Summary>
      <div class="spacer"></div>
      <Ingredients
        :ingredients="ingredientsWithKey"
        :totalFlour="totalFlour"
        @delete-ingredient="deleteIngredient"
        @add-ingredient="addIngredient"
      ></Ingredients>
      <div class="spacer"></div>
      <Method :steps="steps"></Method>
    </section>
  </div>
</template>

<script>
import Method from './components/Method.vue';
import Header from './components/Header';
import Summary from './components/Summary';
import Ingredients from './components/Ingredients';
import { recipe } from './modules/recipeData';

export default {
  name: 'App',
  components: {
    Method,
    Header,
    Summary,
    Ingredients,
  },
  data() {
    return {
      recipeTitle: recipe.recipeInfo.title,
      recipeDescription: recipe.recipeInfo.description,
      steps: recipe.steps,
      ingredients: recipe.ingredients,
      numLoaves: 1,
    };
  },
  computed: {
    ingredientsWithKey() {
      let ing = this.ingredients;
      ing.forEach((e) => (e.randomKey = Math.random()));
      return ing;
    },
    hydration() {
      return this.totalLiquid / this.totalFlour;
    },
    totalLiquid() {
      return this.ingredients
        .filter((e) => e.type === 'liquid')
        .reduce((acc, cur) => acc + cur.qty, 0);
    },
    totalFlour() {
      return this.ingredients
        .filter((e) => e.type === 'flour')
        .reduce((acc, cur) => acc + cur.qty, 0);
    },
    singleLoafMass() {
      return Math.round(
        this.ingredients.reduce((acc, cur) => acc + cur.qty, 0) / this.numLoaves
      );
    },
    doughMass() {
      return Math.round(
        this.ingredients.reduce((acc, cur) => acc + cur.qty, 0)
      );
    },
  },
  methods: {
    deleteIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    addIngredient() {
      this.ingredients.push({ qty: 0 });
    },
    changeLoafNum(newNumber) {
      const factor = newNumber / this.numLoaves;
      this.ingredients.forEach((e) => (e.qty *= factor));
    },
    changeLoafMass(mass) {
      const factor = mass / this.singleLoafMass;
      this.ingredients.forEach((e) => (e.qty *= factor));
    },
    changeLoafHydration(hydration) {
      // Note, this changes bakers hydration ONLY. It leaves
      const liquidAndFlour = this.totalLiquid + this.totalFlour;
      const newTotalFlour = liquidAndFlour / (1 + hydration);
      const flourFactor = newTotalFlour / this.totalFlour;
      const liquidFactor = (liquidAndFlour - newTotalFlour) / this.totalLiquid;

      this.ingredients.forEach((e) => {
        if (e.type === 'flour') e.qty *= flourFactor;
        if (e.type === 'liquid') e.qty *= liquidFactor;
      });
    },
    logger(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.recipe-layout {
  display: grid;
  grid-template-columns: 0.5rem 100fr 0.5rem;
  justify-items: center;
}

.recipe-container {
  grid-column: 2;
  min-width: 15rem;
  max-width: 30rem;
}

.spacer {
  height: 2rem;
}

.white-cta {
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
}
</style>
