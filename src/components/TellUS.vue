<script setup lang="ts">
import { ref } from "vue";
const categories = ref([
  "Fashion",
  "Small Business",
  "Health and Fitness",
  "Sport",
  "Influencer and Creator",
  "Marketing",
  "Marketing",
  "Sport",
  "Influencer and Creator",
  "Health and Fitness",
  "Sport",
  "Music",
  "Small Business",
  "Small Business",
  "Social Media",
  "Sport",
]);
</script>


<template>
  <div class="w-full bg-white z-50 md:w-1/2">
    <div
      class="text-balck px-10 pt-5 font-semibold mx-9 md:mt-[10px] lg:mt-[20px]"
    >
      <span class="text-[20px]">GEEG</span>
      <span class="text-[10px]">.me</span>
    </div>
    <div class="md:px-8 pt-20 md:pt-5 xl:pt-10">
      <div class="mx-auto md:rounded-[20px] p-10">
        <p class="font-bold text-[25px] lg:text-[46px]">
          Tell us about yourself
        </p>
        <p class="mx-auto text-[12px] mt-3 lg:text-[16px]">
          This will personalize your GeeG experience.
        </p>
        <div class="mt-5">
          <span class="font-bold text-[11px] md:text-[15px]"
            >Select one category that best describes your Geeg:</span
          >
          <div class="flex flex-wrap mt-2 md:-ml-2">
            <span
              v-for="(category, index) in categories"
              :key="index"
              class="bg-[#E8E8E8] m-2 text-[10px] lg:text-[14px] text-center p-2 rounded-[50px]"
            >
              {{ category }}
              cc
            </span>
          </div>
        </div>
        <form action="" class="flex flex-col md:mt-5">
          <button
            type="submit"
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="text-center  mx-auto shadow-lg md:mb-0 text-white w-full py-2.5 mt-11 px-4 md:my-5 md:mt-5 rounded-md"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</template>