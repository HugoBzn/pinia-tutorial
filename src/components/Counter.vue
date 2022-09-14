<template>
  <div>
    <!-- Have count value -->
    <p>Count value: {{ store.count }}</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<style scoped></style>
