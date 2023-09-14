

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import type { Ref } from "vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
const isToggle: Ref<boolean> = ref(false);
const ToToggle = () => {
  isToggle.value = !isToggle.value;
};
</script>

<template>
  <div
    class="dark:bg-blackBg dark:text-white border-b dark:border-gray p-3 flex items-center justify-between"
  >
    <fa icon="bars" class="text-xl" />
    <img
      src="../../assets/light.svg"
      alt=""
      v-if="isToggle"
      @click="
        () => {
          toggleDark();
          ToToggle();
        }
      "
    />
    <img
      src="@/assets/dark.svg"
      alt=""
      v-if="!isToggle"
      @click="
        () => {
          toggleDark();
          ToToggle();
        }
      "
    />
  </div>
</template>

