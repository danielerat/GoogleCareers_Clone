<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1"></div>
        <div class="col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-span-5 self-center justify-self-center">
          <img
            class="w-100 h-80 object-contain border"
            src="https://careers.google.com/jobs/dist/img/assets/hero-04_1x.5377e160fa426c8b388a861f23cc185b.png"
          />
        </div>
        <div class="col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
