
<script setup lang="ts">
import logo from "@/assets/Group 249.svg";
import avator from "@/assets/Rectangle 39245.svg";
import pause from "@/assets/pause.svg";
import bucket from "@/assets/bucket-square.svg";
import status from "@/assets/status-up.svg";
import setting from "@/assets/setting.svg";
import logOut from "@/assets/logout.svg";
import { useRoute } from "vue-router";
const route = useRoute().path;
</script>


<template>
  <div>
    <div
      class="bg-[#0B0B0F] hidden h-screen w-[80px] py-5 md:flex flex-col justify-between items-center"
    >
      <div class="flex flex-col items-center">
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
    <div class="bg-[#0B0B0F] md:hidden pb-2 w-full fixed bottom-0 z-50">
      <ul class="flex -mt-2 w-full sm:w-3/4 sm:mx-auto text-white">
        <RouterLink
          to="/dashboard"
          :class="{
            'bg-[#4285F4] rounded-[20px] mx-2': route === '/dashboard',
          }"
          class="mt-5 w-full px-4 flex items-center justify-center p-2 self-center"
        >
          <img :src="pause" alt="" class="w-5" />
          <span class="ml-2 text-[12px]" v-if="route === '/dashboard'"
            >links</span
          >
        </RouterLink>
        <li class="mt-5 w-full flex justify-center p-2 self-center">
          <img :src="bucket" alt="" class="w-5" />
        </li>
        <RouterLink
          to="/newlink"
          :class="{
            'bg-[#4285F4] rounded-[20px] mx-2':
              route === '/newlink' || route === '/newlink2',
          }"
          class="mt-5 w-full flex items-center justify-center p-2 self-center"
        >
          <img src="../assets/add.svg" alt="" class="w-5" />
          <span
            class="ml-2 text-[12px]"
            v-if="route === '/newlink' || route === '/newlink2'"
            >Add</span
          >
        </RouterLink>
        <li class="mt-5 w-full flex justify-center p-2 self-center">
          <img :src="status" alt="" class="w-5" />
        </li>
        <li class="mt-5 w-full flex justify-center p-2 self-center">
          <img :src="setting" alt="" class="w-5" />
        </li>
      </ul>
    </div>
  </div>
</template>