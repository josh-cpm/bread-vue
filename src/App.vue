<template>
  <Header
    :recipeTitle="recipeTitle"
    :recipeDescription="recipeDescription"
  ></Header>
  <Summary></Summary>
  <Ingredients></Ingredients>
  <Method></Method>
</template>

<script>
import Method from './components/Method.vue';
import Header from './components/Header';
import Summary from './components/Summary';
import Ingredients from './components/Ingredients';

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
      recipeTitle: 'Basic Sourdough',
      recipeDescription: 'My go-to weekday loaf.',
    };
  },
};
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
}
</style>
