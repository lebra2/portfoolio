<!-- <script setup>
  import { Mousewheel, Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  // const modules = [
  //     Mousewheel,
  //     Navigation

  // ]

</script> -->

<template>
  <img src="./assets/Pictures/back2.png" alt="taust" id="bgImage" class="fixed h-screen w-screen -z-50" style="object-fit: cover; filter: brightness(1) blur(5px) saturate(0.5); scale: 1.5;">
  <div>
    <router-view></router-view>
  </div>
</template>
