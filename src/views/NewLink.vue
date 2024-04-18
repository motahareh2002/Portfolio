
<script setup lang="ts">
import { onMounted, ref } from "vue";
import MenuLeft from "@/components/MenuLeft.vue";
import HeaderPanel from "@/components/HeaderPanel.vue";
import UserInfro from "@/components/UserInfo.vue";
import img2 from "@/assets/Rectangle 39237.svg";
import avator from "@/assets/Rectangle 39246.svg";
const title = ref("Add New Links");
const info = {
  avator: img2,
  title: "Sara Anderson",
  description: "fitness model, and personal trainer",
  social1: "Geegcoin.com",
  social2: "Instagram.com",
  social3: "Youtube.com",
  social4: "Contact",
};
const url = ref("");
</script>


<template>
  <div class="flex items-start h-screen">
    <MenuLeft class="" />
    <div class="w-full">
      <HeaderPanel :title="title" :is-pic="false" />
      <div class="w-[73%]">
        <div class="mt-5 px-3 overflow-y-scroll h-[540px] xl:h-[620px]">
          <div class="flex items-center">
            <form action="" class="w-full flex justify-between items-center">
              <div class="flex flex-col w-3/4">
                <label for="" class="mb-1 text-[13px] lg:text-[15px]"
                  >Enter URL</label
                >
                <input
                  type="text"
                  placeholder="URL"
                  v-model="url"
                  class="focus:outline-none border border-[#ADADAD] w-full p-3 rounded-[9px] text-[12px] lg:text-[14px]"
                />
              </div>
              <button
                :class="{ '!bg-[#0B0B0F]': url.length }"
                class="bg-[#C9C9C9] mt-5 text-white w-1/4 ml-5 py-2 lg:p-3 rounded-[30px]"
              >
                Add
              </button>
            </form>
          </div>
          <hr class="mt-3 border border-[#cdcdcc]" />
          <div class="mt-5">
            <div>
              <div class="flex justify-between">
                <span class="md:text-[14px] lg:text-[18px] font-semibold"
                  >Inspired by your interests</span
                >
                <button class="p-1.5 bg-[#D9D9D966] rounded-full">
                  <img src="../assets/search-normal.svg" alt="" class="w-5" />
                </button>
              </div>
              <div class="flex my-5">
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/facebook_logo_2s016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/linkm_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagradm_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
              </div>
            </div>
            <div class="pt-3">
              <div class="flex flex-col">
                <span class="md:text-[14px] lg:text-[18px] font-semibold"
                  >Share your content</span
                >
                <span class="text-[10px] lg:text-[12px] mt-1 font-medium"
                  >Share content directly on your Geeg</span
                >
              </div>
              <div class="flex my-5">
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/dd_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/hotspot_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img src="../assets/x1.svg" alt="" class="w-8 lg:w-12" />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instxfdfagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/hotspot_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/dd_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
              </div>
            </div>
            <div class="pt-3">
              <div class="flex flex-col">
                <span class="md:text-[14px] lg:text-[18px] font-semibold"
                  >Make and collect money</span
                >
                <span class="text-[10px] lg:text-[12px] mt-1 font-medium"
                  >Sell products, services, and collect tips</span
                >
              </div>
              <div class="flex my-5">
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
                <div class="flex flex-col items-center mr-5">
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
              </div>
            </div>
            <div class="pt-3">
              <div class="flex flex-col">
                <span class="md:text-[14px] lg:text-[18px] font-semibold"
                  >Grow your following
                </span>
                <span class="text-[10px] lg:text-[12px] mt-1 font-medium"
                  >Grow, manage, and connect with your audience</span
                >
              </div>
              <div class="flex flex-wrap my-4">
                <div
                  v-for="i in 15"
                  :key="i"
                  class="mt-3 flex flex-col items-center mr-5"
                >
                  <button class="p-3 rounded-[18px] bg-[#F0F0F0] mx-auto">
                    <img
                      src="../assets/Instagram_logo_2016 1.svg"
                      alt=""
                      class="w-8 lg:w-12"
                    />
                  </button>
                  <span class="text-[12px] mt-1">instagram</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserInfro
          class="fixed right-0 top-14 bottom-0"
          :avator="info.avator"
          :title="info.title"
          :description="info.description"
          :social1="info.social1"
          :social2="info.social2"
          :social3="info.social3"
          :social4="info.social4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #0B0B0F #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 30px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #0B0B0F;
  border-radius: 10px;
  border: 5px inset #ffffff;
}
</style>