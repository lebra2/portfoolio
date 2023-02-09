<script setup>
import AboutMe from '../components/AboutMe.vue';
import Projects from '../components/Projects.vue';
import MobileLinks from '../components/MobileLinks.vue';
import Contact from '../components/Contact.vue';
// import { Mousewheel, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Header from '../components/Header.vue';

// const modules = [
//     Mousewheel,
//     Navigation

// ]


</script>

<template>
  <Header/>
    <div class="bg-black bg-opacity-50 min-h-screen flex flex-col">
        <AboutMe/>
    </div>
    <div class="">
        <div class="">
            <Projects/>
        </div>
        <div class="bg-black bg-opacity-50">
            <MobileLinks/>
        </div>
        <div class="">
            <Contact/>
        </div>


    </div>
</template>


<!-- 
  <template>
    <img src="../assets/Pictures/back2.png" alt="taust" id="bgImage" class="fixed h-screen w-screen -z-50" style="object-fit: cover; filter: brightness(1) blur(5px) saturate(0.5); scale: 1.5;">
      <Header />
      <swiper 
      class="h-screen w-screen font-['Jetbrains']"
      :hash-navigation="{
        watchState:true,
      }"
      :navigation="true"
      :slides-per-view="1"
      :speed="350"
      :direction="'vertical'"
      :mousewheel="true"
      :modules="modules"
      >
      
        <swiper-slide class="overflow-hidden bg-black bg-opacity-50">
            <AboutMe/>
        </swiper-slide>
        <swiper-slide>
          <div class="">
            <Projects/>
          </div>
        </swiper-slide>
        <swiper-slide class="overflow-hidden bg-black bg-opacity-50">
          <MobileLinks/>
        </swiper-slide>
        <swiper-slide>
          <Contact/>
        </swiper-slide>
      </swiper>
     -->
  <!-- </template> -->