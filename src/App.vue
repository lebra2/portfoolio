<script setup>

import Navigation from './components/Navigation.vue'

</script>

<template>
  <img class="fixed h-screen w-screen -z-50" src="../assets/Pictures/kiilakas.png" alt="" style="object-fit: cover; filter: brightness(1) blur(5px) saturate(0.5); scale: 1.1;">
  
  <div class="">
    <RouterView />
  </div>

</template>
