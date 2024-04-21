
<script setup lang="ts">
import document from "@/assets/document-copy.svg";

const props = defineProps<{
  title: String;
  isPic: Boolean;
}>();
</script>


<template>
  <div
    class="md:bg-[#EFF0EC] "
  >
    <div class="flex justify-between items-center p-5 md:pl-24 md:pr-20 md:py-3">
      <img
        src="/src/assets/Rectangle 39246.svg"
        class="w-14 md:hidden rounded-full"
      />
      <span class="hidden md:block font-semibold md:text-[20px]">{{
        title
      }}</span>
      <div class="flex flex-col md:hidden ">
        <span class="font-medium text-[16px] md:text-[14px]">Glink.com/Sara_Anderson</span>
        <span class="text-[12px] md:hidden"
          >Share your Geeg to your socials</span
        >
      </div>
      <div class="flex justify-center items-center">
        <span class="font-medium hidden md:block md:text-[14px]"
          >Glink.com/Sara_Anderson</span
        >
        <div>
          <div
            class="bg-[#D9D9D9] rounded-md hidden md:block ml-2"
            v-if="isPic"
          >
            <img :src="document" alt="" class="w-8" />
          </div>
          <div class="bg-[#D9D9D9] md:hidden rounded-md ml-2" >
            <img :src="document" alt="" class="md:w-8" />
          </div>
        </div>
      </div>
    </div>
    <hr class="md:hidden border border-[#cdcdcc]" />
  </div>
</template>