<script setup lang="ts">
import MobileMenu from "./MobileMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";
</script>


<template>
  <div>
    <MobileMenu  class="md:hidden"/>
    <desktop-menu class="hidden md:block" />
  </div>
</template>


