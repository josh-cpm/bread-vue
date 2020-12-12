<template>
  <TextInput
    class="recipe-title"
    @input="$emit('update:recipeTitle', $event.target.value)"
    :value="recipeTitle"
    @focus="showDone('editingTitle')"
    @blur="hideDone('editingTitle')"
  />
  <button @click="hideDone" v-if="editingTitle" class="white-cta">Done</button>
  <TextInput
    @input="$emit('update:recipeDescription', $event.target.value)"
    :value="recipeDescription"
    @focus="showDone('editingSubtitle')"
    @blur="hideDone('editingSubtitle')"
  />
  <button @click="hideDone" v-if="editingSubtitle" class="white-cta">
    Done
  </button>
</template>

<script>
import TextInput from './TextInput';

export default {
  name: 'Header',
  components: {
    TextInput,
  },
  props: {
    recipeTitle: String, // add to parent later & make variable in template
    recipeDescription: String, // add to parent later
  },
  data() {
    return {
      editingTitle: false,
      editingSubtitle: false,
    };
  },
  methods: {
    showDone(element) {
      this[element] = true;
    },
    hideDone(element) {
      this[element] = false;
    },
  },
};
</script>

<style scoped>
.recipe-title {
  font-weight: bold;
  font-size: 1.4rem;
}

.white-cta {
  display: inline-block;
  margin: 0 0 0.5em 0;
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
}
</style>
