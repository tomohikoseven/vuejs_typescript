import { computed, ref } from "vue";

export function useFizzBuzz() {
  const countRef = ref(1);
  const result = computed(() => {
    const val = countRef.value;
    if (!(val % 15)) {
      return "FizzBuzz";
    } else if (!(val % 5)) {
      return "Buzz";
    } else if (!(val % 3)) {
      return "Fizz";
    }

    return String(val);
  });
  return { countRef, result };
}
