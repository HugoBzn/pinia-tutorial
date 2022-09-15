import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth.js";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      if (!this.isAuthenticated()) return;

      this.count++;
    },
    decrement() {
      if (!this.isAuthenticated()) return;

      this.count--;
    },
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
  getters: {
    countDigitLength: (state) => state.count.toString().length,
  },
});
