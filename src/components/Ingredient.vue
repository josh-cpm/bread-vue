<template>
  <div class="ingredient-row">
    <TextInput
      class="ingredient-name"
      @input="logger"
      :value="name"
    ></TextInput>
    <span class="ingredient-row-sub-flex">
      <input
        class="ingredient-quantity"
        type="number"
        :value="Math.round(quantity)"
      />
      <span class="label black">
        g
      </span>
      <input
        class="ingredient-percent "
        :value="Math.round(bpercent * 100)"
        type="number"
      /><span class="label gray">%</span>
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
  margin: 0 0.1rem 0 0.3rem;
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
}

.gray {
  color: #6f6f6f;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
