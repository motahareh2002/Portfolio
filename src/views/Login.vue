
<script setup lang="ts">
import img from "@/assets/socials.svg";
import eye from "@/assets/eye 1.svg";
import google from "@/assets/google.svg";
import Facebook from "@/assets/Facebook2.svg";
import apple from "@/assets/apple.svg";
</script>


<template>
  <div class="flex bgLeftLogin w-full ">
    <div class="bg-[#0b0b0f] md:w-1/2 h-[800px] xl:h-screen -z-50">
      <div class="">
        <div
          class="text-white md:mx-[60px] xl:mx-[110px] md:mt-[10px] lg:mt-[20px]"
        >
          <span class="text-[20px]">GEEG</span>
          <span class="text-[10px]">.me</span>
        </div>
        <img :src="img" alt="" class="z-200 md:w-3/4 xl:w-3/5 mx-auto md:mt-24 lg:mt-10" />
      </div>
    </div>
    <div class="md:w-1/2 md:px-8 md:pt-10 xl:pt-16">
      <div class="bg-white xl:w-8/12 mx-auto shadow-md rounded-[20px] p-10">
        <div class="flex justify-between items-start">
          <div class="flex flex-col">
            <span class="md:text-[15px] lg:text-[17px]">Welcome to Glink</span>
            <span class="font-bold md:text-[40px] lg:text-[45px]">Sign in</span>
          </div>
          <div class="flex flex-col md:text-[11px] lg:text-[14px]">
            <span class="text-[#8D8D8D]">No Account ?</span>
            <a href="#" class="text-[#18C7FF]">Sign up</a>
          </div>
        </div>
        <form action="" class="flex flex-col md:mt-5">
          <label for="" class="md:text-[11px] lg:text-[16px]"
            >Enter your username or email address</label
          >
          <input
            type="text"
            placeholder="Username or email address"
            class="border border-[#ADADAD] py-1.5 px-4 mt-2 mb-8 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[11px] lg:placeholder:text-[14px]"
          />
          <label for="" class="md:text-[11px] lg:text-[16px]">Enter your Password</label>
          <div class="flex relative">
            <input
              type="password"
              placeholder="Password"
              class="border w-full border-[#ADADAD] py-1.5 px-4 mt-2 mb-2 focus:outline-[#4285F4] rounded-md placeholder:font-light placeholder:text-[11px] lg:placeholder:text-[14px]"
            />
            <img :src="eye" alt="" class="absolute right-2 top-4" />
          </div>
          <a href="#" class="text-[#FF3636] text-[10px] lg:text-[13px] self-end"
            >Forgot Password</a
          >
          <button
            type="submit"
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="text-center text-white w-full py-2.5 px-4 my-5 rounded-md"
          >
            Sign in
          </button>
          <span class="text-center text-[#ABABAB] md:text-[15px]">OR</span>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-5 mt-5">
            <button class="bg-[#E6F8FF] flex items-center p-2 rounded-md col-span-3">
              <img :src="google" alt="" />
              <span class="text-[14px] ml-2">Sign in with Google</span>
            </button>
            <button class="bg-[#F6F6F6] flex items-center justify-center py-2.5 rounded-md ">
              <img :src="Facebook" alt="" />
            </button>
            <button class="bg-[#F6F6F6] flex items-center justify-center py-2.5 rounded-md">
              <img :src="apple" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bgLeftLogin {
  background: url("/src/assets/bgLeftLogin.svg") no-repeat;
  background-size: cover;
}
</style>