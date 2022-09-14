import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Sara",
      email: "sara@gmail.com",
    },
  }),
});
