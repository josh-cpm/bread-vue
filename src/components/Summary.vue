<template>
  <h3 class="section-header">SUMMARY</h3>
  <div class="tiptext">
    Scale your loaf up or down, or tweak the hydration.
    <span class="dough-summary-stats">
      <span class="end-hydration-label">
        Assuming you're using a 100% hydration levain, your end loaf hydration
        is
        {{ endHydration }}%,</span
      >
      <span class="end-hydration-label">
        and you're baking an {{ doughMass }}g dough.</span
      >
    </span>
  </div>
  <div class="summary-control-row">
    <EditableButton
      :name="this.$options.name"
      :buttonValue="numLoaves"
      :label="`Loaves`"
      :inputmode="`numeric`"
      @inputText="updateLoafNum"
      class="summary-loaf-num summary-input"
    >
    </EditableButton>
    <EditableButton
      :name="this.$options.name"
      :buttonValue="loafMass + 'g'"
      :label="`Loaf Size`"
      :inputmode="`numeric`"
      @inputText="updateLoafMass"
      class="summary-loaf-mass summary-input"
    >
    </EditableButton>
    <EditableButton
      :name="this.$options.name"
      :buttonValue="Math.round(hydration * 100) + '%'"
      :label="`Hydration`"
      :inputmode="`numeric`"
      @inputText="updateLoafHydration"
      class="summary-loaf-hydration summary-input"
    >
    </EditableButton>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  emits: [
    'changeloafnum',
    'update:numLoaves',
    'changeloafmass',
    'changeloafhydration',
  ],
  props: {
    hydration: Number,
    loafMass: Number,
    numLoaves: Number,
    doughMass: Number,
    endHydration: Number,
  },
  methods: {
    updateLoafNum(num) {
      if (num > 0) {
        this.$emit('changeloafnum', parseInt(num));
        this.$emit('update:numLoaves', parseInt(num));
      }
    },
    updateLoafMass(mass) {
      if (mass > 0) {
        this.$emit('changeloafmass', parseInt(mass));
      }
    },
    updateLoafHydration(hydration) {
      if (hydration > 0) {
        this.$emit('changeloafhydration', parseInt(hydration) / 100);
      }
    },
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 0.5rem;
}

.tiptext {
  font-size: 0.7rem;
  color: #6f6f6f;
  margin-bottom: 1rem;
}

.dough-summary-stats {
  font-size: 0.7rem;
  color: #6f6f6f;
  margin-top: 0.2rem;
}

.summary-control-row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.summary-input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
