
<script setup lang="ts">
import arrow from "@/assets/arrow-down.svg";
</script>

<template>
  <header
    class="text-[#FFFFFF] md:w-auto mx-10 md:mx-[60px] xl:mx-[190px] pt-[29px] md:flex justify-between items-center"
  >
    <div class="flex items-center justify-between md:w-auto">
      <div>
        <span class="text-[20px]">GEEG</span>
        <span class="text-[9px]">.me</span>
      </div>
      <button class="">
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
</template>