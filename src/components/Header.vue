<template>
  <h1 class="recipe-title">{{ recipeTitle }}</h1>
  <p class="recipe-description">{{ recipeDescription }}</p>
</template>

<script>
export default {
  name: 'Header',
  props: {
    recipeTitle: String, // add to parent later & make variable in template
    recipeDescription: String, // add to parent later
  },
};
</script>

<style scoped></style>
