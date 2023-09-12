<script setup lang="ts">
import ButtonGreen from "./btn/ButtonGreen.vue";
import EnvelopeIcon from './icons/EnvelopeIcon.vue'
</script>

<template>
  <div class="dark:text-white rounded-3xl border border-gray flex flex-col  p-6">
    <div class="flex justify-between">
      <span class="text-2xl">Motahareh</span>
      <span>Front-End Developer</span>
    </div>
    <div class="flex flex-col items-center my-10">
        <img src="https://www.wpriverthemes.com/HTML/drake/assets/images/me.jpg" alt="" class="rounded-3xl w-2/3">
        <span class="text-gray">Motaharehjafi@gmail.com</span>
        <span class="text-gray">Developer in Mashahd , Iran</span>
    </div>
    <ButtonGreen class="flex justify-center">
      <EnvelopeIcon/>
      <span>HIRE ME</span>
    </ButtonGreen>
  </div>
</template>
