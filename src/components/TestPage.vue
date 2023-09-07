<template>
    <div class="container mx-auto my-10 px-4">
      <div class="mb-8 flex justify-between">
        <div>
          <h1 class="text-3xl font-bold">Typing Speed Test</h1>
          <p class="text-gray-500">Type the following words:</p>
        </div>
        <div>
            <p class="text-2xl">{{ words.toString() }}</p>
        </div>
        <div>
          <p class="text-right text-3xl font-bold">{{ cpm }}</p>
          <p class="text-gray-500 text-right">Characters per minute</p>
        </div>
      </div>
      <div class="border-2 border-gray-300 rounded-lg p-4">
        <p class="text-xl">{{ currentWord }}</p>
        <input
          class="mt-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-2xl"
          type="text"
          v-model.trim="inputValue"
          @keydown.enter="handleInput"
        />
        <div class="mt-4">
          <span v-for="(word, index) in words" :key="index">
            <template v-if="index === currentWordIndex">{{ word }} </template>
            <template v-else> {{ word }} </template>
          </span>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p v-if="timer > 0" class="text-2xl font-bold">{{ timer }}</p>
        <button v-else class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="startTimer">Start</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
  const inputValue = ref('');
  const currentWordIndex = ref(0);
  const correctCharacters = ref(0);
  const incorrectCharacters = ref(0);
  const startTime = ref(0);
  const endTime = ref(0);
  const timer = ref(0);
  const timerInterval = ref(null);
  
  const currentWord = computed(() => {
    return words[currentWordIndex.value];
  });
  
  const cpm = computed(() => {
    const elapsedTime = (endTime.value - startTime.value) / 1000 / 60;
    const totalCharacters = correctCharacters.value + incorrectCharacters.value;
    return Math.round(totalCharacters / elapsedTime);
  });
  
  function startTimer() {
    timer.value = 60;
    timerInterval.value = setInterval(() => {
      if (timer.value > 0) {
        timer.value--;
      } else {
        clearInterval(timerInterval.value);
        endTime.value = Date.now();
        inputValue.value = '';
      }
    }, 1000);
    startTime.value = Date.now();
  }
  
  function handleInput() {
    const word = words[currentWordIndex.value];
    const input = inputValue.value.trim();
  
    if (input === word) {
      correctCharacters.value += word.length;
      currentWordIndex.value++;
      inputValue.value = '';
    } else {
      incorrectCharacters.value += input.length;
      inputValue.value = '';
    }
  }
  
  watch(inputValue, (newVal) => {
    if (newVal === 'the') {
      startTimer();
    }
  });
  
  </script>
  
  <style scoped>
  input::-webkit-input-placeholder {
    /* Safari, Chrome */
    opacity: 0.5;
  }
  input:-moz-placeholder
  input:-ms-input-placeholder {
    /* IE 10+ */
    opacity: 0.5;
  }
  input:-moz-placeholder {
    /* Firefox 18- */
    opacity: 0.5;
  }

  input:focus {
    border-bottom-width: 3px;
    border-color: #3182ce;
  }
</style>
  