<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/assets/style.css";
import arrow from "@/assets/arrow-down.svg";
import trade from "@/assets/trade.svg";
import cash from "@/assets/cash.svg";
import wallet from "@/assets/wallet.svg";
import login from "@/assets/Login.svg";
import star from "@/assets/star-img.svg";
import bg3 from "@/assets/bg3.svg";
import arrow2 from "@/assets/arrow2.svg";
import bag from "@/assets/bag.svg";
import bg from "@/assets/bg2.svg";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="bg-[#0b0b0f] h-fit">
    <div class="relative">
      <img :src="bg" alt="" class="w-full hidden md:block" />
      <img src="../assets/bgHomeTopMob.svg" alt="" class="w-full md:hidden" />
      <div class="absolute top-0">
        <!-- header -->
        <Header />

        <!-- banner -->
        <div
          class="mt-32 md:mt-32 lg:mt-44 xl:mt-56 flex flex-col items-center"
        >
          <p
            class="text-[#FFFFFF] w-[300px] sm:w-3/4 text-[36px] sm:text-[40px] md:text-[55px] lg:text-[80px] text-center mx-auto font-black md:w-[600px] lg:w-[760px]"
          >
            "Unlock Rewards with GeeG.Me!"
          </p>
          <p
            class="text-[#898CA9] w-2/4 text-[11px] md:text-[12px] my-5 lg:text-[16px] lg:w-[550px] text-center mx-auto md:w-[420px]"
          >
            Elevate your online presence while earning loyalty coins with
            GeeG.Me . Simplify your links, amplify your reach, and reap the
            rewards!
          </p>
          <button
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="rounded-[10px] text-[#FFFFFF] py-2.5 px-6 md:text-[13px] mt-5"
          >
            Get Started
          </button>
        </div>

        <!-- Carts -->
        <div
          class="hidden md:grid grid-cols-3 md:gap-3 lg:gap-8 md:mt-32 xl:mt-56 md:pb-10 md:mx-[60px] xl:mx-[190px]"
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
              Engage with the platform and earn loyalty coins for each
              interaction
            </p>
          </div>
        </div>
        <!-- Carts under md -->
        <div class="md:hidden ">
          <Swiper
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '100': {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              '640': {
                slidesPerView: 1.7,
                spaceBetween: 5,
              },
            }"
            class="w-[350px] sm:w-[500px] mt-32"
          >
            <SwiperSlide>
              <div
                class="bg-[#1A1B23] py-[32px] lg:py-[45px] px-[24px] rounded-[20px] mx-auto text-center"
              >
                <div
                  class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 mb-4 mx-auto p-2 border border-[#B982FF]"
                >
                  <img :src="trade" alt="" />
                </div>
                <span
                  class="font-extrabold text-[#FFFFFF] text-[14px] lg:text-[20px]"
                  >Centralized Link Hub</span
                >
                <p class="text-[#898CA9] text-[11px] lg:text-[16px] mt-2">
                  Gather all your essential links in one convenient location.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-[#1A1B23]  py-[32px] lg:py-[45px] px-[24px] rounded-[20px] text-center"
              >
                <div
                  class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 mb-4 mx-auto p-2 border border-[#B982FF]"
                >
                  <img :src="cash" alt="" />
                </div>
                <span
                  class="font-extrabold text-[#FFFFFF] text-[14px] lg:text-[20px]"
                  >Customizable Design</span
                >
                <p class="text-[#898CA9] text-[11px] lg:text-[16px] mt-2">
                  Personalize your page to reflect your unique brand identity.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="bg-[#1A1B23] py-[32px] lg:py-[45px] px-[24px] rounded-[20px] mx-auto text-center"
              >
                <div
                  class="w-[50px] h-[50px] rounded-full backdrop-blur-sm bg-white/20 mb-4 mx-auto p-2 border border-[#B982FF]"
                >
                  <img :src="wallet" alt="" />
                </div>
                <span
                  class="font-extrabold text-[#FFFFFF] text-[14px] lg:text-[20px]"
                  >Earn Loyalty Coins</span
                >
                <p class="text-[#898CA9] text-[11px] lg:text-[16px] mt-2">
                  Engage with the platform and earn loyalty coins for each
                  interaction
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- main -->
        <main
          class="flex flex-col mt-32 sm:flex-row items-center md:mr-[60px] xl:mr-[150px]"
        >
          <span
            class="font-black sm:hidden text-white text-[22px] lg:text-[25px]"
            >How It Works Section</span
          >
          <img
            :src="login"
            alt=""
            class="w-2/3 my-5 sm:w-5/12 md:w-5/12 lg:w-5/12 md:mt-0"
          />
          <div class="ml-10 lg:-ml-20">
            <swiper
              :slidesPerView="1"
              :loop="true"
              :navigation="{
                nextEl: '.next',
                prevEl: '.prev',
              }"
              :pagination="{
                clickable: true,
              }"
              :modules="[Pagination, Navigation]"
              class="mySwiper w-[300px] md:w-[350px] lg:w-[600px]"
            >
              <swiper-slide v-for="i in 5" :key="i"
                ><div class="flex flex-col items-start lg:ml-32">
                  <span
                    class="font-black hidden md:block text-white md:text-[16px] lg:text-[25px]"
                    >How It Works Section</span
                  >
                  <span
                    class="font-semibold text-white text-[28px] lg:text-[42px] md:mt-5 mb-1"
                    >Create Your Page</span
                  >
                  <p class="text-[#898CA9] text-[10px] lg:text-[16px]">
                    Sign up and set up your personalized link hub effortlessly
                  </p>
                  <button
                    class="rounded-[10px] text-[#FFFFFF] border w-1/2 md:w-1/3 xl:w-1/4 py-2.5 px-4 lg:py-3.5 md:text-[13px] lg:text-[13px] mt-5"
                  >
                    Get Started
                  </button>
                </div></swiper-slide
              >
            </swiper>
            <div class="my-5 flex justify-end items-center">
              <!-- <div class="swiper-pagination"></div> -->
              <div class="flex items-center relative z-10 w-fit bottom-[45px]">
                <div class="mr-5">
                  <button
                    class="bg-[#696969] prev hover:bg-[#a3a3a2] rounded-full"
                  >
                    <img
                      :src="arrow"
                      alt=""
                      class="rotate-180 w-3 lg:w-5 p-1"
                    />
                  </button>
                  <button
                    class="bg-[#696969] next hover:bg-[#a3a3a2] rounded-full ml-2"
                  >
                    <img :src="arrow" alt="" class="w-3 lg:w-5 p-1" />
                  </button>
                </div>
                <img :src="star" alt="" class="w-10" />
              </div>
            </div>
          </div>
          <!--  -->
        </main>
      </div>
    </div>
    <div class="relative hidden md:block">
      <img :src="bg3" alt="" class="" />
      <!-- text -->
      <div
        class="md:pb-20 md:mx-auto md:w-9/12 lg:w-8/12 absolute md:top-[400px] left-0 right-0 text-center mr-auto ml-auto"
      >
        <p
          class="font-black text-white text-center md:text-[15px] xl:text-[20px]"
        >
          Join our pioneering social media platform where followers and
          influencers securely communicate, exchanging ideas and tasks, seizing
          the opportunity to earn cryptocurrency rewards along the way.
        </p>
        <a
          href="#"
          class="text-[#B982FF] md:text-[12px] lg:text-[15px] md:mt-5 flex items-center justify-center"
        >
          <span>Start Earning Loyalty Coins Today!</span>
          <img :src="arrow2" alt="" />
        </a>
      </div>
      <div
        class="absolute md:top-1/2 lg:top-1/3 md:ml-[80px] xl:ml-[150px] flex justify-between items-center"
      >
        <div class="">
          <p
            class="font-black text-white md:text-[25px] lg:text-[35px] mb-3 lg:w-10/12"
          >
            Enter the world of safe, secure cryptocurrency adventures
          </p>
          <p
            class="text-[#898CA9] md:text-[12px] lg:text-[16px] w-10/12 lg:w-7/12"
          >
            with our platform's coin, essential for our task-based economy,
            while boosting our customers' businesses.
          </p>
          <button
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="rounded-[10px] text-[#FFFFFF] md:py-2.5 md:px-6 md:text-[13px] md:mt-5"
          >
            Geegcoin
          </button>
        </div>
        <img :src="bag" alt="" class="w-1/2" />
      </div>
    </div>
    <div class="md:hidden">
      <div class="bg-[#0b0b0f] py-56">
        <p class="p-10  font-black text-white leading-6 text-center text-[12px]">
          Join our pioneering social media platform where followers and
          influencers securely communicate, exchanging ideas and tasks, seizing
          the opportunity to earn cryptocurrency rewards along the way.
        </p>
        <a
          href="#"
          class="text-[#B982FF] mt-4 text-[12px] flex items-center justify-center"
        >
          <span>Start Earning Loyalty Coins Today!</span>
          <img :src="arrow2" alt="" />
        </a>

        <img src="../assets/bag.2.svg" alt="" class="h-1/4  -mt-56 w-full sm:mx-auto sm:w-1/2" />
        <div class="-mt-56 ml-[60px] sm:ml-[30%]">
          <p
            class="font-black sm:w-2/3 text-white text-[25px] lg:text-[35px] mb-3 "
          >
            Enter the world of safe, secure cryptocurrency adventures
          </p>
          <p
            class="text-[#898CA9] sm:w-2/3 text-[12px] lg:text-[16px] w-10/12 lg:w-7/12"
          >
            with our platform's coin, essential for our task-based economy,
            while boosting our customers' businesses.
          </p>
          <button
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="rounded-[10px] text-[#FFFFFF] py-2.5 px-6 text-[13px] mt-5"
          >
            Geegcoin
          </button>
        </div>
      </div>
    </div>
    <Footer class="" />
  </div>
</template>

<style>
.mySwiper {
  /* overflow: visible; */
  padding-bottom: 45px;
}
.swiper-pagination {
  position: absolute;
  bottom: 0px !important;
  width: fit-content;
  left: -120px !important;
}
.swiper-pagination-bullet {
  background-color: #d9d9d9;
  width: 5px;
  height: 5px;
}

.swiper-pagination-bullet-active {
  background: linear-gradient(87.6deg, #933ffd 2.08%, #18c7ff 95.27%);
  width: 50px;
  height: 5px;
  border-radius: 10px;
}
</style>
