<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "TextInput",

  props: {
    placeholder: {
      required: false,
      type: String,
      default: "",
    },
    value: {
      required: true,
      type: String,
    },
  },

  methods: {
    handleInput($event) {
      this.$emit("handleInput", $event.target.value);
    },
  },
};
</script>
