<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">
            {{ FILTERED_JOBS.length }}
          </span>
          Jobs Matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import useConfirmRoute from "@/composables/useConfirmRoute";
export default {
  name: "Subnav",
  setup() {
    const onJobResultsPage = useConfirmRoute("JobResults");

    const store = useStore();
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    return { onJobResultsPage, FILTERED_JOBS };
  },
};
</script>
