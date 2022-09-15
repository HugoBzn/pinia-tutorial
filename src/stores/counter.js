import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
});
