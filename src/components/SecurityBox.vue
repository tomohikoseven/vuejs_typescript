<template>
  <input type="text" :value="innerText" />
</template>

<script lang="ts">
// import { defineComponent, reactive, ref } from "vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // const state = reactive<{ messageOne: string }>({
    //   messageOne: "Hello",
    // });
    const innerText = ref<string>("Helo.");

    return {
      innerText,
    };
  },
});
</script>
