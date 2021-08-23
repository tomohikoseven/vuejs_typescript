<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <Sample />
    <security-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sample from "@/components/Sample.vue";
import SecurityBox from "@/components/SecurityBox.vue";

export default defineComponent({
  name: "Home",
  components: {
    Sample,
    SecurityBox,
  },
});
</script>
