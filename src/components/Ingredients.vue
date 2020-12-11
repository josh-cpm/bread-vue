<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
    </div>
    <div class="gray-divider"></div>
    <div class="ingredient-list">
      <Ingredient
        v-for="(ingredient, index) in ingredients"
        :key="ingredient.randomKey"
        :bpercent="ingredient.qty / totalFlour"
        :index="index"
        v-model:name="ingredient.name"
        v-model:quantity="ingredient.qty"
        v-model:type="ingredient.type"
        @delete-ingredient="$emit('delete-ingredient', index)"
      ></Ingredient>
      <span @click="$emit('add-ingredient')" class="" id="add-ing-button"
        >+ Add Ingredient</span
      >
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
    totalFlour: Number,
  },

  methods: {
    logger(e) {
      console.log(e);
    },
  },
  created() {
    console.log(this.ingredients);
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

.gray-divider {
  height: 1px;
  background-color: #c4c4c4;
}

.tiptext {
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
