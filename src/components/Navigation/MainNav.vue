<template>
  <header :class="['w-full', 'text-sm', headerHightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center px-4 h-full text-xl"
        >
          Careers Junkie
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="flex h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link :to="item.url" class="flex items-center">
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      <!-- Adding Our subNavigation -->
      <Subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";
import { LOGIN_USER } from "@/store/constants";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Team", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Junkies", url: "/" },
        { text: "How we hire", url: "/" },
        { text: "Student", url: "/" },
        { text: "Jos", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHightClass() {
      return {
        "h-16": !this.isLoggedIn, //hight of 64px
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
