<template>
  <div class="border-b border-solid">
    <div
      class="py-5 flex h-full flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caratIcon" />
    </div>
    <div v-if="isOpen" class="w-full border border-brand-blue-1">
      <slot>
        <p>Whoops, Somebody forgot to populate me yo !</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
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
