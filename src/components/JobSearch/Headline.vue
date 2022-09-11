<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-tighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h3 class="text-3xl font-light">Find your next job at Careers Junkies</h3>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList.js";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    //As soon as the page loads
    this.changeTitle();
  },
  beforeUnmount() {
    // Before the element is removed from the dom we want to Clear our interval
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      // Create our interval which will be running over and over again
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>
<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
