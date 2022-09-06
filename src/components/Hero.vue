<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-cyan-900">
      <div class="grid grid-cols-12">
        <div class="col-span-1"></div>
        <div class="col-span-5 border border-b-amber-500"><headline /></div>
        <div class="col-span-5 border border-b-amber-500">column 3</div>
        <div class="col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/Headline";
export default {
  name: "Hero",
  components: {
    Headline,
  },
};
</script>
