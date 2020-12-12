<template>
  <div>
    <div class="section-header">
      <h3>INGREDIENTS</h3>
      <div class="tiptext">
        Tap any ingredient to edit it. Feel free to add your own, or weak the
        recipe as desired.
      </div>
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
      <div>
        <button
          @click="$emit('add-ingredient')"
          class="black-cta"
          id="add-ing-button"
        >
          Add Ingredient
        </button>
      </div>
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
};
</script>

<style scoped>
.ingredient-list {
  display: flex;
  flex-direction: column;
}

.gray-divider {
  height: 1px;
  background-color: #c4c4c4;
}

.tiptext {
  font-size: 0.7rem;
  color: #6f6f6f;
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 0.5rem;
}

.black-cta {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.3em 0.6em;
  height: fit-content;
  color: white;
  border: 1px solid black;
  background: black;
  cursor: pointer;
  font-size: 1rem;
}
</style>
