<!--
To use this component, you need to bind a few props 
* :name -> the name of the parent component 
* :buttonValue -> The current value, which the user can edit 
* :label -> The label for the value On the parent, 

Listen for an inputText event. 
That event will receive a string with whatever the user entered. The
component will show or hide itslef based on user input. 

You can override and
hide the editor using the prop "active".

Example: 

<EditableButton
  :name="this.$options.name"
  :buttonValue="startTimeString"
  :label="label"
  :active="active"
  @inputText="$emit('change-start-time', $event)"
>
    </EditableButton>
*/
-->

<template>
  <div>
    <div v-if="editingActive" class="white-cta start-time">
      <span>{{ label }}:</span>
      <input
        ref="buttoninput"
        :inputmode="inputmode"
        :placeholder="buttonValue"
        :style="inputWidth"
        @keydown.enter="toggleEditing"
        @keydown.escape="toggleEditing"
        @blur="toggleEditing('close')"
        @input="
          $emit('input-text', $event.target.value);
          resizeInput();
        "
      />
      <span class="close-button" @click="toggleEditing">Done</span>
    </div>
    <div v-else>
      <span
        @click="
          toggleEditing($event.target);
          focusOnInput();
        "
        class="white-cta"
        >{{ label }}: {{ buttonValue }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditableButton',
  props: {
    label: String,
    buttonValue: null,
    inputmode: String,
    active: Boolean,
  },
  data() {
    return {
      editingActive: this.active,
    };
  },
  computed: {
    inputWidth() {
      console.log(this.buttonValue.toString().length);
      return `width:${this.buttonValue.toString().length + 0.5}ch`;
    },
  },
  methods: {
    focusOnInput() {
      this.$nextTick(() => this.$refs.buttoninput.focus());
    },
    toggleEditing(direction) {
      // force editing to start or stop
      if (direction == 'close') {
        this.editingActive = false;
      } else if (direction == 'open') {
        this.editingActive = true;
      }
      // normal toggling when no props are passed
      else if (this.editingActive) {
        this.editingActive = false;
      } else {
        this.editingActive = true;
      }
    },
    resizeInput() {
      this.$refs.buttoninput.style.width = '1px';
      this.$refs.buttoninput.style.width =
        this.$refs.buttoninput.scrollWidth + 'px';
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  margin: 0 1rem 0 0.25rem;
  padding: 0;
  text-align: left;
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

.white-cta input {
  text-align: left;
  font-size: 1rem;
}

.white-cta {
  display: inline-block;
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
}

.white-cta input:focus {
  padding: 0;
  outline: none;
}

.close-button {
  align-self: flex-end;
}
</style>
