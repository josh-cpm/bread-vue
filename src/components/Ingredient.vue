<template>
  <div class="ingredient">
    <div class="ingredient-row">
      <TextInput
        class="ingredient-name"
        @input="logger"
        @focus="toggleEditor('open')"
        :value="name"
      ></TextInput>
      <span class="ingredient-row-sub-flex">
        <input
          class="ingredient-quantity"
          type="number"
          :value="Math.round(quantity)"
          @focus="toggleEditor('open')"
        />
        <span class="label black">
          g
        </span>
        <input
          class="ingredient-percent "
          :value="Math.round(bpercent * 100)"
          type="number"
          @focus="toggleEditor('open')"
        /><span class="label gray">%</span>
      </span>
    </div>
    <div v-if="editing" class="ingredient-editor">
      <select name="ingredient-type-selector" class="ingredient-type-selector">
        <option value="flour">Flour</option>
        <option value="liquid">Liquid</option>
        <option value="yeast">Yeast</option>
        <option value="salt">Salt</option>
        <option value="other">Other</option>
      </select>
      <div class="ingredient-editor-hint">
        <img
          class="ingredient-editor-tiptext-icon"
          src="info-icon.svg"
          alt="Ingredient info icon"
        />
        <span class="ingredient-editor-tiptext"
          >Changing the ingredient amount will not scale any other ingredients.
        </span>
      </div>
      <div class="ingredient-editor-buttons">
        <button class="delete-ingredient-button">Delete Ingredient</button>
        <button @click="toggleEditor" class="close-editor-button">Done</button>
      </div>
    </div>
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
    toggleEditor(directive) {
      if (directive === 'open') {
        this.editing = true;
      } else if (directive === 'close') {
        this.editing = false;
      } else {
        this.editing ? (this.editing = false) : (this.editing = true);
      }
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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.ingredient {
  border-top: 1px solid #c4c4c4;
}

.ingredient-row {
  margin-top: 0.5rem;
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

.ingredient-type-selector {
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

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

.ingredient-editor-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.delete-ingredient-button {
  font-size: 1rem;
  color: #791d34;
  background-color: transparent;
  border: none;
}

.close-editor-button {
  font-size: 1rem;
  background-color: black;
  border: none;
  color: white;
  padding: 0.3em 0.5em;
}
</style>
