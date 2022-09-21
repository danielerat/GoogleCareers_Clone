<template>
  <main class="flex flex-col h-screen">
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
    <spotlight class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results/"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img class="object-contain" :src="img" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
          >
            See Jobs
          </router-link>
        </router-link>
      </template>
    </spotlight>
  </main>
</template>
<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import ImageSwiper from "@/components/JobSearch/ImageSwiper.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    ImageSwiper,
    JobSearchForm,
    Spotlight,
  },
};
</script>
