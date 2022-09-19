<template>
  <accordion header="Organizations">
    <div class="mt-4">
      <fieldset>
        <ul class="flex flex- flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
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
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueOrganizations } from "@/store/composable";
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();
    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrganizations, uniqueOrganizations, selectOrganization };
  },
};
</script>
