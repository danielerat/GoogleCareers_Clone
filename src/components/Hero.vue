<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-amber-500">
      <div class="grid grid-cols-12">
        <div class="col-span-1"></div>
        <div class="col-span-5 border"><headline /></div>
        <div class="col-span-5 border">column 3</div>
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
