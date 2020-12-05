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
    >
    </EditableButton>
    <span class="summary-loaf-num white-cta">{{ numLoaves }} loaf</span>
    <span class="summary-loaf-mass white-cta">{{ loafMass }}g</span>
    <span class="summary-loaf-hydration white-cta"
      >{{ Math.round(hydration * 100) }}% hydration</span
    >
  </div>
  <div class="dough-summary-stats">
    <span class="end-hydration-label">End hydration 82%</span>
    <span class="end-hydration-label"> • Total dough 1350g</span>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    hydration: Number,
    loafMass: Number,
    numLoaves: Number,
  },
  methods: {
    updateLoafNum(num) {
      this.$emit('update:numLoaves', parseInt(num));
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
</style>
