<template>
  <div>
    <h1>Hi HomeStore</h1>
    <Counter />
  </div>
</template>

<script setup>

import { useAuthStore } from "@/stores/auth";
import Counter from "@/components/Counter.vue";

const authStore = useAuthStore();
</script>

<style scoped></style>
