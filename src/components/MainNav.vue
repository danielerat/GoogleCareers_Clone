<template>
  <header class="w-full text-sm text-brand-blue-1">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a href="/" class="flex items-center px-4 h-full text-xl">
          {{ company }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      company: "Careers Junkie",
      author: { firstName: "Ilunga", lastName: "Gisa Daniel" },
    };
  },
};
</script>
