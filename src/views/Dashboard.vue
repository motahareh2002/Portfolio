
<script setup lang="ts">
import { ref } from "vue";
import MenuLeft from "@/components/MenuLeft.vue";
import HeaderPanel from "@/components/HeaderPanel.vue";
import UserInfro from "@/components/UserInfo.vue";
import img2 from "@/assets/Rectangle 39237.svg";
import avator from "@/assets/Rectangle 39246.svg";
const title = ref("Links");
const info = {
  avator: img2,
  title: "Sara Anderson",
  description: "fitness model, and personal trainer",
  social1: "Geegcoin.com",
  social2: "Instagram.com",
  social3: "Youtube.com",
  social4: "Contact",
};
</script>


<template>
  <div class="flex items-start ">
    <MenuLeft class="" />
    <div class="w-full">
      <HeaderPanel :title="title" :is-pic="true" />
      <div class="w-[73%] ">
        <div class="overflow-y-scroll h-[540px] xl:h-[620px] mt-5 px-3">
          <div class="flex items-center">
            <div class="relative w-1/5 lg:w-2/12">
              <img :src="avator" alt="" class="md:w-20" />
              <button
                class="bg-white rounded-full p-1 absolute -bottom-2 left-6"
              >
                <img src="../assets/brush.svg" alt="" />
              </button>
            </div>
            <form
              class="w-4/5 lg:w-10/12 flex flex-col lg:flex-row ml-5 lg:ml-0"
            >
              <div class="flex flex-col w-full">
                <label for="" class="mb-1 text-[13px] lg:text-[15px]"
                  >Title</label
                >
                <input
                  type="text"
                  value="Sara Anderson"
                  class="focus:outline-none border border-[#ADADAD] w-full p-3 rounded-md text-[12px] lg:text-[14px]"
                />
              </div>
              <div class="flex flex-col w-full mt-3 lg:mt-0 lg:ml-7">
                <label for="" class="mb-1 text-[13px] lg:text-[15px]"
                  >Bio</label
                >
                <input
                  type="text"
                  value="Fitness model, and personal trainer"
                  class="focus:outline-none border border-[#ADADAD] w-full p-3 rounded-md text-[12px] lg:text-[14px]"
                />
              </div>
            </form>
          </div>
          <hr class="mt-5 border border-[#cdcdcc]" />
          <div>
            <div
              class="flex flex-col lg:items-center lg:flex-row lg:justify-between"
            >
              <div class="flex justify-between my-3">
                <img src="../assets/Group 253.svg" class="md:w-10 md:mx-1" />
                <img src="../assets/Group 255.svg" class="md:w-10 md:mx-1" />
                <img src="../assets/Group 252.svg" class="md:w-10 md:mx-1" />
                <img src="../assets/Group 251.svg" class="md:w-10 md:mx-1" />
                <img src="../assets/Group 250.svg" class="md:w-10 md:mx-1" />
                <img src="../assets/Group 254.svg" class="md:w-10 md:mx-1" />
              </div>
              <button
                class="bg-[#222024] self-end lg:self-auto text-white flex justify-between p-2 lg:px-3 lg:py-2.5 rounded-lg"
              >
                <img src="../assets/send-2.svg" alt="" />
                <span>Dig GeegCoin!</span>
              </button>
            </div>
            <div class="">
              <div
                v-for="i in 10"
                :key="i"
                class="bg-[#EFF0EC] p-2 lg:p-3 rounded-md mt-3 flex justify-between"
              >
                <div class="flex items-center">
                  <button>
                    <img src="../assets/menu.svg" alt="" class="w-5" />
                  </button>
                  <span class="text-[14px] lg:text-[15px] ml-2"
                    >Useful linkS</span
                  >
                </div>
                <div class="flex items-center">
                  <input type="checkbox" class="switch" />
                  <img src="../assets/trash.svg" alt="" class="w-5 mx-2" />
                  <button>
                    <img src="../assets/more.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button class="absolute bottom-0 right-1/4">
            <img src="../assets/btnplus.svg" alt=" " class="w-24">
          </button>
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
.switch {
  -webkit-appearance: none;
  position: relative;
  border-radius: 10px;
  width: 32px;
  height: 20px;
  border: solid 1px #aaa;
  background: #aaa;
  overflow: hidden;
  transition: all 0.1s ease-out;
}
.switch:checked {
  background: #38f;
  border: solid 1px #38f;
}
.switch:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.switch:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: all 0.1s ease-out;
}
.switch:checked:after {
  left: 14px;
}
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