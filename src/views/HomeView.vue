<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import ButtonGreen from "@/components/btn/ButtonGreen.vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <main>
    <h1 class="text-white">Say Hi from Drake, Framer Designer and Developer</h1>
    <ButtonGreen class="my-10">
      HIRE Me
    </ButtonGreen>
  </main>
</template>
