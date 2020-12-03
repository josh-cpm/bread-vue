<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
    </div>
    <div class="ingredient-list">
      <Ingredient
        v-for="ingredient in ingredients"
        :key="ingredient.title"
        v-model:name="ingredient.name"
        v-model:quantity="ingredient.qty"
        v-model:type="ingredient.type"
        :bpercent="0"
      ></Ingredient>
      <span class="" id="add-ing-button">+ Add Ingredient</span>
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
#add-ing-button {
  margin-top: 1rem;
}

.ingredient-list {
  display: flex;
  flex-direction: column;
  max-width: 25rem;
}

.tiptext {
  /* font-family: Monaco; */
  font-size: 0.7rem;
  color: #6f6f6f;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  max-width: 20rem;
}
</style>
