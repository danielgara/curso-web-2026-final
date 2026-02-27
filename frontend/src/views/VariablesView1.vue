<script setup lang="ts">
let count = 0;

function increment() {
  count++;
  console.log(count);
}
</script>

<template>
  <div>
    <h1>Variables</h1>
    <p>Count: {{ count }}</p>
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded-md" 
      @click="increment">
      Increment
    </button>
  </div>
</template>

