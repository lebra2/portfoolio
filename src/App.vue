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
  <!-- <img src="./assets/Pictures/moon3.png" alt="taust" id="bgImage" class="fixed h-screen w-screen -z-50" style="object-fit: cover; filter: brightness(1) blur(1px) saturate(0.5); scale: 1.5;"> -->
  <div class="noise">
    <router-view></router-view>
  </div>
</template>

<style>
.noise::before{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  /* you can control opacity of noise  */
  opacity: .1;  
  z-index: 1000;
  pointer-events: none;
  background: url(noise.gif) ;
}

</style>