<script setup lang="ts">
defineProps({
  title: String,
});
</script>



<template>
  <span
    class="bg-white w-full flex items-center justify-center text-center text-[12px] md:text-[14px] lg:text-[15px] mr-2 rounded-[30px] lg:p-3 p-[0.1rem]"
  >
    {{ title }}
  </span>
</template>