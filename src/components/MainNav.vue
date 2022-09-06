<template>
  <header :class="['w-full', 'text-sm', headerHightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center px-4 h-full text-xl">
          {{ company }}
        </a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0">
            <li
              v-for="item in menuItems"
              :key="item"
              class="flex h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>

      <!-- Adding Our subNavigation -->
      <Subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import Subnav from "@/components/Subnav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      company: "Careers Junkie",
      author: { firstName: "Ilunga", lastName: "Gisa Daniel" },
      url: "#",
      menuItems: [
        "Team",
        "Locations",
        "Life at Junkies",
        "How we hire",
        "Student",
        "Jos",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHightClass() {
      return {
        "h-16": !this.isLoggedIn, //hight of 64px
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
