<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-3 mr-3 text-2xl text-brand-gray-3"
    />
    <div class="flex flex-nowrap flex-1 h-full">
      <div class="relative flex items-center felx-1 h-full pr-3">
        <label class="absolute left-0 -top-10 text-">Role</label>
        <text-input v-model="role" placeholder="Software Engineer" />
      </div>
      <span class="flex items-center h-full px-3 border bg-brand-gray-2">
        IN
      </span>
      <div class="relative flex items-center felx-1 h-full">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input v-model="location" placeholder="Rwanda Kigali" />
        <action-button class="rounded-r-3xl" type="secondary" text="Search" />
      </div>
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
