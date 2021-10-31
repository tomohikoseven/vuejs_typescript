<template>
  <div class="fizzBuzzView">
    数値：{{ countRef }}<br />
    解答：{{ result }}<br />
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFizzBuzz } from "./useFizzBuzz";

export default defineComponent({
  setup() {
    const { countRef, result } = useFizzBuzz();
    const up = () => {
      countRef.value++;
    };
    const reset = () => {
      countRef.value = 1;
    };
    return { countRef, result, up, reset };
  },
});
</script>
