<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      <p>User name is: {{ authStore.fullName }}</p>
    </div>
    <br />
    <Counter />
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";

import Counter from "@/components/Counter.vue";

const authStore = useAuthStore();

const { isAuthenticated, user } = storeToRefs(authStore);
</script>

<style scoped></style>
