<template>
  <main>
    <div v-if="authStore.isAuthenticated">
      <p>User name is: {{ authStore.user.name }}</p>
    </div>
    <br/>
    <Counter />
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import Counter from "@/components/Counter.vue";

const authStore = useAuthStore();
</script>

<style scoped></style>
