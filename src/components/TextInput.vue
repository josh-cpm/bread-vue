<template>
  <textarea ref="textarea" @input="resizeHeight"></textarea>
</template>

<script>
export default {
  name: 'TextInput',
  methods: {
    resizeHeight() {
      const element = this.$refs.textarea;
      element.style.height = '1em';
      element.style.height = element.scrollHeight - 3 + 'px';
    },
  },
  mounted() {
    this.resizeHeight();
    window.addEventListener('resize', this.resizeHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeHeight);
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  resize: none;
  border: none;
  font-family: sans-serif;
  font-size: 1rem;
  height: 1.6em;
  overflow: hidden;
  padding: 0.3em 0;
}
</style>
