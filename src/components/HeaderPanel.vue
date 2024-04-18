
<script setup lang="ts">
import document from "@/assets/document-copy.svg";

const props = defineProps<{
  title : String ,
  isPic : Boolean
}>();
</script>


<template>
  <div class="bg-[#EFF0EC] flex justify-between pl-3 pr-20 py-3">
    <span class="font-semibold md:text-[20px]">{{title}}</span>
    <div class="flex items-center">
      <span class="font-medium md:text-[14px]">Glink.com/Sara_Anderson</span>
      <div class="bg-[#D9D9D9] rounded-md ml-2" v-if="isPic">
        <img :src="document" alt="" class="w-8" />
      </div>
    </div>
  </div>
</template>