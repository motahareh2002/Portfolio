<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import ButtonGreen from "@/components/btn/ButtonGreen.vue";
import { useDark, useToggle } from "@vueuse/core";
import LeftSlide from '@/components/LeftSlide.vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);
// @click="toggleDark()"
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
    <LeftSlide />
  </div>
</template>
