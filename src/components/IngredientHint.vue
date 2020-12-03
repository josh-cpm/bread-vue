<template>
  <div v-if="tip" class="ingredient-editor-hint">
    <img
      class="ingredient-editor-tiptext-icon"
      src="info-icon.svg"
      alt="Ingredient info icon"
    />
    <span class="ingredient-editor-tiptext">{{ tip }} </span>
  </div>
</template>

<script>
export default {
  name: 'IngredientHint',
  props: {
    selectedField: String,
  },
  computed: {
    tip() {
      switch (this.selectedField) {
        case 'qty':
          return `Changing the ingredient amount will not scale any other ingredients.`;
        case 'bpct':
          return `Changing the bakers percentage will keep the other ingredients proportional. `;
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
.ingredient-editor-hint {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}

.ingredient-editor-tiptext {
  font-size: 0.7rem;
  color: #7e8c79;
  margin-left: 0.5rem;
}
</style>
