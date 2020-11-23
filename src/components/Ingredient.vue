<template>
  <div class="ingredient-row white-cta">
    <span class="ingredient-row-sub-flex">
      <span class="ingredient-quantity">{{ Math.round(quantity) }}g</span>
      <span class="ingredient-name">{{ name }}</span>
    </span>
    <span class="ingredient-percent inline-button"
      >{{ Math.round(bpercent * 100) }}%</span
    >
  </div>
</template>

<script>
export default {
  name: 'Ingredient',
  props: {
    name: String,
    quantity: Number,
    type: String,
    bpercent: Number,
  },
};
</script>

<style scoped>
.ingredient-row {
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.ingredient-row-sub-flex {
  display: flex;
  flex-direction: row;
}

.ingredient-quantity {
  min-width: 4em;
}

.ingredient-name {
  margin-right: 1em;
}

.ingredient-percent {
  align-self: flex-start;
}

.inline-button {
  display: inline-block;
  color: #6f6f6f;
  font-size: 0.7rem;
  font-family: Monaco;
  font-style: normal;
  font-weight: normal;
  padding: 0.2em 0.3em;
  margin-left: 0.2rem;
  border: 1px solid #f1f2f0;
  border-radius: 3px;
}
</style>
