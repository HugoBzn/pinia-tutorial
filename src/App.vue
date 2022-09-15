<template>
  <header>
    <div class="wrapper">
      <nav>
        <a href="/">Home</a> |
        <button @click="logout" v-if="authStore.isAuthenticated">Logout</button>
        <button @click="login" v-else>Login</button>
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

function login() {
  authStore.$reset();
}
</script>

<style scoped></style>
