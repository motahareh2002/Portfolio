<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
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
    <!-- <Button @click="toggleDark()" class="dark:text-white">change Mood</Button> -->
    <LeftSlide />
  </div>
</template>
