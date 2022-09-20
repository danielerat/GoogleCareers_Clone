<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            NextPage
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { onMounted, computed } from "vue";
// import { useStore } from "vuex";
// import { FETCH_JOBS } from "@/store/constants";
import JobListing from "@/components/JobResults/JobListing.vue";
import { useFilteredJobs, useFetchJobDispatch } from "@/store/composable";
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPage from "@/composables/usePreviousAndNextPages";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobDispatch);
    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();
    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPage(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return { previousPage, currentPage, nextPage, displayedJobs };
  },

  // computed: {
  //   currentPage() {
  //     const pageString = this.$route.query.page || 1; //the || 1 is a fall back
  //     return Number.parseInt(pageString);
  //   },
  //   previousPage() {
  //     const previousPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return previousPage >= firstPage ? previousPage : undefined;
  //   },
  //   nextPage() {
  //     const nextPage = this.currentPage + 1;
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },

  //   displayedJobs() {
  //     const pageNumber = this.currentPage;
  //     const firstJobIndex = (pageNumber - 1) * 10;
  //     const lastJobIndex = pageNumber * 10;
  //     return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
  //   },
  // },
};
</script>
