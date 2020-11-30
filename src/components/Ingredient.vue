<template>
  <div class="ingredient-row">
    <TextInput
      class="ingredient-name"
      @input="logger"
      :value="name"
    ></TextInput>
    <span class="ingredient-row-sub-flex">
      <input class="ingredient-quantity" :value="Math.round(quantity)" />
      g
      <input
        class="ingredient-percent "
        :value="Math.round(bpercent * 100)"
      /><span class="gray-text">%</span>
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
input {
  border: none;
  font-size: 1rem;
  padding: 0.3;
}

input::placeholder {
  font-style: normal;
  font-family: Roboto;
}

.ingredient-row-sub-flex {
  display: flex;
  flex-direction: row;
}

.ingredient-quantity {
  margin-right: 0.1rem;
  text-align: right;
  width: 7ch;
}

.ingredient-name {
  margin-right: 1em;
}

.ingredient-percent {
  color: #6f6f6f;
  text-align: right;
  width: 4ch;
  margin-right: 0.1rem;
}

.gray-text {
  color: #6f6f6f;
}
</style>
