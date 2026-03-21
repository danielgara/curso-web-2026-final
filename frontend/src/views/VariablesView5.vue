<script setup>
import { ref, watch } from 'vue'

const country = ref('')
const message = ref('')

watch(country, (newCountry) => {
  if (newCountry === 'colombia') {
    message.value = '🇨🇴 Elegiste el mejor país!'
  } else {
    message.value = ''
  }
})
</script>

<template>
  <div>
    <select v-model="country">
      <option value="">Seleccione un país</option>
      <option value="colombia">Colombia</option>
      <option value="mexico">México</option>
      <option value="argentina">Argentina</option>
    </select>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

