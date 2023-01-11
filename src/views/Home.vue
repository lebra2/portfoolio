<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import MainStuff from '../components/MainStuff.vue';
import Musiccard from '../components/Musiccard.vue';
import HomeButtonVue from '../components/HomeButton.vue';
import MobileLinksVue from '../components/MobileLinks.vue';

</script>

<template>
    
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButtonVue/>
        </div>
            <MainStuff/>
            <MobileLinksVue/>
        <Mainfooter />
    </div>
</template>