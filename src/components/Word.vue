<script setup>
import { ref } from 'vue'

const attempt = ref(null)

defineProps({
  word: String,
})


</script>

<template>
  <h1 class="block">{{ word || '_WORD_' }}</h1>
  <h1 class="block">{{ attempt || '_ATTEMPT_' }}</h1>

  <div>
    <input type="text" name="in" id="in"
      class="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="word"/>
  </div>
</template>