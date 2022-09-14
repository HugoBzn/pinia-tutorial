<template>
  <header>
    <div class="wrapper">
      <nav>
        <a href="/">Home</a> |
        <button @click="logout">Logout</button>
      </nav>
    </div>
  </header>
  <div>
    <HomeStore />
  </div>
</template>

<script setup>
import HomeStore from "./components/HomeStore.vue";

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
function logout() {
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}
</script>

<style scoped></style>
