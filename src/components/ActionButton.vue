<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
  data() {
    return {
      primary: true, //Independedn property that defines whether some properties should or should not be applied
    };
  },
  computed: {
    buttonClass() {
      return { primary: this.primary }; //COmputed property that return an object
    },
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
</style>
