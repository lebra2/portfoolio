<script setup>

import Navigation from './components/Navigation.vue'
import Mainfooter from './components/Mainfooter.vue';
import Musiccard from './components/Musiccard.vue';

</script>

<template>
  <img src="./assets/Pictures/Mina/My project-1(3).png" alt="taust" id="bgImage" class="fixed h-screen w-screen -z-50" style="object-fit: cover; filter: brightness(0.5) blur(10px) saturate(0.5); scale: 1.5;">
  
  <div class="">
    <RouterView />
  </div>

</template>
