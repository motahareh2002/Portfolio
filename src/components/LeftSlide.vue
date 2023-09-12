<script setup lang="ts">
import ButtonGreen from "./btn/ButtonGreen.vue";
import EnvelopeIcon from "./icons/EnvelopeIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import LinkdinIcon from "./icons/LinkdinIcon.vue";
import TelegtamIcon from "./icons/TelegtamIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
</script>

<template>
  <div class="rounded-3xl border  dark:bg-transparent border-gray flex flex-col p-3 my-10 margin">
    <div class="flex justify-between items-center dark:text-white">
      <span class="text-2xl">Motahareh</span>
      <span>Front-End Developer</span>
    </div>
    <div class="flex flex-col  items-center my-10">
      <img
        src="https://www.wpriverthemes.com/HTML/drake/assets/images/me.jpg"
        alt=""
        class="rounded-3xl w-2/3"
      />
      <span class="mt-8 dark:text-white">Motaharehjafi@gmail.com</span>
      <span class="mt-3 text-lg dark:text-white">Developer in Mashahd , Iran</span>
      <span class="mt-3 text-gray text-xs">&copy; 2023 Motahareh. All Rights Reserved</span>
      <div class="mt-5">
        <InstagramIcon class="Icons" />
        <LinkdinIcon class="Icons" />
        <TelegtamIcon class="Icons" />
        <TwitterIcon class="Icons" />
      </div>
    </div>
    <ButtonGreen class="flex justify-center">
      <EnvelopeIcon />
      <span class="ml-2">HIRE ME</span>
    </ButtonGreen>
  </div>
</template>
