<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  name: "Spotlight",
  data() {
    return {
      spotlights: [],
    };
  },

  async mounted() {
    const baseurl = process.env.VUE_APP_API_URL;
    const url = `${baseurl}/spotlights`;
    const result = await axios.get(url);
    this.spotlights = result.data;
  },
};
</script>
