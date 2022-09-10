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
          <image-swiper />
        </div>
        <div class="col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import ImageSwiper from "@/components/JobSearch/ImageSwiper.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    ImageSwiper,
    JobSearchForm,
  },
};
</script>
