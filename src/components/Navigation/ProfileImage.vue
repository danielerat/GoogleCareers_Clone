<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://w7.pngwing.com/pngs/76/997/png-transparent-vue-js-software-framework-user-interface-web-application-cascading-style-sheets-vue-js-angle-triangle-logo.png",
    };
  },
};
</script>
