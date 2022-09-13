<template>
  <div class="border-b border-solid">
    <div
      class="py-5 flex h-full flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">Organizations</h3>
      <font-awesome-icon :icon="caratIcon" />
    </div>
    <div v-if="isOpen" class="w-full border border-brand-blue-1 mt-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caratIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      return (this.isOpen = !this.isOpen);
    },
  },
};
</script>
