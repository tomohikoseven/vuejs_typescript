<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Sample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sample from "@/components/Sample.vue";

export default defineComponent({
  name: "Home",
  components: {
    Sample,
  },
});
</script>
