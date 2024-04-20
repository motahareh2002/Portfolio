
<script setup lang="ts">
import { ref } from "vue";
import arrow from "@/assets/arrow-down.svg";
import arrow2 from "@/assets/Frame 4.svg";
const isOpen = ref(false);
const showMenu = () => {
  isOpen.value = true;
};
const unShowMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <div>
    <header
      class="text-[#FFFFFF] md:w-auto mx-10 md:mx-[60px] xl:mx-[190px] pt-[29px] md:flex justify-between items-center"
    >
      <div class="flex items-center justify-between md:w-auto">
        <div>
          <span class="text-[20px]">GEEG</span>
          <span class="text-[9px]">.me</span>
        </div>
        <button class="" @click="showMenu">
          <img src="../assets/menssu.svg" alt="" class="md:hidden" />
        </button>
      </div>
      <!-- menu -->
      <ul
        class="hidden md:flex items-center md:text-[12px] lg:text-[14px] font-semibold"
      >
        <li class="md:mx-2">Templates</li>
        <li class="md:mx-2 flex">
          Discover <img :src="arrow" alt="" class="ml-1" />
        </li>
        <li class="md:mx-2">Pricing</li>
        <li class="md:mx-2 flex">
          Learn<img :src="arrow" alt="" class="ml-1" />
        </li>
      </ul>
      <!-- btns -->
      <div class="font-semibold hidden md:flex items-center">
        <button
          class="border border-[#FFFFFF] lg:px-5 lg:py-2 rounded-[10px] md:py-1.5 md:px-3 md:text-[13px] md:mr-2"
        >
          Sign in
        </button>
        <button
          style="
            background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
          "
          class="lg:px-5 lg:py-2 text-[#FFFFFF] rounded-[10px] md:py-1.5 md:px-3 md:text-[13px]"
        >
          Sign up
        </button>
      </div>
    </header>
    <!-- menu mobile -->
    <div
      v-if="isOpen"
      class="text-[#FFFFFF] p-6 flex flex-col w-full md:hidden bg-[#0B0B0F] absolute top-0 left-0 z-50 h-[10000px]"
    >
      <button class="self-end" @click="unShowMenu">
        <img src="../assets/menssu.svg" alt="" class="" />
      </button>
      <ul class="flex flex-col text-[18px] mt-10 font-semibold">
        <li class=" flex">
          Templates <img :src="arrow2" alt="" class="ml-1" />
        </li>
        <li class="mt-8 flex">
          Discover <img :src="arrow2" alt="" class="ml-1" />
        </li>
        <li class="mt-8 flex">Pricing <img :src="arrow2" alt="" class="ml-1" /></li>
        <li class="mt-8 flex">
          Learn<img :src="arrow2" alt="" class="ml-1" />
        </li>
      </ul>
    </div>
  </div>
</template>