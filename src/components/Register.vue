<script setup lang="ts">
import eye from "@/assets/eye 1.svg";
</script>


<template>
  <div class="w-full bg-white z-50 md:w-1/2">
    <div
      class="text-balck px-10 pt-5 font-semibold md:mx-[60px] xl:mx-[110px] md:mt-[10px] lg:mt-[20px]"
    >
      <span class="text-[20px]">GEEG</span>
      <span class="text-[10px]">.me</span>
    </div>
    <div class="md:px-8 pt-20 md:pt-10 xl:pt-28">
      <div class="mx-auto md:rounded-[20px] p-10">
        <p class="text-center font-bold text-[30px] lg:text-[46px]">
          Welcome to Geeg Link
        </p>
        <p class="text-center mx-auto text-[12px] mt-3 lg:text-[16px]">
          Choose your GeeG link username. You can always change it later
        </p>
        <form action="" class="flex flex-col md:mt-5">
          <div class="flex relative w-full lg:w-4/5 mx-auto">
            <input
              type="text"
              placeholder="username"
              class="mt-10 w-full bg-[#EFF0EC] p-3 rounded-lg text-[12px] md:p-4"
              value="geeg.com/"
            />
            <img
              src="../assets/close-circle.svg"
              alt=""
              class="absolute right-2 top-12 w-6"
            />
          </div>
          <button
            type="submit"
            style="
              background: linear-gradient(
                225deg,
                #18c8ff 14.89%,
                #933ffe 85.85%
              );
            "
            class="text-center lg:w-4/5 mx-auto shadow-lg text-white w-full py-2.5 mt-11 mb-8 px-4 md:my-5 md:mt-10 rounded-md"
          >
            Continue
          </button>
          <div
            class="mx-auto my-3 md:my-0 text-[14px] md:text-[11px] lg:text-[14px]"
          >
            <span class="text-[#8D8D8D]">Have an Account ?</span>
            <a href="#" class="text-[#18C7FF] ml-2">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>