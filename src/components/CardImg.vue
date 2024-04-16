
<script setup lang="ts">
import img from "@/assets/Rectangle 39235.svg";
import img2 from "@/assets/Rectangle 39237.svg";
</script>

<template>
  <div class="rounded-lg relative m-2 group">
    <div class="w-[100%] relative">
      <img
        :src="`${img}`"
        class="rounded-lg brightness-50 transition-all duration-300 w-full"
      />
      <div class="">
        <img
          :src="`${img2}`"
          class="w-32 absolute top-20 lg:top-10 left-0 right-0 mx-auto"
        />
        <span
          class="text-white mt-10 font-medium text-[26px] absolute top-56 lg:top-32 xl:top-44 left-0 right-0 mx-auto text-center"
          >Sara Anderson</span
        >
        <span
          class="text-white mt-24 text-[15px] absolute top-56 lg:top-36 xl:top-44 left-0 right-0 mx-auto text-center"
        >
          fitness model, and personal trainer
        </span>
        <div
          class="flex flex-col absolute md:top-1/2 lg:top-5/12 xl:top-8/12 md:mt-16 lg:mt-5 xl:mt-10 left-0 right-0 mx-auto"
        >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-3/4 mx-auto"
            >Geegcoin.com</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-3/4 mx-auto"
            >Instagram.com</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-3/4 mx-auto"
            >Youtube.com</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-3/4 mx-auto"
            >Contact</span
          >
        </div>
      </div>
    </div>
    <div
      class="absolute rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center inset-0 bg-[#D8D8D8] bg-opacity-50"
    >
      <span class="text-black text-lg font-black text-[35px]">Try it</span>
    </div>
  </div>
</template>
