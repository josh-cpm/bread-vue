<template>
  <div class="section-header">
    <h3>SUMMARY</h3>
    <span class="tiptext">Tap to edit</span>
  </div>
  <div class="summary-control-row">
    <span class="summary-loaf-num white-cta">1 loaf</span>
    <span class="summary-loaf-mass white-cta">800g</span>
    <span class="summary-loaf-hydration white-cta">80% hydration</span>
  </div>
  <div class="dough-summary-stats">
    <span class="end-hydration-label">End hydration 82%</span>
    <span class="end-hydration-label">• Total dough 1350g</span>
  </div>
</template>

<script>
export default {
  name: 'Summary',
};
</script>

<style scoped>
.white-cta {
  display: inline-block;
  margin-right: 0.3em;
  padding: 0.3em 0.6em;
  border-radius: 3px;
  background: white;
  border: 1px solid black;
  cursor: pointer;
}
</style>
