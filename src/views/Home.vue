<script setup>
import Navigation from '../components/Navigation.vue';
import Mainfooter from '../components/Mainfooter.vue';
import MainStuff from '../components/MainStuff.vue';
import Musiccard from '../components/Musiccard.vue';
import HomeButtonVue from '../components/HomeButton.vue';
import MobileLinksVue from '../components/MobileLinks.vue';
import Mainstuff2 from '../components/Mainstuff2.vue';

</script>

<template>
    
    <div>
        <Navigation />
        <div class="md:hidden">
            <HomeButtonVue/>
        </div>
        <Mainstuff2/>
        <MobileLinksVue/>
            <MainStuff/>

            <h1 class=" text-white font-bold text-6xl text-center">Muusika</h1>
            <Musiccard/>
        <Mainfooter />
    </div>
</template>