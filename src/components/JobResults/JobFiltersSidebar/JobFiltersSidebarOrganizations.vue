<template>
  <accordion header="Organizations">
    <div class="mt-4">
      <fieldset>
        <ul class="flex flex- flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-1"
              @change="selectOrganization"
            />
            <label :for="organization" class="">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_ORGANIZATIONS, SELECTED_ORGANIZATIONS } from "@/store";

import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    selectOrganization() {
      this.SELECTED_ORGANIZATIONS(this.selectedOrganizations);
    },
    ...mapMutations([SELECTED_ORGANIZATIONS]),
  },
};
</script>
