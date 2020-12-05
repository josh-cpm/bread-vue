<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
    </div>
    <div class="ingredient-list">
      <Ingredient
        v-for="(ingredient, index) in ingredients"
        :key="ingredient.title"
        :bpercent="0"
        :index="index"
        v-model:name="ingredient.name"
        v-model:quantity="ingredient.qty"
        v-model:type="ingredient.type"
        @delete-ingredient="deleteIngredient"
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
    ingredientsList: Array,
  },
  data() {
    return {
      ingredients: this.ingredientsList,
    };
  },
  methods: {
    deleteIngredient(index) {
      this.ingredients.splice(index, 1);
    },
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
