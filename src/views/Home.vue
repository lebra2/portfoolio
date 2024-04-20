<script setup>
import Navigation from "../components/Navigation.vue";
import MainStuff from "../components/MainStuff.vue";
import About from "../components/About.vue";
import MobileLinks from "../components/MobileLinks.vue";
</script>

<template>
  <div class="">
    <div class="bg-black bg-opacity-25">
      <Navigation />
      <MobileLinks />
      <MainStuff />
    </div>
    <div>
      <div class="">
        <About />
      </div>
    </div>
  </div>
</template>
