<script setup lang="ts">
import arrow from "@/assets/arrow-down.svg";
import trade from "@/assets/trade.svg";
import cash from "@/assets/cash.svg";
import wallet from "@/assets/wallet.svg";
import login from "@/assets/Login.svg";
import star from '@/assets/star-img.svg'
</script>

<template>
  <div class="h-fit bg-black">
    <!-- header -->
    <header
      class="text-[#FFFFFF] md:mx-[60px] xl:mx-[190px] md:pt-[29px] md:flex justify-between items-center"
    >
      <div>
        <span class="text-[20px]">GEEG</span>
        <span class="text-[9px]">.me</span>
      </div>
      <!-- menu -->
      <ul class="flex items-center md:text-[12px] lg:text-[14px] font-semibold">
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
      <div class="font-semibold">
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

    <!-- banner -->
    <div class="mt-32 flex flex-col items-center">
      <p
        class="text-[#FFFFFF] md:text-[55px] lg:text-[80px] text-center mx-auto font-black md:w-[600px] lg:w-[760px]"
      >
        "Unlock Rewards with GeeG.Me!"
      </p>
      <p
        class="text-[#898CA9] md:text-[12px] md:my-5 lg:text-[16px] lg:w-[550px] text-center mx-auto md:w-[420px]"
      >
        Elevate your online presence while earning loyalty coins with GeeG.Me .
        Simplify your links, amplify your reach, and reap the rewards!
      </p>
      <button
        style="
          background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
        "
        class="rounded-[10px] text-[#FFFFFF] md:py-2.5 md:px-6 md:text-[13px] md:mt-5"
      >
        Get Started
      </button>
    </div>

    <!-- Carts -->
    <div
      class="grid grid-cols-3 md:gap-3 lg:gap-8 md:mt-32 md:pb-20 md:mx-[60px] xl:mx-[190px]"
    >
      <div
        class="bg-[#1A1B23] md:py-[32px] lg:py-[45px] md:px-[24px] rounded-[20px] mx-auto text-center"
      >
        <div
          class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 md:mb-4 mx-auto p-2 border border-[#B982FF]"
        >
          <img :src="trade" alt="" />
        </div>
        <span
          class="font-extrabold text-[#FFFFFF] md:text-[14px] lg:text-[20px]"
          >Centralized Link Hub</span
        >
        <p class="text-[#898CA9] md:text-[11px] lg:text-[16px] mt-2">
          Gather all your essential links in one convenient location.
        </p>
      </div>
      <div
        class="bg-[#1A1B23] md:py-[32px] lg:py-[45px] md:px-[24px] rounded-[20px] mx-auto text-center"
      >
        <div
          class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 md:mb-4 mx-auto p-2 border border-[#B982FF]"
        >
          <img :src="cash" alt="" />
        </div>
        <span
          class="font-extrabold text-[#FFFFFF] md:text-[14px] lg:text-[20px]"
          >Customizable Design</span
        >
        <p class="text-[#898CA9] md:text-[11px] lg:text-[16px] mt-2">
          Personalize your page to reflect your unique brand identity.
        </p>
      </div>
      <div
        class="bg-[#1A1B23] md:py-[32px] lg:py-[45px] md:px-[24px] rounded-[20px] mx-auto text-center"
      >
        <div
          class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 md:mb-4 mx-auto p-2 border border-[#B982FF]"
        >
          <img :src="wallet" alt="" />
        </div>
        <span
          class="font-extrabold text-[#FFFFFF] md:text-[14px] lg:text-[20px]"
          >Earn Loyalty Coins</span
        >
        <p class="text-[#898CA9] md:text-[11px] lg:text-[16px] mt-2">
          Engage with the platform and earn loyalty coins for each interaction
        </p>
      </div>
    </div>

    <!-- main -->
    <main class="flex justify-between items-center md:mx-[60px] xl:mx-[190px]">
      <img :src="login" alt="" class="md:w-5/12 lg:w-5/12" />
      <div class="md:w-7/12 lg:w-6/12 flex flex-col">
        <span class="font-black text-white md:text-[16px] lg:text-[25px]"
          >How It Works Section</span
        >
        <span class="font-semibold text-white md:text-[28px] lg:text-[42px] md:mt-5 md:mb-1"
          >Create Your Page</span
        >
        <p class="text-[#898CA9] md:text-[10px] lg:text-[16px]">
          Sign up and set up your personalized link hub effortlessly
        </p>
        <button
          class="rounded-[10px] text-[#FFFFFF] border md:w-1/3 lg:w-1/4  md:py-2.5 md:px-4 md:text-[13px] md:mt-5"
        >
          Get Started
        </button>
        <div class="my-2">
          <div></div>
          <div class="flex items-center">
            <div class="mr-2">
              <button class="bg-[#696969] hover:bg-[#a3a3a2] rounded-full p-0.5">
                <img :src="arrow" alt="" class="rotate-180" />
              </button>
              <button class="bg-[#696969] hover:bg-[#a3a3a2] rounded-full p-0.5 ml-2">
                <img :src="arrow" alt=""  />
              </button>
            </div>
            <img :src="star" alt="" class="w-10">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
