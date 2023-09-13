

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from 'vue';
import type {Ref} from 'vue'
const isDark = useDark();
const toggleDark = useToggle(isDark);
const icon : Ref<string> = ref("sun")
const isToggle : Ref<boolean> = ref(false)
const ToToggle = ()=>{
   isToggle.value = !isToggle.value
   if(isToggle.value === false) icon.value = "sun"
   else if(isToggle.value === true) icon.value = "moon"
}
</script>

<template>
  <div
    class="dark:bg-blackBg dark:text-white border-b dark:border-gray p-3 flex items-center justify-between"
  >
    <fa icon="bars" class="text-xl" />
    <fa
      @click="
        () => {
          toggleDark();
          ToToggle()
        }
      "
      :icon="icon"
      :class="{'text-yellow-500' : isToggle}"
      class="text-gray"
    />
  </div>
</template>

