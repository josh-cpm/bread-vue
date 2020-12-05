<template>
  <Header
    :recipeTitle="recipeTitle"
    :recipeDescription="recipeDescription"
  ></Header>
  <div class="spacer"></div>
  <Summary></Summary>
  <div class="spacer"></div>
  <Ingredients :ingredientsList="ingredients"></Ingredients>
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
      ingredients: recipe.ingredients,
      steps: recipe.steps,
    };
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
