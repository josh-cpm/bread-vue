<template>
  <Header
    :recipeTitle="recipeTitle"
    :recipeDescription="recipeDescription"
  ></Header>
  <div class="spacer"></div>
  <Summary
    v-model:numLoaves="numLoaves"
    :hydration="hydration"
    :loafMass="loafMass"
    @changeloafnum="changeLoafNum"
  ></Summary>
  <div class="spacer"></div>
  <Ingredients
    :ingredients="ingredientsWithKey"
    :totalFlour="totalFlour"
    @delete-ingredient="deleteIngredient"
  ></Ingredients>
  <div class="spacer"></div>
  <Method :steps="steps"></Method>
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
      const totalLiquid = this.ingredients
        .filter((e) => e.type === 'liquid')
        .reduce((acc, cur) => acc + cur.qty, 0);
      return totalLiquid / this.totalFlour;
    },
    totalFlour() {
      return this.ingredients
        .filter((e) => e.type === 'flour')
        .reduce((acc, cur) => acc + cur.qty, 0);
    },
    loafMass() {
      return this.ingredients.reduce((acc, cur) => acc + cur.qty, 0);
    },
  },
  methods: {
    deleteIngredient(index) {
      console.log(index);
      this.ingredients.splice(index, 1);
    },
    changeLoafNum(newNumber) {
      const factor = newNumber / this.numLoaves;
      this.ingredients.forEach((e) => (e.qty *= factor));
    },
    logger(e) {
      console.log(e);
    },
  },
};
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}

html {
  font-size: 20px;
}

h1 {
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}

h3 {
  font-size: 0.8rem;
}

#app {
  margin: 2rem 1rem;
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
