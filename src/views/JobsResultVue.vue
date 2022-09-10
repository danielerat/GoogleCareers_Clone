<template>
  <h1 class="Text-6xl mx-auto">Jos Result Vue</h1>
  <button @click="goTOHome">Go To home Page</button>
</template>
<script>
export default {
  name: "JobsResultVue",
  methods: {
    goTOHome() {
      this.$router.push("/");
    },
  },
};
</script>
