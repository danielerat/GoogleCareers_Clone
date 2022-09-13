<template>
  <div class="flex flex-col p-4 border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>

        <div class="flex items-center text-sm">
          <action-button text="Clear Filter" type="secondary" />
        </div>
      </div>

      <accordion header="Jobs Type"></accordion>
      <accordion header="Jobs Type">
        <p>Thi sis some place holder you know</p>
      </accordion>

      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
  },
};
</script>
