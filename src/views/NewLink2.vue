
<script setup lang="ts">
import { ref } from "vue";
import MenuLeft from "@/components/MenuLeft.vue";
import HeaderPanel from "@/components/HeaderPanel.vue";
import UserInfro from "@/components/UserInfo.vue";
import img2 from "@/assets/Rectangle 39237.svg";
import BtnPreview from "@/components/BtnPreview.vue";
import thumbnail from "@/assets/grid-3-1.svg";
import layout from "@/assets/gallery.svg";
import hiverImg from "@/assets/grid-3.svg";
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
const titleInput = ref("Instagram");
const url = ref("Instagram.com/masiha_6029");
const btns = ref([
  { id: 1, img: layout, srcHover: hiverImg, title: "Layout" },
  { id: 2, img: thumbnail, srcHover: thumbnail, title: "Thumbnail" },
  { id: 3, img: layout, srcHover: hiverImg, title: "Layout" },
  { id: 4, img: thumbnail, srcHover: thumbnail, title: "Thumbnail" },
]);
const selectBtn = ref(0);
</script>


<template>
  <div class="flex items-start h-screen">
    <MenuLeft class="" />
    <div class="w-full">
      <HeaderPanel :title="title" :is-pic="false" />
      <div class="md:w-[73%]">
        <div
          class="mt-5 px-3 overflow-y-scroll h-[800px] md:h-[540px] xl:h-[620px]"
        >
          <form action="" class="w-full">
            <div class="w-full flex justify-between items-center">
              <div class="flex flex-col w-3/4">
                <label for="" class="mb-1 text-[13px] lg:text-[15px]"
                  >Title</label
                >
                <input
                  type="text"
                  placeholder="Title"
                  v-model="titleInput"
                  class="focus:outline-none border border-[#ADADAD] w-full p-3 rounded-[9px] text-[12px] lg:text-[14px]"
                />
              </div>
              <button
                :class="{ btnBg: titleInput.length }"
                class="bg-[#C9C9C9] mt-5 text-white w-1/4 ml-5 py-2.5 md:py-2 lg:p-3 rounded-[30px]"
              >
                Add
              </button>
            </div>
            <div class="flex flex-col mt-3">
              <label for="" class="mb-1 text-[13px] lg:text-[15px]">URL</label>
              <input
                type="text"
                placeholder="URL"
                v-model="url"
                class="focus:outline-none border border-[#ADADAD] w-full p-3 rounded-[9px] text-[12px] lg:text-[14px]"
              />
            </div>
          </form>
          <div class="grid grid-cols-4 gap-2 mt-5 xl:w-1/3">
            <button
              v-for="(btn, i) in btns"
              :key="i"
              class="bg-[#D9D9D9] flex flex-col items-center p-3 rounded-[10px]"
              @click="selectBtn = i"
              :class="{ btnBg: selectBtn === i }"
            >
              <img :src="btn.srcHover" alt="" v-if="selectBtn === i" />
              <img :src="btn.img" alt="" v-else />
              <span
                class="text-[12px]"
                :class="{ 'text-white': selectBtn === i }"
                >{{ btn.title }}</span
              >
            </button>
          </div>
          <div
            class="bg-[#F7F6F2] rounded-[20px] px-5 py-3 md:px-8 md:pt-10 mt-5"
          >
            <div class="md:flex justify-between items-center">
              <div class="flex items-center">
                <input type="radio" name="radio" />
                <div class="flex flex-col ml-5">
                  <span class="text-[16px] md:text-[18px]  font-medium">Classic</span>
                  <span class="text-[14px]"
                    >Efficient, direct and compact.</span
                  >
                </div>
              </div>
              <div
                class="bg-[#000000] w-full md:w-1/2 lg:w-1/3 flex justify-between items-center px-5 py-1.5 mt-8 md:mt-0 rounded-[30px] text-white"
              >
                <img src="../assets/Rectangle 39262.svg" alt="" class="w-8" />
                <span class="text-[11px]">Title</span>
                <img src="../assets/morewhite.svg" alt="" class="" />
              </div>
            </div>
            <hr class="mt-3 border border-[#cdcdcc]" />
            <div class="mt-5 md:flex justify-between" >
              <div class="md:flex flex-col items-start justify-between">
                <div class="flex items-start ">
                  <input type="radio" name="radio" />
                  <div class="flex flex-col ml-5">
                    <span class="text-[16px] md:text-[18px] font-medium">Featured</span>
                    <span class="text-[14px]"
                      >Make your link stand out with a larger, more attractive
                      display.</span
                    >
                  </div>
                </div>
                <button
                  class="text-[#4D7EFF] text-[12px] mt-3 hidden ml-7 md:block"
                >
                  Add Thumbnail
                </button>
              </div>
              <img
                src="../assets/Group 298.svg"
                alt=""
                class="mt-5 md:mt-0 md:w-1/2 lg:w-1/3"
              />
              <button class="text-[#4D7EFF] text-[12px] mt-3 md:hidden">
                Add Thumbnail
              </button>
            </div>
          </div>
        </div>
        <UserInfro
          class="fixed right-0 top-14 bottom-0 hidden md:block"
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
    <BtnPreview />
  </div>
</template>

<style scoped>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #0b0b0f #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 30px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #0b0b0f;
  border-radius: 10px;
  border: 5px inset #ffffff;
}

.btnBg {
  background: linear-gradient(266.09deg, #4285f4 -7.54%, #9240fd 90.58%);
}
</style>