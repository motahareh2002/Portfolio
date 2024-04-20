
<script setup lang="ts">
import TellUs from "@/components/TellUS.vue";
import img from "@/assets/socials.svg";
import Header from "@/components/Header.vue";
</script>


<template>
  <div class="">
    <div class="md:flex bgLeftLogin w-full">
      <TellUs />
      <div
        class="md:bg-[#0b0b0f] pb-28 hidden md:block sm:pb-32 md:pb-0 h-auto md:w-1/2 md:h-[800px] lg:h-[900px] xl:h-screen -z-50"
      >
        <div class="">
          <Header class="md:hidden" />
          <img
            :src="img"
            alt=""
            class="z-200 mt-20 w-3/4 sm:w-1/2 xl:w-3/5 mx-auto mb-10 md:mt-24 lg:mt-10"
          />
        </div>
        <button
          @click="
            () => {
              isShow = false;
            }
          "
          style="
            background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
          "
          class="w-3/5 sm:w-1/2 text-white justify-between py-2 mt-24 sm:mt-16 px-10 rounded-[62px] mx-auto md:hidden flex items-center"
        >
          <span>Get Start</span>
          <img src="/src/assets/arrow-right.svg" alt="" class="w-10" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgLeftLogin {
  background: url("/src/assets/bgLeftLogin.svg") #0b0b0f no-repeat;
  background-size: cover;
}
@media only screen and (min-width: 768px) {
  .bgLeftLogin {
    background: url("/src/assets/bgLeftLogin.svg") no-repeat;
    background-size: cover;
  }
}
</style>