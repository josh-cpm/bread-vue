<template>
  <div
    class="method-step"
    @keydown.esc="toggleEditor"
    @keydown.enter="toggleEditor"
  >
    <div v-if="!editing" @click="toggleEditor()" class="step-content">
      <span class="method-step-title">{{
        stepTitle.toUpperCase() || stepTitle
      }}</span>
      <span class="method-time inline-button">{{ stepTimeString }}</span>
      <div class="method-step-description">
        {{ stepInstructions }}
        <span class="step-duration inline-button">{{ stepDuration }} min</span>
      </div>
    </div>

    <div v-if="editing" class="step-editor">
      <div class="black-line"></div>
      <div class="step-editor-header">
        <h4>Edit Step</h4>
      </div>
      <div class="step-editor-options ">
        <button @click="$emit('delete-step', index)" class="inline-button">
          Delete Step
        </button>
        <!-- <button
          @click="$emit('move', { index, direction: 'up' })"
          class="inline-button"
        >
          Move Up
        </button>
        <button
          @click="$emit('move', { index, direction: 'down' })"
          class="inline-button"
        >
          Move Down
        </button> -->
      </div>
      <div>
        <EditableButton
          :name="this.$options.name"
          :buttonValue="stepTitle"
          :label="`Title`"
          @inputText="$emit('update:stepTitle', $event)"
        ></EditableButton>
      </div>
      <div class="method-step-description-editor">
        <textarea
          ref="description"
          :value="stepInstructions"
          @input="
            $emit('update:stepInstructions', $event.target.value);
            resizeTextAreaHeight();
          "
        >
        </textarea>
      </div>
      <div>
        <EditableButton
          :name="this.$options.name"
          :buttonValue="stepTimeString"
          :label="`Start Time`"
          @inputText="$emit('start-time-change', { $event, index })"
        ></EditableButton>
      </div>
      <div>
        <EditableButton
          :name="this.$options.name"
          :buttonValue="stepDuration + ' min'"
          :label="`Duration`"
          @inputText="updateDuration($event)"
        ></EditableButton>
      </div>
      <button class="black-cta" @click="toggleEditor">
        Done
      </button>
      <div class="black-line"></div>
    </div>
  </div>
</template>

<script>
import dateFormat from 'dateformat';
import EditableButton from './EditableButton.vue';

export default {
  components: { EditableButton },
  name: 'Step',
  props: {
    stepTitle: String,
    stepInstructions: String,
    stepDuration: Number,
    stepStartTime: Number,
    index: Number,
    priorStepDuration: Number,
  },
  data() {
    return {
      editing: false,
      editedStep: this.step,
    };
  },
  computed: {
    stepTimeString() {
      if (this.priorStepDuration > 700) {
        return 'Next Day';
      } else {
        return dateFormat(this.stepStartTime, 'h:MMtt');
      }
      // return dateFormat(this.stepStartTime, 'h:MMtt');
    },
  },
  methods: {
    toggleEditor() {
      this.editing ? (this.editing = false) : (this.editing = true);
    },
    resizeTextAreaHeight() {
      const element = this.$refs.description;
      element.style.height = '1px';
      element.style.height = element.scrollHeight + 6 + 'px';
    },
    updateDuration(event) {
      this.$emit('update:stepDuration', parseInt(event));
    },
  },
  updated() {
    this.$nextTick(() => {
      if (this.editing) {
        this.resizeTextAreaHeight();
      }
    });
  },
};
</script>

<style scoped>
html {
  font-size: 20px;
}

input {
  border: none;
}

.method-step {
  margin-bottom: 1.5rem;
}

.step-editor {
  position: relative;
}

.step-editor-header {
}

.step-editor-options {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  margin-top: 1.33rem;
  margin-right: 1rem;
  gap: 1rem;
}

.method-step-title input {
  width: 10rem;
}

.method-step-title {
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 0.4rem;
}

textarea {
  width: 100%;
  resize: none;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.3em 0.6em;
  padding-top: 0.6em;
  margin-bottom: 1rem;
  font-family: sans-serif;
  font-size: 1rem;
}

.inline-button {
  display: inline-block;
  color: #6f6f6f;
  vertical-align: middle;
  font-size: 0.7rem;
  font-family: Monaco;
  font-style: normal;
  font-weight: normal;
  padding: 0.3em 0.8em;
  margin-left: 0.2rem;
  border: 1px solid #f1f2f0;
  border-radius: 3px;
}

.step-duration {
  border: none;
}

.black-cta {
  display: inline-block;
  margin-right: 0.3em;
  padding: 0.3em 0.6em;
  height: fit-content;
  border-radius: 3px;
  color: white;
  border: 1px solid black;
  background: black;
  cursor: pointer;
  font-size: 1rem;
}

.black-cta:hover {
  border: 2px solid black;
}

.black-line {
  height: 1px;
  background-color: black;
  margin-top: 1rem;
}
</style>
