<script setup lang="ts">
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <h1>Variables</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded-md" 
      @click="increment">
      Increment
    </button>
  </div>
</template>



