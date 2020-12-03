<template>
  <div class="ingredient">
    <div class="ingredient-row">
      <span ref="ingredientName">
        <TextInput
          class="ingredient-name"
          @focus="
            toggleEditor('open');
            setUnderline();
            toggleFocus($event);
          "
          @blur="toggleFocus"
          :value="name"
        ></TextInput>
      </span>
      <span class="ingredient-row-sub-flex">
        <span ref="ingredientQuantity" class="ingredient-row-sub-sub-flex">
          <input
            class="ingredient-quantity"
            type="number"
            :value="Math.round(quantity)"
            @focus="
              toggleEditor('open');
              setUnderline();
              toggleFocus($event);
            "
            @blur="toggleFocus"
          />
          <span class="label black">
            g
          </span>
        </span>
        <span ref="ingredientBPercent" class="ingredient-row-sub-sub-flex">
          <input
            class="ingredient-percent "
            :value="Math.round(bpercent * 100)"
            type="number"
            @focus="
              toggleEditor('open');
              setUnderline();
              toggleFocus($event);
            "
            @blur="toggleFocus"
          /><span class="label gray">%</span>
        </span>
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
        <button
          @click="
            toggleEditor();
            setUnderline();
          "
          class="close-editor-button"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import InputWithUnderline from './InputWithUnderline';

export default {
  name: 'Ingredient',
  // components: { InputWithUnderline },
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
    setUnderline() {
      if (this.editing === true) {
        this.$refs.ingredientBPercent.classList.add('underline');
        this.$refs.ingredientQuantity.classList.add('underline');
        this.$refs.ingredientName.classList.add('underline');
      } else {
        this.$refs.ingredientBPercent.classList.remove('underline');
        this.$refs.ingredientQuantity.classList.remove('underline');
        this.$refs.ingredientName.classList.remove('underline');
      }
    },
    toggleFocus(e) {
      e.target.parentNode.classList.toggle('gold-underline');
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

.ingredient-row-sub-sub-flex {
  display: flex;
  margin-left: 1rem;
}

.ingredient-quantity {
  margin-right: 0.1rem;
  text-align: right;
  width: 5ch;
}

.ingredient-name {
  margin-right: 1em;
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
</style>
