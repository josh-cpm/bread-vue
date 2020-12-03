<template>
  <div>
    <input :value="value" type="text" /><label :value="label">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputWithUnderline',
  props: {
    label: String,
    value: null,
  },
};
</script>

<style scoped></style>
