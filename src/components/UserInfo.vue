
<script setup lang="ts">
import img from "@/assets/userPic.svg";
import instagram from "@/assets/instagram.svg";
import youtube from "@/assets/youtube.svg";
import snapchat from "@/assets/snapchat.svg";
import face from "@/assets/facebook.svg";
defineProps({
  avator: String,
  title: String,
  description: String,
  social1: String,
  social2: String,
  social3: String,
  social4: String,
});
</script>

<template>
  <div class="rounded-lg bgPic group w-1/4  p-10">
    <div class="relative">
      <!-- <img
        :src="`${img}`"
        class="brightness-50 transition-all duration-300 h-screen"
      /> -->
      <div class="flex flex-col items-center">
        <img :src="`${avator}`" class="w-20 lg:w-32 mx-auto" />
        <span
          class="text-white mt-5 font-medium text-[20px] lg:text-[26px] mx-auto text-center"
          >{{ title }}</span
        >
        <span
          class="text-white mt-5 text-[15px] lg:text-[20px] mx-auto text-center"
        >
          {{ description }}
        </span>
        <div class="flex flex-col md:mt-5 w-full">
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-full text-[10px] lg:text-[14px] mx-auto"
            >{{ social1 }}</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-full text-[10px] lg:text-[14px] mx-auto"
            >{{ social2 }}</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-full text-[10px] lg:text-[14px] mx-auto"
            >{{ social3 }}</span
          >
          <span
            class="bg-[#000000] rounded-[55px] text-white md:p-3 xl:p-4 md:mt-2 text-center w-full text-[10px] lg:text-[14px] mx-auto"
            >{{ social4 }}</span
          >
        </div>
        <div class="flex mt-5">
          <img :src="face" alt="" class="mx-1 w-5" />
          <img :src="instagram" alt="" class="mx-1 w-5" />
          <img :src="youtube" alt="" class="mx-1 w-5" />
          <img :src="snapchat" alt="" class="mx-1 w-5" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.bgPic {
  background: url("/src/assets/userPic.svg") rgba(58, 58, 58, 0.7) no-repeat 50%;
  background-blend-mode: darken;
}
</style>