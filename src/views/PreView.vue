<script setup lang="ts">
import { ref } from "vue";
import instagram from "@/assets/instagram.svg";
import youtube from "@/assets/youtube.svg";
import snapchat from "@/assets/snapchat.svg";
import face from "@/assets/facebook.svg";
const socials = ref([
  "Geegcoin.com",
  "Instagram.com",
  "Youtube.com",
  "Contact",
]);
</script>


<template>
  <div class="bg h-full w-full pt-8 md:pt-1 pb-11 px-5 flex flex-col">
    <div
      class="text-white self-end flex justify-center items-center bg-[#000000] rounded-xl p-2 w-[100px]"
    >
      <img src="../assets/notification-bing.svg" alt="" />
      <span class="mx-2 text-[12px]">Sunscribe</span>
    </div>
    <div class="flex flex-col items-center mt-2 md:mt-0">
      <img src="../assets/Rectangle 39237.svg" alt="" class="w-24 lg:w-28" />
      <span
        class="text-white mt-5 md:mt-2 font-medium text-[20px] lg:text-[26px] mx-auto text-center"
        >Sara Anderson</span
      >
      <span
        class="text-white mt-5 md:mt-2 md:w-1/5 text-[15px] lg:text-[20px] mx-auto text-center"
      >
        fitness model, and personal trainer
      </span>
      <div class="flex flex-col md:mt-5 w-full mt-3">
        <span
          v-for="(social, i) in socials"
          :key="i"
          class="bg-[#000000] w-3/4 lg:w-1/5 xl:w-1/6 mx-auto rounded-[55px] text-white text-center mt-2 py-3"
          >{{ social }}</span
        >
      </div>
      <div class="flex mt-5">
        <img :src="face" alt="" class="mx-1 w-5" />
        <img :src="instagram" alt="" class="mx-1 w-5" />
        <img :src="youtube" alt="" class="mx-1 w-5" />
        <img :src="snapchat" alt="" class="mx-1 w-5" />
      </div>
      <button
        style="
          background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
        "
        class="mt-5 md:mt-20 p-2 text-white rounded-xl text-[12px]"
      >
        Creat your GeeG Link
      </button>
    </div>
  </div>
</template>


<style scoped>
.bg {
  background: url("/src/assets/userPic.svg") rgba(58, 58, 58, 0.7) no-repeat 50%;
  background-blend-mode: darken;
  background-size: cover;
}
</style>