<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

import LeftSlide from '@/components/LeftSlide.vue';
import AllMenus from '@/components/menu/AllMenus.vue';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
    <!-- <Button @click="toggleDark()" class="dark:text-white">change Mood</Button> -->
    <AllMenus />
    <LeftSlide />
  </div>
</template>
