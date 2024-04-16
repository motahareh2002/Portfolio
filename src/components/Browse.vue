<script setup lang="ts">
defineProps({
    title : String
})
</script>



<template>
    <span class="bg-white mx-4 rounded-[52px] p-3">
        {{ title }}
    </span>
</template>