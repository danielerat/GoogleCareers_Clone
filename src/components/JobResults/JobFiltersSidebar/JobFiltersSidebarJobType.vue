<template>
  <accordion header="Job Type">
    <div class="mt-4">
      <fieldset>
        <ul class="flex flex- flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
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
import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_JOB_TYPES, UNIQUE_JOB_TYPES } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarJobType",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  },
};
</script>
