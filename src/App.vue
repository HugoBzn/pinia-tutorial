<template>
  <header>
    <div class="wrapper">
      <nav>
        <a href="/">Home</a> |
        <button @click="authStore.logout" v-if="authStore.isAuthenticated">
          Logout
        </button>
        <button @click="authStore.login" v-else>Login</button>
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
</script>

<style scoped></style>
