<template>
  <accordion header="Organizations">
    <div class="mt-4">
      <fieldset>
        <ul class="flex flex- flex-wrap">
          <li class="w-1/2 h-8">
            <input id="vuetube" type="checkbox" class="mr-3" />
            <label for="vuetube" class="">Vue Tube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="betweenVue" type="checkbox" class="mr-3" />
            <label for="betweenVue" class="">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="adVueBrute" type="checkbox" class="mr-3" />
            <label for="adVueBrute" class="">Vue Brute</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="HaldMan" type="checkbox" class="mr-3" />
            <label for="HalfMan" class="">Vue and a half Man</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script>
import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
};
</script>
