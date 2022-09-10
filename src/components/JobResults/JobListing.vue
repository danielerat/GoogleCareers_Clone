<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/1"
      class="block mx-auto bg-white border-solid rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          Technical Program Manager, Perception, Augmented Reality
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>CareersJukies</span>
          </div>
          <div class="mr-5">
            <span>San francistco</span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications</h3>
          <div class="">
            <ul class="pl-8 list-disc">
              <li>Bachelor's Degree or Equivalent Practice experience</li>
              <li>
                Experience analyzing data trhough querying data(eg. sql ) using
                , and creating statistical model
              </li>
              <li>Hello data is here</li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results/1" class="text-brand-blue-1">
            Expand
          </router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
};
</script>
