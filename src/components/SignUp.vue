<script setup lang="ts">
import eye from "@/assets/eye 1.svg";
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
            >Sign up</span
          >
        </div>
        <div
          class="flex md:flex-col my-3 md:my-0 text-[14px] md:text-[11px] lg:text-[14px]"
        >
          <span class="text-[#8D8D8D]">Have an Account ?</span>
          <a href="#" class="text-[#18C7FF] ml-14 md:ml-0">Sign in</a>
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
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
          <div class="flex flex-col">
            <label for="" class="text-[14px] mb-1 md:text-[11px] lg:text-[16px]"
              >User name</label
            >
            <input
              type="text"
              placeholder="User name"
              class="border border-[#ADADAD] py-1.5 px-4 mt-2 mb-8 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[14px] md:placeholder:text-[11px] lg:placeholder:text-[14px]"
            />
          </div>
          <div class="flex flex-col">
            <label for="" class="text-[14px] mb-1 md:text-[11px] lg:text-[16px]"
              >Contact Number</label
            >
            <input
              type="text"
              placeholder="Contact Number"
              class="border border-[#ADADAD] py-1.5 px-4 mt-2 mb-8 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[14px] md:placeholder:text-[11px] lg:placeholder:text-[14px]"
            />
          </div>
        </div>
        <label for="" class="text-[14px] mb-1 md:text-[11px] lg:text-[16px]"
          >Enter your Password</label
        >
        <div class="flex relative">
          <input
            type="password"
            placeholder="Password"
            class="border w-full border-[#ADADAD] py-1.5 px-4 mt-2 mb-2 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[14px] md:placeholder:text-[11px] lg:placeholder:text-[14px]"
          />
          <img :src="eye" alt="" class="absolute right-2 top-4" />
        </div>
        <button
          type="submit"
          style="
            background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
          "
          class="text-center shadow-lg text-white w-full py-2.5 mt-11 mb-8 px-4 md:my-5 md:mt-10 rounded-md"
        >
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>