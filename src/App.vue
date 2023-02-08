<script setup>
  import { Mousewheel, Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  const modules = [
      Mousewheel,
      Navigation

  ]

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
