<template>
  <img class="w-100 h-80 object-contain" :src="action" />
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";
export default {
  name: "ImageSwiper",
  data() {
    return {
      action:
        "https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png",
      interval: null,
    };
  },
  created() {
    //As soon as the page loads
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = [
          "https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png",
          "https://careers.google.com/jobs/dist/img/assets/hero-03_1x.085e94af78d9906f55c83d558eca4453.png",
        ];

        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>
