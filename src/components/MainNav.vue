<template>
  <header class="w-full text-sm text-brand-blue-1">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center px-4 h-full text-xl">
          {{ company }}
        </a>
        <nav class="h-full border ml-12">
          <ul class="flex h-full p-0 m-0">
            <li
              v-for="item in menuItems"
              :key="item"
              class="flex border h-full border-orange-600 ml-9"
            >
              <a href="" class="flex items-center border">{{ item }}</a>
            </li>
          </ul>
        </nav>
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
      menuItems: [
        "Team",
        "Locations",
        "Life at Junkies",
        "How we hire",
        "Student",
        "Jos",
      ],
      url: "http://www.careersjobs.com",
    };
  },
};
</script>
