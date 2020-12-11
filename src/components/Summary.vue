<template>
  <h3 class="section-header">SUMMARY</h3>
  <div class="tiptext">Tap to edit</div>
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
  <div class="dough-summary-stats">
    <span class="end-hydration-label">End hydration 82%</span>
    <span class="end-hydration-label"> • Total dough {{ doughMass }}g</span>
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
  margin-bottom: 0.2rem;
}

.tiptext {
  font-size: 0.7rem;
  color: #6f6f6f;
  margin-bottom: 0.5rem;
}

.white-cta {
  display: inline-block;
  margin-right: 0.3em;
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
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
