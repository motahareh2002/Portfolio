<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Browse from "@/components/Browse.vue";
import CartImg from "@/components/CardImg.vue";
const browses = [
  "Fashion",
  "Health and Fitness",
  "Influencer and Creator",
  "Marketing",
  "Music",
  "Small Business",
  "Social Media",
  "Sport",
];
</script>

<template>
  <div class="bg-[#0b0b0f]">
    <Header />
    <div class="bg1 md:h-[600px] lg:h-[700px] xl:h-[600px]">
      <p
        class="text-white text-center md:pt-40 md:text-[30px] lg:text-[50px] md:w-3/4 lg:w-8/12 mx-auto font-black"
      >
        A Linktree template to suit every brand and creator
      </p>
      <p class="text-center text-white md:w-3/4 lg:w-8/12 mx-auto md:pt-14">
        Different Link Apps, integrations and visual styles can help you create
        a Linktree that looks and feels like you and your brand. Explore our
        library of custom templates to grow and connect with your audience even
        more easily!
      </p>
      <div class="overflow-y-auto scrollbar-hide">
        <span>Browse by</span>
        <div
          class="flex my-10 xl:ml-[10%] md:-mr-96 md:overflow-y-auto md:scrollbar-hide lg:overflow-hidden"
        >
          <Browse
            :title="browse"
            v-for="(browse, index) in browses"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 mt-32 gap-10 md:mx-[60px] xl:mx-[190px] md:grid-cols-2 lg:grid-cols-3"
    >
      <CartImg v-for="i in 9" :key="i" />
    </div>

    <Footer class="mt-20" />
  </div>
</template>


<style scoped>
.bg1 {
  background: url("/src/assets/bgTemplate1.svg");
  background-size: cover;
}
::-webkit-scrollbar{
  width: 1px;
}
::-webkit-scrollbar-track{
  background-color:#0b0b0f ;
}
::-webkit-scrollbar-thumb{
  background-color: #181818;
  border-radius: 10px;
  width: 5px;
}

</style>