<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Browse from "@/components/Browse.vue";
import CartImg from "@/components/CardImg.vue";
import img from "@/assets/Rectangle 39235.svg";
import img2 from "@/assets/Rectangle 39237.svg";
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
const carts = [
  {
    id: 1,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 2,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 3,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 4,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 5,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 6,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 7,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },

  {
    id: 8,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
  {
    id: 9,
    imgBack: img,
    avator: img2,
    title: "Sara Anderson",
    description: "fitness model, and personal trainer",
    social1: "Geegcoin.com",
    social2: "Instagram.com",
    social3: "Youtube.com",
    social4: "Contact",
  },
];
</script>

<template>
  <div class="bg-[#0b0b0f]">
    <Header />
    <div class="bg1 md:h-[600px] lg:h-[700px] xl:h-[600px]">
      <p
        class="text-white text-center pt-40 text-[30px] lg:text-[50px] w-[80%] md:w-3/5 lg:w-8/12 mx-auto font-black"
      >
        A GeeG Me link template to suit every brand and creator
      </p>
      <p
        class="text-center text-[12px] w-[80%] pt-8 mb-28 text-white md:w-3/4 lg:w-8/12 mx-auto md:pt-14"
      >
        "Discover a world of customization and personalization with GeeG.Me. Our
        diverse range of link apps, integrations, and visual styles empowers you
        to craft a link hub that reflects your unique personality and brand
        identity. Explore our extensive library of custom templates to
        effortlessly grow your online presence and connect with your audience in
        a way that truly resonates."
      </p>
      <span class="text-white mx-10 md:ml-32 xl:ml-[200px]">Browse by</span>
      <div
        class="overflow-y-auto w-10/12 sm:w-11/12 md:w-9/12 scrollbar-hide ml-10 md:ml-32 xl:ml-[200px]"
      >
        <div
          class="flex my-10 md:-mr-96 -mr-[500px] md:overflow-y-auto md:scrollbar-hide"
        >
          <Browse
            :title="browse"
            v-for="(browse, index) in browses"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="bgTemplateMain">
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-5 sm:mx-10 mt-32 sm:gap-10 md:mx-[60px] xl:mx-[190px]"
      >
        <CartImg
          v-for="i in carts"
          :key="i.id"
          :imgBack="i.imgBack"
          :avator="i.avator"
          :title="i.title"
          :description="i.description"
          :social1="i.social1"
          :social2="i.social2"
          :social3="i.social3"
          :social4="i.social4"
        />
      </div>
    </div>
    <Footer class="mt-20" />
  </div>
</template>


<style scoped>
.bg1 {
  background: url("/src/assets/bgTemplate1.svg");
  background-size: cover;
}
::-webkit-scrollbar {
  width: 10px; 
  scrollbar-width: thin;/* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #0b0b0f; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: #1d1d1d; /* color of the scroll thumb */
  border-radius: 20px; 
}
.bgTemplateMain {
  background: url("/src/assets/bgTemplateMain.svg") no-repeat;
  background-size: contain;
}
</style>