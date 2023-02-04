<script setup>
import Navigation from '../components/Navigation.vue';
import MainStuff from '../components/MainStuff.vue';
import MobileLinksVue from '../components/MobileLinks.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';

</script>

<template>
    
    <div class="bg-[#181818]">
        <div class="bg-black bg-opacity-25">
            <Navigation />
            <MainStuff/>
        </div>
        <div class="">
            <About/>
        </div>

    </div>
</template>