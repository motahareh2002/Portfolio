<script setup lang="ts">
import instagram from "@/assets/instagram.svg";
import youtube from "@/assets/youtube.svg";
import snapchat from "@/assets/snapchat.svg";
import face from "@/assets/facebook.svg";
</script>

<template>
  <div
    class="flex bg justify-center px-10 text-center items-center flex-col py-10"
  >
    <p class="font-black text-white text-[12px] md:text-[14px]">
      Links to your social media profiles for further engagement.
    </p>
    <div class="flex mt-5">
      <img :src="face" alt="" class="mx-1 w-5" />
      <img :src="instagram" alt="" class="mx-1 w-5" />
      <img :src="youtube" alt="" class="mx-1 w-5" />
      <img :src="snapchat" alt="" class="mx-1 w-5" />
    </div>
    <p class="text-[#898CA9] mt-10 hidden md:block">
      <span>Unsubscribe at any time.</span>
      <span class="font-bold"> Privacy policy↗</span>
    </p>
  </div>
</template>

<style scoped>
.bg{
  background: url('/src/assets/bgFooter.svg') no-repeat;
  background-size: cover;
}
</style>