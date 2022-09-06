<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h3>Find your next job at Careers Junkies</h3>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
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
        const actions = ["Build", "Created", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action); //Get the current index of out data action
        const nextActionIndex = (currentActionIndex + 1) % 4; //Get the value that is always next
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>
