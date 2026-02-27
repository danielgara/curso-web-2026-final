<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

watch(count, (newCount, oldCount) => {
  console.log(newCount, oldCount);
});
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


