
<script setup lang="ts">
import { ref } from "vue";
import MenuLeft from "@/components/MenuLeft.vue";
import btnPreview from "@/components/BtnPreview.vue";
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
  <div class="md:flex items-start">
    <MenuLeft class="" />
    <div class="w-full">
      <slot />
      <btnPreview />
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
</style>