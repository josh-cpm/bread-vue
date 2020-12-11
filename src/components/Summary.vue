<template>
  <div class="section-header">
    <h3>SUMMARY</h3>
    <span class="tiptext">Tap to edit</span>
  </div>
  <div class="summary-control-row">
    <EditableButton
      :name="this.$options.name"
      :buttonValue="numLoaves"
      :label="`Loaves`"
      @inputText="updateLoafNum"
      class="summary-loaf-num summary-input"
    >
    </EditableButton>
    <EditableButton
      :name="this.$options.name"
      :buttonValue="loafMass + 'g'"
      :label="`Loaf Size`"
      @inputText="updateLoafMass"
      class="summary-loaf-mass summary-input"
    >
    </EditableButton>
    <EditableButton
      :name="this.$options.name"
      :buttonValue="Math.round(hydration * 100) + '%'"
      :label="`Hydration`"
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
.tiptext {
  /* font-family: Monaco; */
  font-size: 0.7rem;
  color: #6f6f6f;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  max-width: 20rem;
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
  margin-top: 0.7rem;
}

.summary-control-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
