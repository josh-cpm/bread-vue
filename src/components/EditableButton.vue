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
      <span>{{ label }}</span>
      <input
        :ref="name"
        :type="inputType"
        :placeholder="buttonValue"
        @keydown.enter="toggleEditing"
        @keydown.escape="toggleEditing"
        @blur="toggleEditing"
        @input="
          $emit('input-text', $event.target.value);
          resizeInput($event.target);
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
    name: String,
    label: String,
    buttonValue: null,
    inputType: String,
    active: Boolean,
  },
  data() {
    return {
      editingActive: this.active,
      type: 'text',
    };
  },
  methods: {
    focusOnInput() {
      this.$nextTick(() => this.$refs[this.name].focus());
    },
    toggleEditing() {
      if (this.editingActive) {
        this.editingActive = false;
      } else {
        this.editingActive = true;
      }
    },
    resizeInput(target) {
      target.style.width = '1px';
      target.style.width = target.scrollWidth + 'px';
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
  min-width: 8ch;
}

input::placeholder {
  font-style: normal;
  font-family: Roboto;
}

.white-cta input {
  width: 4em;
  text-align: left;
  font-size: 1rem;
}

.white-cta {
  display: inline-block;
  margin-bottom: 1rem;
  margin-right: 0.3em;
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
