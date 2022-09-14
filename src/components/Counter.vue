<template>
  <div>
    <button @click="increment">Increment +</button> |
    <button @click="decrement">Decrement -</button>
    <!-- Have count value -->
    <p>Count value: {{ store.count }}</p>
    <br />
    <p>Counter moved to {{ store.countDigitLength }} digit length</p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

function increment() {
  store.count++;
}

function decrement() {
  store.count--;
}
</script>

<style scoped></style>
