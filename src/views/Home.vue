<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FizzBuzz />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FizzBuzz from "@/components/FizzBuzz.vue";

export default defineComponent({
  name: "Home",
  components: {
    FizzBuzz,
  },
});
</script>
