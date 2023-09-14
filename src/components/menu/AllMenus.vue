<script setup lang="ts">
import MobileMenu from "./MobileMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";
</script>


<template>
  <div>
    <MobileMenu  class="lg:hidden"/>
    <desktop-menu class="hidden lg:block" />
  </div>
</template>


