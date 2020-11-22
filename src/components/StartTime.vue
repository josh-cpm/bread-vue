// break out start time into its own component

<template>
  <div>
    <EditableButton
      :name="this.$options.name"
      :buttonValue="startTimeString"
      :label="label"
      :active="active"
      @inputText="$emit('change-start-time', $event)"
    ></EditableButton>
  </div>
</template>

<script>
import dateFormat from 'dateformat';

export default {
  name: 'StartTime',
  props: {
    startTime: Date,
    active: Boolean,
  },
  data() {
    return {
      label: 'Start time',
      placeholder: '9am',
    };
  },
  computed: {
    startTimeString() {
      return dateFormat(this.startTime, 'h:MMtt');
    },
  },
};
</script>

<style scoped></style>
