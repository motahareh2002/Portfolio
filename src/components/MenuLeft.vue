
<script setup lang="ts">
import logo from "@/assets/Group 249.svg";
import avator from "@/assets/Rectangle 39245.svg";
import pause from "@/assets/pause.svg";
import bucket from "@/assets/bucket-square.svg";
import status from "@/assets/status-up.svg";
import setting from "@/assets/setting.svg";
import logOut from "@/assets/logout.svg";
</script>


<template>
  <div class="flex items-start">
    <div
      class="bg-[#0B0B0F] hidden h-screen w-[80px] py-5 md:flex flex-col justify-between items-center "
    >
      <div>
        <img :src="logo" alt="" class="w-10" />
        <img :src="avator" alt="" class="mt-8" />
        <ul class="flex flex-col items-center mt-5 w-full">
          <li
            class="mt-5 hover:bg-[#4285F4] w-full flex justify-center p-2 self-center"
          >
            <img :src="pause" alt="" class="w-5" />
          </li>
          <li
            class="mt-5 hover:bg-[#4285F4] w-full flex justify-center p-2 self-center"
          >
            <img :src="bucket" alt="" class="w-5" />
          </li>
          <li
            class="mt-5 hover:bg-[#4285F4] w-full flex justify-center p-2 self-center"
          >
            <img :src="status" alt="" class="w-5" />
          </li>
          <li
            class="mt-5 hover:bg-[#4285F4] w-full flex justify-center p-2 self-center"
          >
            <img :src="setting" alt="" class="w-5" />
          </li>
        </ul>
      </div>
      <button>
        <img :src="logOut" alt="" class="w-5" />
      </button>
    </div>
  </div>
</template>