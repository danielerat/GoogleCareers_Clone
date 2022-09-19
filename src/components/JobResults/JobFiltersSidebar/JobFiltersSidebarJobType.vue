<template>
  <accordion header="Job Type">
    <div class="mt-4">
      <fieldset>
        <ul class="flex flex- flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-1"
              @change="selectedJobType"
            />
            <label :for="jobType" class="">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";
import { useUniqueJobTypes } from "@/store/composable";
export default {
  name: "JobFiltersSidebarJobType",
  components: {
    Accordion,
  },
  setup() {
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const store = useStore();
    const router = useRouter();

    const selectedJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };

    return { selectedJobTypes, uniqueJobTypes, selectedJobType };
  },
};
</script>
