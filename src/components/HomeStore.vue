<template>
  <div>
    <h1>Hi HomeStore</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const store = useCounterStore();
console.log(store.count);
</script>

<style scoped></style>
