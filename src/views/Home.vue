<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import MainStuff from '../components/MainStuff.vue';
import MobileLinksVue from '../components/MobileLinks.vue';

</script>

<template>
    
    <div class="bg-[#181818]">
        <div class="bg-[#212121]">
            <Navigation />
        </div>

            <MainStuff/>
            <MobileLinksVue/>
        <Mainfooter />
    </div>
</template>