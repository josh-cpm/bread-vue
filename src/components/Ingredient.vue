<template>
  <div class="ingredient">
    <div class="ingredient-row" @click="toggleEditor('open')">
      <span
        ref="ingredientName"
        :class="[underlineInput, { 'gold-underline': nameSelected }]"
        class="ingredient-name-container"
      >
        <TextInput
          class="ingredient-name"
          spellcheck="false"
          @focus="nameSelected = true"
          @blur="nameSelected = false"
          :value="name"
          :placeholder="`New Ingredient`"
          @input="$emit('update:name', $event.target.value)"
        ></TextInput>
      </span>
      <span class="ingredient-row-sub-flex">
        <span
          :class="[underlineInput, { 'gold-underline': qtySelected }]"
          ref="ingredientQuantity"
          class="ingredient-row-sub-sub-flex"
        >
          <input
            class="ingredient-quantity"
            type="number"
            inputmode="numeric"
            :value="Math.round(quantity)"
            @focus="qtySelected = true"
            @blur="qtySelected = false"
            @input="$emit('update:quantity', parseInt($event.target.value))"
          />
          <span class="label black">
            g
          </span>
        </span>
        <span
          ref="ingredientBPercent"
          :class="[underlineInput, { 'gold-underline': bPctSelected }]"
          class="ingredient-row-sub-sub-flex"
        >
          <input
            class="ingredient-percent "
            :value="bakersPercent"
            type="number"
            @focus="bPctSelected = true"
            @blur="bPctSelected = false"
          /><span class="label gray">%</span>
        </span>
      </span>
    </div>
    <transition name="expand">
      <div v-if="editing" class="ingredient-editor">
        <select
          @input="$emit('update:type', $event.target.value)"
          name="ingredient-type-selector"
          class="ingredient-type-selector"
        >
          <option value="none">Select Ingredient Type</option>
          <option value="flour" :selected="selectedOption('flour')"
            >Flour</option
          >
          <option :selected="selectedOption('liquid')" value="liquid"
            >Liquid</option
          >
          <option value="yeast" :selected="selectedOption('preferment')"
            >Preferment</option
          >
          <option value="salt" :selected="selectedOption('salt')">Salt</option>
          <option value="other" :selected="selectedOption('other')"
            >Other</option
          >
        </select>
        <div class="ingredient-editor-buttons">
          <button
            class="delete-ingredient-button"
            @click="$emit('delete-ingredient', index)"
          >
            Delete Ingredient
          </button>
          <button @click="toggleEditor()" class="close-editor-button">
            Done
          </button>
        </div>
      </div>
    </transition>
    <div class="gray-divider"></div>
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
    index: Number,
  },
  data() {
    return {
      editing: false,
      selectedField: '',
      nameSelected: false,
      qtySelected: false,
      bPctSelected: false,
    };
  },
  computed: {
    bakersPercent() {
      if (this.type === 'salt') {
        return Math.round(1000 * this.bpercent) / 10;
      } else {
        return Math.round(100 * this.bpercent);
      }
    },
    underlineInput() {
      return {
        underline: this.editing,
      };
    },
  },
  methods: {
    logger(e) {
      console.log(e);
    },
    toggleEditor(directive) {
      if (directive === 'open') {
        this.editing = true;
      } else if (directive === 'close') {
        this.editing = false;
      } else {
        this.editing ? (this.editing = false) : (this.editing = true);
      }
    },
    selectedOption(fieldType) {
      if (fieldType === this.type) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  font-size: 1rem;
  padding: 0.3rem;
  /* margin: 0 0.1rem 0 0.3rem; */
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

.gray-divider {
  height: 1px;
  background-color: #c4c4c4;
}

.ingredient-row {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.ingredient-row-sub-flex {
  display: flex;
  flex-direction: row;
}

.ingredient-row-sub-sub-flex {
  display: flex;
  margin-left: 0.5rem;
}

.ingredient-quantity {
  margin-right: 0.1rem;
  text-align: right;
  width: 5ch;
}

.ingredient-name {
  margin-right: 1em;
  margin-bottom: 0.2em;
}

.ingredient-name-container {
  flex-grow: 3;
}

.ingredient-percent {
  color: #6f6f6f;
  text-align: right;
  width: 4.5ch;
}

select,
.ingredient-percent:focus,
.ingredient-name:focus,
.ingredient-quantity:focus {
  outline: none;
}

.underline {
  border-bottom: 1px solid #666666;
}

select:focus,
.ingredient-name-container:focus,
.gold-underline {
  box-shadow: 0 2px 0px 0px #b59a5b;
  border-bottom: 1px solid #b59a5b;
}

.label {
  padding: 0.3rem 0;
}

.gray {
  color: #6f6f6f;
}

.ingredient-type-selector {
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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
  cursor: pointer;
}

.close-editor-button {
  font-size: 1rem;
  background-color: black;
  border: none;
  color: white;
  padding: 0.3em 0.5em;
  cursor: pointer;
}

.expand-enter-active {
  animation: expand-in 0.3s;
}

@keyframes expand-in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 100%;
    transform: translateY(0px);
  }
}
</style>
