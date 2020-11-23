<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
      <span class="tiptext">Tap to edit</span>
    </div>
    <div class="ingredient-list">
      <Ingredient
        v-for="ingredient in ingredients"
        :key="ingredient.title"
        v-bind:name="ingredient.name"
        v-bind:quantity="ingredient.qty"
        v-bind:type="ingredient.type"
        :bpercent="0"
      ></Ingredient>
      <span class="white-cta" id="add-ing-button">+ Add Ingredient</span>
    </div>
  </div>
</template>

<script>
import Ingredient from './Ingredient';

export default {
  name: 'Ingredients',
  components: {
    Ingredient,
  },
  props: {
    ingredients: Array,
  },
};
</script>

<style scoped>
.ingredient-list {
  display: flex;
  flex-direction: column;
  max-width: 25rem;
}
</style>
