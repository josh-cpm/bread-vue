<template>
  <section class="method-section">
    <h3>METHOD</h3>
    <div class="black-line"></div>
    <StartTime
      class="recipe-start-time"
      @changeStartTime="changeStartTime"
      :startTime="method.startTime"
      :active="startTimeActive"
    ></StartTime>
    <div class="recipe-steps">
      <Step
        v-for="(step, index) in method.steps"
        :key="step.randomKey"
        v-model:stepTitle="step.title"
        v-model:stepInstructions="step.instructions"
        v-model:stepDuration="step.duration"
        :priorStepDuration="priorStepDuration(index)"
        :stepStartTime="step.time"
        @start-time-change="changeStepTime"
        @delete-step="deleteStep"
        @move="move"
        :index="index"
      >
      </Step>
      <button @click="addStep" class="black-cta">
        Add Step
      </button>
    </div>
  </section>
</template>

<script>
import Step from './Step.vue';
import StartTime from './StartTime';
import * as chrono from 'chrono-node';
import { RecipeMethod } from '../modules/RecipeMethod';

export default {
  name: 'Method',
  components: { Step, StartTime },
  props: {
    steps: Array,
  },
  data() {
    return {
      method: {},
      startTimeActive: false,
    };
  },
  created() {
    this.method = new RecipeMethod(this.steps, new Date());
  },
  methods: {
    changeStartTime(timeString) {
      if (timeString) {
        const time = chrono.parseDate(timeString);
        this.method.startTime = time;
      }
    },
    changeStepTime(e) {
      const time = chrono.parseDate(e.$event);
      const index = e.index;
      if (index === 0) {
        this.method.startTime = time;
      } else {
        this.method.steps[index - 1].duration = Math.ceil(
          (new Date(time) - new Date(this.method.steps[index - 1].time)) /
            (1000 * 60)
        );
      }
    },
    priorStepDuration(index) {
      if (index > 0) {
        return this.method.steps[index - 1].duration;
      } else {
        return null;
      }
    },
    addStep() {
      this.method.addStep();
    },
    deleteStep(index) {
      this.method.deleteStep(index);
    },
    move(e) {
      this.method.moveStep(e.index, e.direction);
    },
  },
  updated() {
    this.method.addTimeToSteps();
  },
};
</script>

<style scoped>
.method-section {
  margin: 0.3rem;
}

.recipe-start-time {
  margin-bottom: 0.8rem;
}

.black-line {
  background-color: black;
  height: 1px;
  margin-bottom: 1rem;
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
</style>
