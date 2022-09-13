<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h3 class="w-full text-base font-light my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corrupti?
      </h3>
    </template>
  </header-container>
</template>
<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
