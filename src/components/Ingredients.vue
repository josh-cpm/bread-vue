<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
      <span class="tiptext">Tap to edit</span>
    </div>
    <div class="ingredient-list">
      <Ingredient></Ingredient>
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
};
</script>

<style scoped></style>
