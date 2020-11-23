<template>
  <Header
    :recipeTitle="recipeTitle"
    :recipeDescription="recipeDescription"
  ></Header>
  <Summary></Summary>
  <Ingredients :ingredients="ingredients"></Ingredients>
  <Method></Method>
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
    };
  },
};
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
}

.white-cta {
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
}
</style>
