<template>
  <div>
    <button @click="store.increment">Increment +</button> |
    <button @click="store.decrement">Decrement -</button>
    <!-- Have count value -->
    <p>Count value: {{ store.count }}</p>
    <br />
    <p>Counter moved to {{ store.countDigitLength }} digit length</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>

<style scoped></style>
