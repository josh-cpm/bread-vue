<template>
  <div class="ingredient-row">
    <TextInput
      class="ingredient-name"
      @input="logger"
      :value="name"
    ></TextInput>
    <span class="ingredient-row-sub-flex">
      <TextInput
        class="ingredient-quantity"
        :value="Math.round(quantity) + 'g'"
      ></TextInput>
      <span class="ingredient-percent ">{{ Math.round(bpercent * 100) }}%</span>
    </span>
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
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    toggleEditor() {
      this.editing ? (this.editing = false) : (this.editing = true);
    },
    logger() {
      console.log('hi');
    },
  },
};
</script>

<style scoped>
.ingredient-row-sub-flex {
  display: flex;
  flex-direction: row;
}

.ingredient-quantity {
  margin-right: 1rem;
  text-align: right;
}

.ingredient-name {
  margin-right: 1em;
}

.ingredient-percent {
  color: #6f6f6f;
}
</style>
