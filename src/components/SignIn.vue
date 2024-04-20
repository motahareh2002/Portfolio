<script setup lang="ts">
import eye from "@/assets/eye 1.svg";
import google from "@/assets/google.svg";
import Facebook from "@/assets/Facebook2.svg";
import apple from "@/assets/apple.svg";
</script>


<template>
  <div class="w-full md:w-1/2 md:px-8 md:pt-10 xl:pt-16">
    <div class="bg-white xl:w-8/12 mx-auto md:shadow-md md:rounded-[20px] p-10">
      <div class="flex flex-col md:flex-row justify-between items-start">
        <div class="flex flex-col">
          <span class="text-[30px] md:text-[15px] lg:text-[17px]"
            >Welcome to Glink</span
          >
          <span class="font-bold hidden md:block md:text-[40px] lg:text-[45px]"
            >Sign in</span
          >
        </div>
        <div
          class="flex md:flex-col my-3 md:my-0 text-[14px] md:text-[11px] lg:text-[14px]"
        >
          <span class="text-[#8D8D8D]">No Account ?</span>
          <a href="#" class="text-[#18C7FF] ml-14 md:ml-0">Sign up</a>
        </div>
      </div>
      <form action="" class="flex flex-col mt-14 md:mt-5">
        <label for="" class="text-[14px] mb-1 md:text-[11px] lg:text-[16px]"
          >Enter your username or email address</label
        >
        <input
          type="text"
          placeholder="Username or email address"
          class="border border-[#ADADAD] py-1.5 px-4 mt-2 mb-8 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[14px] md:placeholder:text-[11px] lg:placeholder:text-[14px]"
        />
        <label for="" class="text-[14px] mb-1 md:text-[11px] lg:text-[16px]"
          >Enter your Password</label
        >
        <div class="flex relative">
          <input
            type="password"
            placeholder="Password"
            class="border w-full border-[#ADADAD] py-1.5 px-4 mt-2 mb-2 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[14px] md:placeholder:text-[11px] lg:placeholder:text-[14px]"
          />
          <img
            :src="eye"
            alt=""
            class="absolute right-2 top-4"
          />
        </div>
        <a href="#" class="text-[#FF3636] text-[10px] lg:text-[13px] self-end"
          >Forgot Password</a
        >
        <button
          type="submit"
          style="
            background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
          "
          class="text-center shadow-lg text-white w-full py-2.5 mt-11 mb-8 px-4 md:my-5 rounded-md"
        >
          Sign in
        </button>
        <span class="text-center text-[#ABABAB] md:text-[15px] hidden md:inline"
          >OR</span
        >
        <div class="md:grid grid-cols-2 gap-4 md:grid-cols-5 mt-5 hidden">
          <button
            class="bg-[#E6F8FF] flex items-center p-2 rounded-md col-span-3"
          >
            <img :src="google" alt="" />
            <span class="text-[14px] ml-2">Sign in with Google</span>
          </button>
          <button
            class="bg-[#F6F6F6] flex items-center justify-center py-2.5 rounded-md"
          >
            <img :src="Facebook" alt="" />
          </button>
          <button
            class="bg-[#F6F6F6] flex items-center justify-center py-2.5 rounded-md"
          >
            <img :src="apple" alt="" />
          </button>
        </div>
        <div class="md:hidden flex justify-center mt-5" >
          <button
            class="bg-[#F6F6F6] flex items-center p-3 mx-2 rounded-full  col-span-3"
          >
            <img :src="google" alt="" />
          </button>
          <button
            class="bg-[#F6F6F6] flex items-center justify-center p-3 mx-2 rounded-full "
          >
            <img src="../assets/fundview 1.svg" alt="" />
          </button>
          <button
            class="bg-[#F6F6F6] flex items-center justify-center p-3 mx-2 rounded-full "
          >
            <img :src="Facebook" alt="" />
          </button>
          <button
            class="bg-[#F6F6F6] flex items-center justify-center p-3 mx-2 rounded-full "
          >
            <img :src="apple" alt="" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>